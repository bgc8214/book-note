# 독서 노트

읽은 책을 챕터 단위로 정리해 남기는 개인 사이트. 책을 다 읽은 직후 한 번만 구조화 비용을
치르고, 이후에는 PDF 대신 이 사이트를 다시 본다.

**https://bgc8214.github.io/book-note/**

- 기획: [job-radar-prd.md](./job-radar-prd.md)
- 에이전트 계약(스키마·작성 규칙·중단 조건): [AGENTS.md](./AGENTS.md)

## 한 권 올리는 흐름

```bash
# 1. 추출 — 원문은 저장소 밖(~/books/archive/)에만 남는다
scripts/extract.sh ~/books/inbox/atomic-habits.pdf atomic-habits
scripts/extract-cover.sh ~/books/inbox/atomic-habits.pdf atomic-habits

# 2~3. 구조화 + 파일 생성 — 에이전트에게 시킨다
#    "~/books/archive/atomic-habits/raw.txt 로 AGENTS.md 스키마에 맞춰 초안 만들어줘"

# 4. 검수 후 커밋. 자동 게시는 하지 않는다
npm run build && npm run preview
```

## 명령

| 명령               | 하는 일                                             |
| ------------------ | --------------------------------------------------- |
| `npm run dev`      | 개발 서버 (`astro dev --background` 로 띄워도 된다) |
| `npm run validate` | 섹션 구성·항목 수 상한·슬러그 충돌 검사             |
| `npm run index`    | `content/index.md`(에이전트용 목차) 갱신            |
| `npm run build`    | validate → index → 정적 빌드                        |

## 구조

```
content/
  index.md                      # 에이전트가 먼저 읽는 목차. 자동 생성
  books/<book-slug>/
    index.md                    # 책 메타 + 총평
    ch01-<chapter-slug>.md      # 챕터. 섹션 5종 고정
    glossary.md                 # 책별 용어집
src/
  content.config.ts             # 프론트매터 스키마 (계약)
  lib/content.mjs               # 사이트와 scripts 가 공유하는 순수 함수
  pages/                        # 책 목록 / 책 / 챕터 / 용어집 / 오늘 다시 보기
public/covers/                  # 책 표지 썸네일 (PDF 1쪽에서 추출)
scripts/
  extract.sh                    # 1단계 추출 래퍼 (book-to-skill 호출)
  extract-cover.sh              # 표지 썸네일 추출
  validate-content.mjs
  build-index.mjs
```

## 오늘 다시 보기

`/today` 는 쌓인 요점과 실천 아이템 중 다섯 개를 날짜에 따라 꺼내 보여준다. 찾아가야만
다시 보게 되는 구조를 메우기 위한 페이지다. 날짜를 시드로 쓰기 때문에 같은 날에는 같은
항목이 나오고 서버는 필요 없다.

실천 아이템 체크박스는 실제로 눌린다. 상태는 브라우저 localStorage 에만 남는다.

## 배포

`main` 에 푸시하면 GitHub Actions 가 `npm run build`(validate → index → 빌드)를 돌리고
GitHub Pages 로 올린다. **스키마를 어긴 콘텐츠는 validate 에서 걸려 배포되지 않는다.**

서브패스(`/book-note/`) 배포라 `astro.config.mjs` 에 `base` 가 있다. 마크다운 본문의
`/books/...` 링크에는 hast 플러그인(`src/lib/hast-base-links.mjs`)이 base 를 붙이므로
**콘텐츠는 base 를 모른다.** 커스텀 도메인을 붙일 때는 `astro.config.mjs` 의 `SITE` 를
바꾸고 `BASE` 를 `''` 로 두면 되고, 마크다운은 손대지 않는다.

## 원칙

- 읽지 않은 책은 올리지 않는다. 이 사이트는 읽기를 대체하지 않는다.
- 원문은 커밋하지 않는다. 추출 결과는 `~/books/archive/` 에만 둔다.
- 검수 없이 게시하지 않는다. 초안은 에이전트가, 선택은 사람이 한다.
