# 독서 노트 인덱스

자동 생성 파일이다. 직접 고치지 말고 `npm run index` 로 다시 만든다.
에이전트는 이 파일에서 열어야 할 파일을 정한 뒤 그 파일만 연다. 경로는 `content/` 기준이다.

## 자바/스프링 개발자를 위한 실용주의 프로그래밍 (김우근, 2024) — pragmatic-programming-java-spring
태그: 객체지향, 스프링, 테스트, 아키텍처, 설계 · 읽은 날: 2026-09-18 · 평점: 5
한 줄: 스프링과 JPA는 기술이고 개발 능력은 따로 있다는 주장에서 출발해, 객체지향·아키텍처·테스트를 다시 세우는 책

- 0장 들어가며 — 개발을 배워야 한다 — 개발자는 기술보다 개발을 먼저 배워야 한다. → `books/pragmatic-programming-java-spring/ch00-why-learn-development.md`
- 1장 절차지향과 비교하기 — 객체지향을 이해하려면 절차지향을 먼저 알아야 한다. → `books/pragmatic-programming-java-spring/ch01-procedural-vs-oop.md`
- 2장 객체의 종류 — VO, DTO, DAO, 엔티티는 저연차 때 외운 정의가 시간이 갈수록 혼란이 되는 대표적인 용어들이다. → `books/pragmatic-programming-java-spring/ch02-kinds-of-objects.md`
- 3장 행동 — 객체는 데이터 덩어리가 아니라 행동하는 존재다. → `books/pragmatic-programming-java-spring/ch03-behavior.md`
- 4장 SOLID — SOLID의 목표는 유지보수성과 확장성이고, 다섯 원칙을 관통하는 것은 의존성이다. → `books/pragmatic-programming-java-spring/ch04-solid.md`
- 5장 순환 참조 — 순환 참조는 접근 경로를 늘린다. → `books/pragmatic-programming-java-spring/ch05-circular-reference.md`
- 6장 안티패턴 — 개발에 정답은 없지만 "이렇게 만들면 유지보수와 확장 관점에서 좋지 못하다"고 알려진 안티패턴은 있다. → `books/pragmatic-programming-java-spring/ch06-antipatterns.md`
- 7장 서비스 — 서비스는 일을 하는 곳이 아니라 일을 위임하는 곳이다. → `books/pragmatic-programming-java-spring/ch07-service.md`
- 8장 레이어드 아키텍처 — 레이어드 아키텍처는 단순하고 직관적이어서 입문 자료에 가장 많이 등장하고, 그만큼 가장 많이 잘못 쓰인다. → `books/pragmatic-programming-java-spring/ch08-layered-architecture.md`
- 9장 모듈 — 모듈이 무엇이냐는 질문에 사람들은 자바의 기능을 들어 답한다. → `books/pragmatic-programming-java-spring/ch09-module.md`
- 10장 도메인 — 애플리케이션의 본질은 스프링이나 JPA가 아니라 도메인이다. → `books/pragmatic-programming-java-spring/ch10-domain.md`
- 11장 알아두면 유용한 스프링 활용법 — 스프링을 쓰면서도 의외로 모르고 넘어가는 동작들이 있다. → `books/pragmatic-programming-java-spring/ch11-spring-tips.md`
- 12장 자동 테스트 — 자동 테스트의 정체는 인수 테스트에서 시작하면 잘 보인다. → `books/pragmatic-programming-java-spring/ch12-automated-testing.md`
- 13장 테스트 피라미드 — 테스트 피라미드의 축은 개수나 중요도가 아니라 **실제 사용자의 사용 사례와 얼마나 가까운지**다. → `books/pragmatic-programming-java-spring/ch13-test-pyramid.md`
- 14장 테스트 대역 — 테스트 대역의 "대역"은 대역폭이 아니라 영화의 스턴트맨, 그 대역이다. → `books/pragmatic-programming-java-spring/ch14-test-double.md`
- 15장 테스트 가능성 — 테스트를 "개발이 끝난 뒤 추가하는 검증 수단"으로만 보면 테스트의 절반을 놓친다. → `books/pragmatic-programming-java-spring/ch15-testability.md`
- 16장 테스트와 설계 — 테스트와 좋은 설계가 상호보완적인 이유는 둘이 추구하는 목표에 교집합이 있기 때문이다. → `books/pragmatic-programming-java-spring/ch16-test-and-design.md`
- 17장 테스트와 개발 방법론 — 테스트를 공부하면 반드시 만나는 두 방법론이 있다. → `books/pragmatic-programming-java-spring/ch17-test-methodology.md`
- 용어집 → `books/pragmatic-programming-java-spring/glossary.md`

