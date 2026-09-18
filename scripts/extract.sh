#!/usr/bin/env bash
# 1단계(추출) 래퍼. book-to-skill 의 extract.py 를 저장소 밖에서 호출한다.
#
#   scripts/extract.sh --check                책 없이 추출기 설치 상태만 확인
#   scripts/extract.sh <pdf> <book-slug>      ~/books/archive/<book-slug>/raw.txt 로 추출
#
# book-to-skill 은 MIT 라이선스이고 이 저장소에 복제하지 않는다. 기본 위치는
# ~/books/tools/book-to-skill 이며 BOOK_TO_SKILL_DIR 로 바꿀 수 있다.
set -euo pipefail

TOOL_DIR="${BOOK_TO_SKILL_DIR:-$HOME/books/tools/book-to-skill}"
EXTRACT="$TOOL_DIR/scripts/extract.py"

if [[ ! -f "$EXTRACT" ]]; then
  echo "book-to-skill 이 없다: $TOOL_DIR" >&2
  echo "  git clone --depth 1 https://github.com/virgiliojr94/book-to-skill.git \"$TOOL_DIR\"" >&2
  exit 1
fi

if [[ "${1:-}" == "--check" ]]; then
  exec python3 "$EXTRACT" --check
fi

if [[ $# -lt 2 ]]; then
  echo "사용법: scripts/extract.sh <문서경로> <book-slug> [--mode technical]" >&2
  exit 2
fi

SRC="$1"
SLUG="$2"
shift 2

if [[ ! -f "$SRC" ]]; then
  echo "파일을 찾을 수 없다: $SRC" >&2
  exit 1
fi

OUT_DIR="$HOME/books/archive/$SLUG"
mkdir -p "$OUT_DIR/chapters"

# 추출 원문은 저장소 밖에만 둔다. 커밋하지 않는다.
python3 "$EXTRACT" "$SRC" "$@" > "$OUT_DIR/raw.txt"

echo "추출 완료 → $OUT_DIR/raw.txt ($(wc -l < "$OUT_DIR/raw.txt" | tr -d ' ') 줄)"
echo "챕터 분할본은 $OUT_DIR/chapters/ 에 둔다."
