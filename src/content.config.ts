import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 콘텐츠는 저장소 루트의 content/books/<book-slug>/ 아래에 둔다.
//   index.md           -> books
//   ch01-<slug>.md ... -> chapters
//   glossary.md        -> glossaries
// 세 컬렉션이 같은 디렉토리를 공유하므로 pattern 으로만 구분한다.
const BOOKS_BASE = './content/books';

const SLUG = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, '영문 소문자 케밥케이스만 허용');

/** 'atomic-habits/index.md' -> 'atomic-habits' */
const bookDirId = ({ entry }: { entry: string }) => entry.split('/')[0];

const books = defineCollection({
  loader: glob({ base: BOOKS_BASE, pattern: '*/index.md', generateId: bookDirId }),
  schema: z.object({
    title: z.string(),
    original_title: z.string().optional(),
    author: z.string(),
    translator: z.string().optional(),
    publisher: z.string().optional(),
    year: z.number().int().optional(),
    slug: SLUG,
    cover: z.string().optional(),
    read_at: z.coerce.date(),
    rating: z.number().int().min(1).max(5),
    tags: z.array(z.string()).default([]),
    one_liner: z.string(),
    // 책 페이지 하단 구매 링크. 없으면 표시하지 않는다.
    buy_url: z.string().url().optional(),
  }),
});

const chapters = defineCollection({
  loader: glob({
    base: BOOKS_BASE,
    pattern: '*/ch*.md',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    book: SLUG,
    order: z.number().int().min(0),
    title: z.string(),
    slug: SLUG,
  }),
});

const glossaries = defineCollection({
  loader: glob({ base: BOOKS_BASE, pattern: '*/glossary.md', generateId: bookDirId }),
  schema: z.object({
    book: SLUG,
  }),
});

export const collections = { books, chapters, glossaries };
