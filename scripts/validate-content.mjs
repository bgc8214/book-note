#!/usr/bin/env node
/**
 * 콘텐츠가 스키마 계약을 지키는지 검사한다.
 * 프론트매터 타입 검증은 Astro content collections 이 빌드 때 하고,
 * 여기서는 그쪽이 못 보는 것 — 섹션 구성, 항목 수 상한, 슬러그 충돌 — 을 본다.
 */
import { SECTIONS, SECTION_LIMITS, countItems, readBooks, splitSections } from './lib/content.mjs';

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

const books = readBooks();

if (books.length === 0) {
  console.log('content/books 아래에 책이 없다. 검사할 것이 없음.');
  process.exit(0);
}

for (const book of books) {
  const { dir, dirPath, index, chapters, glossary } = book;

  if (!index) {
    err(dirPath, 'index.md 가 없다.');
    continue;
  }
  if (!index.data) {
    err(index.path, '프론트매터가 없다.');
    continue;
  }

  const slug = index.data.slug;
  if (slug !== dir) {
    err(index.path, `slug(${slug}) 가 디렉토리명(${dir}) 과 다르다.`);
  }
  if (!index.data.one_liner) err(index.path, 'one_liner 가 비어 있다.');

  if (glossary && glossary.data?.book !== slug) {
    err(glossary.path, `book(${glossary.data?.book}) 이 ${slug} 가 아니다.`);
  }

  // ── 챕터 ────────────────────────────────────────
  const seenSlug = new Map();
  const seenOrder = new Map();

  for (const chapter of chapters) {
    const { file, path, data, body } = chapter;

    if (!data) {
      err(path, '프론트매터가 없다.');
      continue;
    }
    if (data.book !== slug) err(path, `book(${data.book}) 이 ${slug} 가 아니다.`);

    if (data.slug === 'glossary') {
      err(path, "slug 가 'glossary' 면 용어집 페이지와 URL 이 충돌한다.");
    }
    if (seenSlug.has(data.slug)) {
      err(path, `slug 가 ${seenSlug.get(data.slug)} 와 중복된다.`);
    } else {
      seenSlug.set(data.slug, file);
    }
    if (seenOrder.has(data.order)) {
      err(path, `order ${data.order} 가 ${seenOrder.get(data.order)} 와 중복된다.`);
    } else {
      seenOrder.set(data.order, file);
    }

    const named = file.match(/^ch(\d+)-(.+)\.md$/);
    if (!named) {
      err(path, '파일명이 chNN-<slug>.md 형식이 아니다.');
    } else {
      if (Number(named[1]) !== data.order) {
        warn(path, `파일명 번호(${named[1]}) 와 order(${data.order}) 가 다르다.`);
      }
      if (named[2] !== data.slug) {
        warn(path, `파일명 슬러그(${named[2]}) 와 프론트매터 slug(${data.slug}) 가 다르다.`);
      }
    }

    // ── 섹션 구성 ──────────────────────────────────
    const sections = splitSections(body);
    const names = sections.map((s) => s.name);

    const unknown = names.filter((n) => !SECTIONS.includes(n));
    if (unknown.length) err(path, `허용되지 않은 섹션: ${unknown.join(', ')}`);

    const dupes = names.filter((n, i) => names.indexOf(n) !== i);
    if (dupes.length) err(path, `섹션이 중복된다: ${[...new Set(dupes)].join(', ')}`);

    const known = names.filter((n) => SECTIONS.includes(n));
    const ordered = [...known].sort((a, b) => SECTIONS.indexOf(a) - SECTIONS.indexOf(b));
    if (known.join('|') !== ordered.join('|')) {
      err(path, `섹션 순서가 규칙과 다르다. 현재: ${known.join(' → ')}`);
    }

    if (!names.includes('핵심 아이디어')) err(path, '## 핵심 아이디어 는 필수다.');

    for (const section of sections) {
      if (!section.content) {
        err(path, `## ${section.name} 가 비어 있다. 빈 섹션은 헤딩째 생략한다.`);
        continue;
      }
      const limit = SECTION_LIMITS[section.name];
      if (!limit) continue;
      const n = countItems(section);
      const [min, max] = limit;
      if (n < Math.max(min, 1) || n > max) {
        err(path, `## ${section.name} 항목이 ${n}개. 기준은 ${min}-${max}개.`);
      }
    }

    // 인용은 장당 한 문장 이내 (저작권 규칙)
    const quotes = (body.match(/^>\s+/gm) || []).length;
    if (quotes > 1) warn(path, `인용 블록이 ${quotes}개. 장당 한 문장 이내로 둔다.`);
  }

  if (chapters.length === 0) warn(dirPath, '챕터 파일이 없다.');
}

// ── 책 간 슬러그 충돌 ─────────────────────────────
const slugs = new Map();
for (const book of books) {
  const slug = book.index?.data?.slug;
  if (!slug) continue;
  if (slugs.has(slug)) errors.push(`슬러그 ${slug} 가 ${slugs.get(slug)} 와 ${book.dir} 에서 겹친다.`);
  else slugs.set(slug, book.dir);
}

for (const w of warnings) console.warn(`  경고  ${w}`);
for (const e of errors) console.error(`  오류  ${e}`);

const summary = `책 ${books.length}권 · 오류 ${errors.length} · 경고 ${warnings.length}`;
if (errors.length) {
  console.error(`\n검증 실패 — ${summary}`);
  process.exit(1);
}
console.log(`검증 통과 — ${summary}`);