## 시스템 설계 면접 완벽 가이드 (지용 탄, 2025) — system-design-interview
태그: 시스템설계, 기술면접, 아키텍처, 백엔드 · 읽은 날: 2026-09-18 · 평점: 4
한 줄: 시스템 설계 면접을 정답 찾기가 아니라 트레이드오프를 논의하는 자리로 규정하고, 개념 6장과 실제 서비스 설계 사례 11장으로 나눠 다룬 책

- 1장 시스템 설계 개념 둘러보기 — 시스템 설계 면접은 정답을 찾는 자리가 아니라 트레이드오프를 논의하는 자리다. → `books/system-design-interview/ch01-design-concepts.md`
- 2장 일반적인 시스템 설계 면접 흐름 — 1시간 안에 아는 것을 다 전달할 수는 없다. → `books/system-design-interview/ch02-interview-flow.md`
- 3장 비기능적 요구사항 — 기능적 요구사항이 시스템의 입력과 출력을 말한다면, 비기능적 요구사항은 그 밖의 전부다. → `books/system-design-interview/ch03-non-functional-requirements.md`
- 4장 데이터베이스 확장 — 상태 저장 서비스는 상태 비저장 서비스보다 설계가 훨씬 복잡하고 오류도 잦다. → `books/system-design-interview/ch04-database-scaling.md`
- 5장 분산 트랜잭션 — 여러 서비스에 같은 데이터를 써야 할 때, 하나의 쓰기가 어디선 성공하고 어디선 실패하는 상황을 막아야 한다. → `books/system-design-interview/ch05-distributed-transactions.md`
- 6장 기능적 분할을 위한 공통 서비스 — 기능이 다른 서비스라도 비기능적 요구사항은 같을 수 있다. → `books/system-design-interview/ch06-common-services.md`
- 7장 크레이그리스트 설계 — 2부의 첫 사례는 단순성에 최적화된 시스템이다. → `books/system-design-interview/ch07-craigslist.md`
- 8장 속도 제한 서비스 설계 — 속도 제한은 시스템 설계 면접에서 거의 항상 언급해야 하는 공통 서비스다. → `books/system-design-interview/ch08-rate-limiting.md`
- 9장 알림/경보 서비스 설계 — 여러 플랫폼에 같은 기능을 제공해야 하는 서비스의 전형이다. → `books/system-design-interview/ch09-notification-service.md`
- 10장 데이터베이스 배치 감사 서비스 설계 — 데이터 무결성은 한 번 보장하고 끝나는 성질이 아니다. → `books/system-design-interview/ch10-batch-audit.md`
- 11장 자동 완성 / 타입어헤드 설계 — 자동 완성은 대량의 데이터를 계속 수집·처리해 사용자가 조회할 작은 데이터 구조로 줄이는 시스템의 전형이다. → `books/system-design-interview/ch11-autocomplete.md`
- 12장 플리커 설계 — 이미지 공유 서비스에서 필요한 것과 필요하지 않은 것을 가르는 장이다. → `books/system-design-interview/ch12-flickr.md`
- 13장 콘텐츠 배포 네트워크 설계 — 앞선 장들이 "CDN을 쓴다"고 말할 때 그 CDN을 직접 설계해보는 장이다. → `books/system-design-interview/ch13-cdn.md`
- 14장 문자 메시징 앱 설계 — 메시징 앱 설계의 실질은 기능이 아니라 라우팅이다. → `books/system-design-interview/ch14-messaging.md`
- 15장 에어비앤비 설계 — 이 장의 교훈은 설계 기법이 아니라 범위 설정이다. → `books/system-design-interview/ch15-airbnb.md`
- 16장 뉴스 피드 설계 — 개인화된 피드를 만드는 일은 데이터를 중심에 놓고 시작한다. → `books/system-design-interview/ch16-news-feed.md`
- 17장 판매량 기준 아마존 상위 10개 제품 대시보드 설계 — 하루 10억 건의 이벤트에서 상위 10개를 뽑는 문제다. → `books/system-design-interview/ch17-top-k-dashboard.md`
- 용어집 → `books/system-design-interview/glossary.md`

