// 서브패스 배포(github.io/<repo>/)를 위한 링크 헬퍼.
// astro.config 의 base 가 바뀌어도 템플릿은 그대로 둔다.
// 주의: import.meta.env 에 의존하므로 scripts/ 에서는 import 하지 않는다.

const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

/** url('/books/atomic-habits/') -> '/book-note/books/atomic-habits/' */
export function url(path) {
  return `${BASE}${path}`;
}
