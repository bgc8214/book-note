#!/usr/bin/env node
/**
 * content/index.md 를 만든다. 에이전트가 먼저 읽는 목차 파일이고, 본문은 담지 않는다.
 *
 *   node scripts/build-index.mjs                 전체 재생성
 *   node scripts/build-index.mjs --book <slug>   해당 책 블록만 교체(나머지 블록은 그대로)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { INDEX_FILE, readBooks } from './lib/content.mjs';
import { bookByline, chapterOneLiner, formatDate } from '../src/lib/content.mjs';

const HEADER = `# 독서 노트 인덱스

자동 생성 파일이다. 직접 고치지 말고 \`npm run index\` 로 다시 만든다.
에이전트는 이 파일에서 열어야 할 파일을 정한 뒤 그 파일만 연다. 경로는 \`content/\` 기준이다.`;

/** 책 하나의 블록. '## ' 로 시작해 다음 '## ' 직전까지. */
function bookBlock(book) {
  const d = book.index.data;
  const lines = [
    `## ${d.title} (${bookByline(d)}) — ${d.slug}`,
    `태그: ${(d.tags ?? []).join(', ') || '없음'} · 읽은 날: ${formatDate(d.read_at)} · 평점: ${d.rating}`,
    `한 줄: ${d.one_liner}`,
    '',
  ];

  for (const chapter of book.chapters) {
    const summary = chapterOneLiner(chapter.body);
    lines.push(
      `- ${chapter.data.order}장 ${chapter.data.title}${summary ? ` — ${summary}` : ''} → \`books/${d.slug}/${chapter.file}\``
    );
  }
  if (book.glossary) lines.push(`- 용어집 → \`books/${d.slug}/glossary.md\``);

  return lines.join('\n');
}

/** 인덱스 문서를 헤더 + 책 블록들로 쪼갠다. */
function splitIndex(text) {
  const at = text.indexOf('\n## ');
  if (at === -1) return { header: text.trimEnd(), blocks: [] };

  const header = text.slice(0, at).trimEnd();
  const blocks = text
    .slice(at + 1)
    .split(/^(?=## )/m)
    .map((b) => b.trimEnd())
    .filter(Boolean);
  return { header, blocks };
}

const slugOf = (block) => block.match(/^## .*—\s*([a-z0-9-]+)\s*$/m)?.[1] ?? null;

const books = readBooks().filter((b) => b.index?.data?.slug);
books.sort((a, b) => new Date(b.index.data.read_at) - new Date(a.index.data.read_at));

const flagAt = process.argv.indexOf('--book');
const only = flagAt === -1 ? null : process.argv[flagAt + 1];

let blocks;

if (only) {
  const target = books.find((b) => b.index.data.slug === only);
  if (!target) {
    console.error(`content/books 에서 책을 찾을 수 없다: ${only}`);
    process.exit(1);
  }

  let existing = { blocks: [] };
  try {
    existing = splitIndex(readFileSync(INDEX_FILE, 'utf8'));
  } catch {
    /* 인덱스가 아직 없으면 새로 만든다 */
  }

  const block = bookBlock(target);
  const at = existing.blocks.findIndex((b) => slugOf(b) === only);
  blocks = [...existing.blocks];
  if (at === -1) blocks.unshift(block);
  else blocks[at] = block;

  console.log(`인덱스 ${only} 블록 ${at === -1 ? '추가' : '교체'}`);
} else {
  blocks = books.map(bookBlock);
  console.log(`인덱스 재생성 — 책 ${books.length}권`);
}

writeFileSync(INDEX_FILE, [HEADER, ...blocks].join('\n\n') + '\n', 'utf8');
