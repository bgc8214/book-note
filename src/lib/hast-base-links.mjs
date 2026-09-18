/**
 * 마크다운 본문의 루트 절대 링크(`/books/...`)에 base 를 붙이는 Sätteri hast 플러그인.
 *
 * 콘텐츠는 base 를 모른 채 `/books/<book>/<chapter>/` 로만 쓴다. 서브패스 배포에서
 * 경로를 맞추는 일은 빌드가 한다 — 나중에 커스텀 도메인으로 옮기면 base 만 지우면 되고
 * 마크다운은 한 글자도 고칠 필요가 없다.
 */
export function baseLinks(base) {
  const prefix = base.replace(/\/$/, '');

  return {
    name: 'base-internal-links',
    element: {
      filter: ['a'],
      visit(node, ctx) {
        const href = node.properties?.href;
        if (typeof href !== 'string') return;
        // 외부 링크(//host, https://), 앵커, 상대 경로는 건드리지 않는다.
        if (!href.startsWith('/') || href.startsWith('//')) return;
        if (href.startsWith(`${prefix}/`)) return;
        ctx.setProperty(node, 'href', `${prefix}${href}`);
      },
    },
  };
}
