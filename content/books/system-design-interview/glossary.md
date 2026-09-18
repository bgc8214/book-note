---
book: system-design-interview
---

가나다순. 정의는 그 용어가 처음 나온 장의 것을 쓰고, 뒤에 그 장으로의 링크를 붙인다.

가용성 (availability)
: 시스템이 요청을 수락하고 원하는 응답을 반환할 수 있는 시간의 백분율.
  — [3장 비기능적 요구사항](/books/system-design-interview/non-functional-requirements/)

가중치 트라이 (weighted trie)
: 문자열을 문자 단위로 분기 저장하고 각 노드에 가중치를 붙인 자료구조. 조회가 빠르고 저장소를 적게 쓴다.
  — [11장 자동 완성 / 타입어헤드 설계](/books/system-design-interview/autocomplete/)

고정 윈도우 로그 (fixed window log)
: 고정 구간별로 요청을 세는 속도 제한 방식. 테스트와 디버깅이 쉽지만 부정확하다.
  — [8장 속도 제한 서비스 설계](/books/system-design-interview/rate-limiting/)

관찰 가능성 (observability)
: 서비스의 상태를 외부에서 알 수 있는 정도. 네 가지 중요 신호와 세 가지 도구로 정량화한다.
  — [2장 일반적인 시스템 설계 면접 흐름](/books/system-design-interview/interview-flow/)

기능적 분할 (functional partitioning)
: 특정 기능을 백엔드에서 떼어내 전용 클러스터에서 실행하는 확장 기법.
  — [1장 시스템 설계 개념 둘러보기](/books/system-design-interview/design-concepts/)

내결함성 (fault tolerance)
: 일부 구성 요소가 실패해도 시스템이 계속 작동하고 영구적 피해를 막는 능력.
  — [3장 비기능적 요구사항](/books/system-design-interview/non-functional-requirements/)

누수 버킷 (leaky bucket)
: 일정 속도로 요청을 흘려보내는 속도 제한 방식. 구현이 쉽지만 약간 부정확하다.
  — [8장 속도 제한 서비스 설계](/books/system-design-interview/rate-limiting/)

람다 아키텍처 (lambda architecture)
: 같은 데이터를 배치와 스트리밍 파이프라인으로 나란히 처리해 두 방식의 장점을 함께 얻는 구조.
  — [4장 데이터베이스 확장](/books/system-design-interview/database-scaling/)

런북 (runbook)
: 경보가 울렸을 때 따라야 할 대응 절차 문서. 유용하고 따르기 쉬워야 하며 계속 개선한다.
  — [2장 일반적인 시스템 설계 면접 흐름](/books/system-design-interview/interview-flow/)

메타데이터 서비스
: 여러 구성 요소가 함께 쓰는 데이터를 모아 두어 네트워크 트래픽을 줄이는 서비스.
  — [6장 기능적 분할을 위한 공통 서비스](/books/system-design-interview/common-services/)

베어 메탈 (bare metal)
: 가상화 계층 없이 물리 서버를 직접 사용하는 호스팅 방식.
  — [1장 시스템 설계 개념 둘러보기](/books/system-design-interview/design-concepts/)

변경 데이터 캡처 (CDC)
: 데이터 변경을 이벤트 스트림으로 흘려 여러 소비자가 각자 처리하게 하는 방식.
  — [5장 분산 트랜잭션](/books/system-design-interview/distributed-transactions/)

분산 트랜잭션 (distributed transaction)
: 별개의 쓰기 요청을 하나의 원자적 트랜잭션으로 결합하는 것.
  — [5장 분산 트랜잭션](/books/system-design-interview/distributed-transactions/)

비정규화 (denormalization)
: 읽기 지연과 쿼리 복잡도를 줄이기 위해 중복을 허용하는 것. 일관성·쓰기 속도·저장 공간을 대가로 낸다.
  — [4장 데이터베이스 확장](/books/system-design-interview/database-scaling/)

사가 패턴 (saga)
: 모두 성공하거나 모두 롤백되는 분산 트랜잭션 패턴.
  — [5장 분산 트랜잭션](/books/system-design-interview/distributed-transactions/)

사이드카 패턴 / 서비스 메시
: 각 호스트에 붙는 프록시가 공통 관심사를 처리하는 패턴. 이스티오가 대표 구현이다.
  — [6장 기능적 분할을 위한 공통 서비스](/books/system-design-interview/common-services/)

샤딩 (sharding)
: 데이터를 여러 호스트에 나눠 저장하는 것. 단일 호스트의 저장 용량을 넘을 때 필요해진다.
  — [4장 데이터베이스 확장](/books/system-design-interview/database-scaling/)

서버리스 (serverless)
: 호스트를 지속적으로 운영하지 않아 비용 이점이 있는 대신 기능이 제한되는 접근.
  — [1장 시스템 설계 개념 둘러보기](/books/system-design-interview/design-concepts/)

서비스 디스커버리 (service discovery)
: 클라이언트가 사용 가능한 서비스 호스트를 찾아내는 장치.
  — [6장 기능적 분할을 위한 공통 서비스](/books/system-design-interview/common-services/)

