import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

export const CONTENT_DIR = 'content';
export const BOOKS_DIR = join(CONTENT_DIR, 'books');
export const INDEX_FILE = join(CONTENT_DIR, 'index.md');

/** 챕터 본문에서 허용하는 섹션. 이 순서로만 등장할 수 있다. */
export const SECTIONS = ['핵심 아이디어', '요점', '실천 아이템', '용어', '연결'];

/** 섹션별 항목 수 [최소, 최대]. 핵심 아이디어는 산문이라 개수 제한 없음. */
export const SECTION_LIMITS = {
  요점: [3, 6],
  '실천 아이템': [2, 5],
  용어: [0, 8],
  연결: [0, 3],
};

/**
 * 프론트매터 파서. 이 저장소의 스키마(문자열·숫자·날짜·인라인 배열)만 다룬다.
 * 범용 YAML 이 아니므로 스키마를 벗어난 값은 문자열로 남는다.
 */
export function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: null, body: raw };

  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!kv) continue;

    const key = kv[1];
    let value = kv[2].replace(/\s+#\s.*$/, '').trim(); // 줄 끝 주석 제거

    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1).trim();
      data[key] = inner ? inner.split(',').map((s) => unquote(s.trim())) : [];
    } else if (/^-?\d+$/.test(value)) {
      data[key] = Number(value);
    } else {
      data[key] = unquote(value);
    }
  }
  return { data, body: m[2] };
}

function unquote(s) {
  return s.replace(/^['"](.*)['"]$/, '$1');
}

/** 본문을 '## 헤딩' 단위로 쪼갠다. 등장 순서를 유지한다. */
export function splitSections(body) {
  const out = [];
  const re = /^##\s+(.+?)\s*$/gm;
  let match;
  const marks = [];
  while ((match = re.exec(body))) marks.push({ name: match[1], start: match.index, end: re.lastIndex });

  marks.forEach((mark, i) => {
    const until = i + 1 < marks.length ? marks[i + 1].start : body.length;
    out.push({ name: mark.name, content: body.slice(mark.end, until).trim() });
  });
  return out;
}

/** 섹션 본문의 항목 수. 불릿·체크리스트·정의 목록을 센다. */
export function countItems(section) {
  const lines = section.content.split(/\r?\n/);
  if (section.name === '용어') {
    // 정의 목록: 용어 줄 다음에 ': 정의' 가 오는 형태
    return lines.filter((l) => /^:\s+/.test(l)).length;
  }
  return lines.filter((l) => /^\s*(?:[-*+]|\d+\.)\s+/.test(l)).length;
}

/** content/books 아래의 책 디렉토리들을 읽어 구조화한다. */
export function readBooks() {
  let dirs = [];
  try {
    dirs = readdirSync(BOOKS_DIR).filter((d) => statSync(join(BOOKS_DIR, d)).isDirectory());
  } catch {
    return [];
  }

  return dirs.sort().map((dir) => {
    const dirPath = join(BOOKS_DIR, dir);
    const files = readdirSync(dirPath).filter((f) => f.endsWith('.md'));

    const readEntry = (file) => {
      const raw = readFileSync(join(dirPath, file), 'utf8');
      const { data, body } = parseFrontmatter(raw);
      return { file, path: join(dirPath, file), data, body };
    };

    const index = files.includes('index.md') ? readEntry('index.md') : null;
    const glossary = files.includes('glossary.md') ? readEntry('glossary.md') : null;
    const chapters = files
      .filter((f) => f.startsWith('ch'))
      .map(readEntry)
      .sort((a, b) => (a.data?.order ?? 0) - (b.data?.order ?? 0));

    return { dir, dirPath, index, chapters, glossary };
  });
}