## 개발자 기술 면접 노트 (이남희, 2025) — tech-interview-note-for-developers
태그: 기술면접, 커리어, 이직, 백엔드 · 읽은 날: 2026-09-18 · 평점: 4
한 줄: 쿠팡과 카카오에서 면접관을 지낸 저자가 서류 준비부터 처우 협상까지 개발자 채용 절차 전체를 면접관 관점에서 정리한 책

- 1장 취업을 위한 기본 준비물 — 지원 서류는 필요해진 뒤에 만드는 것이 아니라 상시 유지하는 것이다. → `books/tech-interview-note-for-developers/ch01-basic-preparation.md`
- 2장 지원하려는 회사와 목표 정하기 — 지원할 회사를 고르는 일은 조건에 맞는 목록을 만드는 게 아니라, 그 회사가 나를 뽑을 이유가 있는지까지 함께 판단하는 양방향 작업이다. → `books/tech-interview-note-for-developers/ch02-finding-companies.md`
- 3장 취업과 이직을 위한 첫걸음, 이력서와 자기소개서 — 면접관이 이력서 한 장을 보는 시간은 짧으면 1분, 길어야 10분이다. → `books/tech-interview-note-for-developers/ch03-resume-and-cover-letter.md`
- 4장 시선을 사로잡는 커리어, 경력기술서 — 경력기술서는 해온 일을 나열하는 문서가 아니라 면접관이 무엇을 물을지 설계하는 문서다. → `books/tech-interview-note-for-developers/ch04-career-portfolio.md`
- 5장 프로그래머의 역량 — 면접이 판단하는 역량은 기술 지식만이 아니다. → `books/tech-interview-note-for-developers/ch05-programmer-competency.md`
- 6장 코딩 테스트 준비 전략 — 코딩 테스트는 난해한 문제를 푸는 시험이 아니라 기본 개념으로 문제를 해결할 수 있는지 보는 절차다. → `books/tech-interview-note-for-developers/ch06-coding-test.md`
- 7장 기술 면접 대비하기 — 기술 면접은 개념을 아는지 확인하는 자리가 아니라 그 개념을 어디에 적용하고 어떤 문제를 해결할 수 있는지 묻는 자리다. → `books/tech-interview-note-for-developers/ch07-tech-interview.md`
- 8장 기술 면접 이후 만나게 될 난관 — 2차 면접의 질문에는 대체로 정답이 없다. → `books/tech-interview-note-for-developers/ch08-after-tech-interview.md`
- 9장 AI 시대의 개발자, AI 도구 활용으로 업무 능력 향상하기 — AI 도구가 이력서와 코드와 문서를 대신 만들어줄수록, 채용에서 평가받는 대상은 결과물이 아니라 그 결과물을 설명하고 검증하는 능력으로 옮겨간다. → `books/tech-interview-note-for-developers/ch09-ai-era-developer.md`
- 용어집 → `books/tech-interview-note-for-developers/glossary.md`