속도 제한 (rate limiting)
: 단위 시간당 허용 요청 수를 제한해 서비스 중단과 비용 초과를 막는 장치.
  — [8장 속도 제한 서비스 설계](/books/system-design-interview/rate-limiting/)

슬라이딩 윈도우 로그 (sliding window log)
: 지나간 시간 구간을 이동시키며 요청을 세는 방식. 정확하지만 메모리를 더 쓴다.
  — [8장 속도 제한 서비스 설계](/books/system-design-interview/rate-limiting/)

슬라이딩 윈도우 카운터
: 슬라이딩 윈도우 로그보다 메모리를 적게 쓰지만 정확도가 떨어지는 절충안.
  — [8장 속도 제한 서비스 설계](/books/system-design-interview/rate-limiting/)

이벤트 소싱 (event sourcing)
: 쓰기 이벤트를 로그에 저장해 그 로그를 상태의 핵심 소스로 삼는 방식. 감사 추적도 함께 얻는다.
  — [5장 분산 트랜잭션](/books/system-design-interview/distributed-transactions/)

이벤트 집계
: 개별 쓰기를 모아 한 번에 기록해 데이터베이스 쓰기 빈도를 줄이는 기법.
  — [4장 데이터베이스 확장](/books/system-design-interview/database-scaling/)

일관성 (consistency)
: 모든 노드가 특정 시점에 동일한 데이터를 담고, 변경이 생기면 동시에 변경된 데이터를 제공하기 시작하는 성질.
  — [3장 비기능적 요구사항](/books/system-design-interview/non-functional-requirements/)

지연 쓰기 캐시 (write-behind)
: 갱신된 데이터를 주기적으로 DB에 플러시하는 캐시. 장애 시 손실을 막으려면 높은 가용성이 필요하다.
  — [4장 데이터베이스 확장](/books/system-design-interview/database-scaling/)

카파 아키텍처 (kappa architecture)
: 람다 아키텍처에서 배치 파이프라인과 집계 서비스를 제외하고 스트리밍만 남긴 구조.
  — [17장 판매량 기준 아마존 상위 10개 제품 대시보드 설계](/books/system-design-interview/top-k-dashboard/)

캐시 어사이드 (cache aside)
: 애플리케이션이 캐시를 먼저 확인하고 없으면 DB를 읽는 전략. 읽기 위주 부하에 적합하지만 캐시 미스가 느리다.
  — [4장 데이터베이스 확장](/books/system-design-interview/database-scaling/)

캐시 워밍 (cache warming)
: 첫 사용자도 캐시 이점을 받도록 미리 캐시를 채워두는 것.
  — [4장 데이터베이스 확장](/books/system-design-interview/database-scaling/)

코드로서의 인프라 (IaC)
: 수동 프로세스 대신 코드로 인프라를 관리하고 프로비저닝하는 방식. 테라폼이 예다.
  — [1장 시스템 설계 개념 둘러보기](/books/system-design-interview/design-concepts/)

코레오그래피 / 오케스트레이션
: 사가를 조정하는 두 방식. 코레오그래피는 병렬, 오케스트레이션은 선형으로 진행한다.
  — [5장 분산 트랜잭션](/books/system-design-interview/distributed-transactions/)

클라우드 네이티브 (cloud native)
: 일반적인 비기능적 요구사항을 달성하기 위해 클라우드 기법을 사용하는 설계 접근.
  — [3장 비기능적 요구사항](/books/system-design-interview/non-functional-requirements/)

타입어헤드 (typeahead)
: 사용자가 입력하는 동안 키 입력마다 제안 목록을 반환하는 기능. 자동 완성의 다른 이름이다.
  — [11장 자동 완성 / 타입어헤드 설계](/books/system-design-interview/autocomplete/)

토큰 버킷 (token bucket)
: 일정 속도로 채워지는 토큰을 소비해 요청을 허용하는 방식. 쉽고 메모리 효율적이나 동기화가 까다롭다.
  — [8장 속도 제한 서비스 설계](/books/system-design-interview/rate-limiting/)

합의 (consensus)
: 모든 서비스가 쓰기 이벤트의 발생 여부에 동의하는 것.
  — [5장 분산 트랜잭션](/books/system-design-interview/distributed-transactions/)

확장성 (scalability)
: 부하를 비용 효율적으로 지원하기 위해 하드웨어 리소스 사용을 쉽게 조정할 수 있는 능력.
  — [3장 비기능적 요구사항](/books/system-design-interview/non-functional-requirements/)

API 게이트웨이
: 여러 서비스에 걸친 공통 기능(보안·오류 검사·성능·로깅)을 처리하는 상태 비저장 경량 웹 서비스.
  — [6장 기능적 분할을 위한 공통 서비스](/books/system-design-interview/common-services/)

p99 지연 시간
: 요청 중 99퍼센트가 그 안에 처리되는 응답 시간. 평균이 아니라 꼬리 지연을 본다.
  — [2장 일반적인 시스템 설계 면접 흐름](/books/system-design-interview/interview-flow/)
