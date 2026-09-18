# 독서 노트

읽은 책을 챕터 단위로 정리해 남기는 개인 사이트. 책을 다 읽은 직후 한 번만 구조화 비용을
치르고, 이후에는 PDF 대신 이 사이트를 다시 본다.

- 기획: [job-radar-prd.md](./job-radar-prd.md)
- 에이전트 계약(스키마·작성 규칙·중단 조건): [AGENTS.md](./AGENTS.md)

## 한 권 올리는 흐름

```bash
# 1. 추출 — 원문은 저장소 밖(~/books/archive/)에만 남는다
scripts/extract.sh ~/books/inbox/atomic-habits.pdf atomic-habits

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
  pages/                        # 책 목록 / 책 / 챕터 / 용어집
scripts/
  extract.sh                    # 1단계 추출 래퍼 (book-to-skill 호출)
  validate-content.mjs
  build-index.mjs
```

`content/books/sample-reading-notes/` 는 스키마 렌더링 확인용 가상의 책이다. 실제 첫 책을
올린 뒤 지우면 된다.

## 원칙

- 읽지 않은 책은 올리지 않는다. 이 사이트는 읽기를 대체하지 않는다.
- 원문은 커밋하지 않는다. 추출 결과는 `~/books/archive/` 에만 둔다.
- 검수 없이 게시하지 않는다. 초안은 에이전트가, 선택은 사람이 한다.
