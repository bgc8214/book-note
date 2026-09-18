// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { baseLinks } from './src/lib/hast-base-links.mjs';

// GitHub Pages 서브패스 배포. 커스텀 도메인을 붙이면 BASE 를 '' 로 바꾸고
// site 만 그 도메인으로 고치면 된다. 콘텐츠는 손댈 필요 없다.
const SITE = 'https://bgc8214.github.io';
const BASE = '/book-note';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  markdown: {
    processor: satteri({
      // definitionList: '## 용어' 의 `용어 / : 정의` 를 <dl> 로 렌더한다.
      features: { definitionList: true },
      // 본문의 `/books/...` 링크에 base 를 붙인다.
      hastPlugins: BASE ? [baseLinks(BASE)] : [],
    }),
  },
});
