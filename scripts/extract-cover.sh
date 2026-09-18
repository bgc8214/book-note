#!/usr/bin/env bash
# 책 표지를 PDF 에서 뽑아 public/covers/<slug>.jpg 로 저장한다.
# 서지 식별용 썸네일이므로 목록에 쓸 크기로만 뽑는다(원본 해상도로 올리지 않는다).
#
#   scripts/extract-cover.sh <pdf> <slug>              # 스프레드 PDF: 1쪽 오른쪽 절반
#   scripts/extract-cover.sh <pdf> <slug> --half left  # 왼쪽 절반
#   scripts/extract-cover.sh <pdf> <slug> --half none  # 스프레드가 아닌 PDF
#   scripts/extract-cover.sh <pdf> <slug> --page 3     # 표지가 1쪽이 아닐 때
set -euo pipefail

SRC="${1:-}"
SLUG="${2:-}"
shift 2 2>/dev/null || true

if [[ -z "$SRC" || -z "$SLUG" ]]; then
  echo "사용법: scripts/extract-cover.sh <pdf> <slug> [--half left|right|none] [--page N]" >&2
  exit 2
fi
[[ -f "$SRC" ]] || { echo "파일을 찾을 수 없다: $SRC" >&2; exit 1; }

HALF=right
PAGE=1
while [[ $# -gt 0 ]]; do
  case "$1" in
    --half) HALF="$2"; shift 2 ;;
    --page) PAGE="$2"; shift 2 ;;
    *) echo "알 수 없는 옵션: $1" >&2; exit 2 ;;
  esac
done

# 페이지 크기(pt)를 읽어 크롭 영역을 계산한다.
read -r PW PH < <(pdfinfo -f "$PAGE" -l "$PAGE" "$SRC" | awk '/^Page.*size:/ {print $4, $6; exit}')
[[ -n "${PW:-}" ]] || { echo "페이지 크기를 읽지 못했다." >&2; exit 1; }

TARGET_W=360                        # 썸네일 가로(px). 레티나까지 감안한 상한.
case "$HALF" in
  none)  CROP_X=0;                         CROP_W_PT=$PW ;;
  left)  CROP_X=0;                         CROP_W_PT=$(echo "$PW / 2" | bc -l) ;;
  right) CROP_X=-1;                        CROP_W_PT=$(echo "$PW / 2" | bc -l) ;;
  *) echo "--half 는 left|right|none" >&2; exit 2 ;;
esac

DPI=$(echo "$TARGET_W * 72 / $CROP_W_PT" | bc -l | cut -d. -f1)
[[ "$DPI" -ge 1 ]] || DPI=1
CROP_W_PX=$(echo "$CROP_W_PT * $DPI / 72" | bc | cut -d. -f1)
CROP_H_PX=$(echo "$PH * $DPI / 72" | bc | cut -d. -f1)
[[ "$CROP_X" == "-1" ]] && CROP_X=$CROP_W_PX || CROP_X=0

OUT_DIR="public/covers"
mkdir -p "$OUT_DIR"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

pdftoppm -r "$DPI" -f "$PAGE" -l "$PAGE" \
  -x "$CROP_X" -y 0 -W "$CROP_W_PX" -H "$CROP_H_PX" \
  -jpeg -jpegopt quality=82 "$SRC" "$TMP/cover"

FOUND="$(find "$TMP" -name 'cover*.jpg' | head -1)"
[[ -n "$FOUND" ]] || { echo "표지를 뽑지 못했다." >&2; exit 1; }
mv "$FOUND" "$OUT_DIR/$SLUG.jpg"

echo "표지 저장 → $OUT_DIR/$SLUG.jpg (${CROP_W_PX}x${CROP_H_PX}px, $(du -h "$OUT_DIR/$SLUG.jpg" | cut -f1))"
echo "index.md 프론트매터에 다음을 넣는다:  cover: /covers/$SLUG.jpg"
