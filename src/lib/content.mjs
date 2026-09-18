// 사이트 페이지와 scripts/ 가 함께 쓰는 순수 함수들. 파일시스템을 건드리지 않는다.

/** 챕터 본문에서 '## 핵심 아이디어' 섹션 본문을 뽑는다. */
export function coreIdea(body = '') {
  // $ 는 /m 아래에서 줄 끝에도 걸리므로, 문자열 끝은 $(?![\s\S]) 로 못박는다.
  const m = body.match(/^##\s*핵심 아이디어[^\n]*\n([\s\S]*?)(?=\n##\s|$(?![\s\S]))/m);
  return m ? m[1].trim() : '';
}

/**
 * 챕터 한 줄 요약. 핵심 아이디어의 첫 문장을 쓴다.
 * 챕터 프론트매터에 요약 필드를 두지 않기 위한 선택 — 요약은 본문에서 파생된다.
 */
export function chapterOneLiner(body = '') {
  const idea = coreIdea(body).replace(/\s+/g, ' ');
  if (!idea) return '';
  const m = idea.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : idea).trim();
}

/** 지정한 '## <이름>' 섹션의 본문을 뽑는다. 없으면 빈 문자열. */
export function section(body = '', name) {
  const re = new RegExp(`^##\\s*${name}[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$(?![\\s\\S]))`, 'm');
  const m = body.match(re);
  return m ? m[1].trim() : '';
}

/**
 * 섹션의 불릿 항목을 배열로. 체크리스트 표시([ ])는 떼어낸다.
 * 여러 줄에 걸친 항목은 한 줄로 합친다.
 */
export function bullets(body = '', name) {
  const text = section(body, name);
  if (!text) return [];

  const out = [];
  for (const line of text.split(/\r?\n/)) {
    const started = line.match(/^\s*(?:[-*+]|\d+\.)\s+(.*)$/);
    if (started) {
      out.push(started[1].replace(/^\[[ xX]\]\s*/, '').trim());
    } else if (out.length && line.trim()) {
      out[out.length - 1] += ' ' + line.trim(); // 이어지는 줄
    }
  }
  return out.filter(Boolean);
}

/**
 * 본문의 '## ' 헤딩 목록. 마크다운 렌더러가 붙이는 id 규칙(공백 → 하이픈)을 그대로 따라
 * 목차에서 같은 앵커를 가리키게 한다.
 */
export function headings(body = '') {
  return [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((m) => {
    const text = m[1].trim();
    return { text, id: text.replace(/\s+/g, '-') };
  });
}

/** 2026-09-14 형태로. 사이트 전체에서 이 표기만 쓴다. */
export function formatDate(d) {
  return new Date(d).toISOString().slice(0, 10);
}

/** 평점 1-5 를 ●○ 로. */
export function ratingMarks(rating) {
  return '●'.repeat(rating) + '○'.repeat(5 - rating);
}

/** 'James Clear, 2019' */
export function bookByline(data) {
  return data.year ? `${data.author}, ${data.year}` : data.author;
}
