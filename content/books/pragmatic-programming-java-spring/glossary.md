---
book: pragmatic-programming-java-spring
---

가나다순. 정의는 그 용어가 처음 나온 장의 것을 쓰고, 뒤에 그 장으로의 링크를 붙인다.

간접 참조
: 직접 참조를 끊고 식별자나 중간 매개체를 통해 접근하게 만드는 방법.
  — [5장 순환 참조](/books/pragmatic-programming-java-spring/circular-reference/)

개방 폐쇄 원칙 (OCP)
: 확장에는 열려 있고 변경에는 닫혀 있게 만드는 원칙.
  — [4장 SOLID](/books/pragmatic-programming-java-spring/solid/)

계층 기반 구조
: 프레젠테이션·서비스·리포지터리처럼 계층으로 패키지를 나누는 방식.
  — [9장 모듈](/books/pragmatic-programming-java-spring/module/)

단위 테스트
: 작은 단위를 격리해 검증하는 테스트. 테스트 피라미드의 바닥이다.
  — [13장 테스트 피라미드](/books/pragmatic-programming-java-spring/test-pyramid/)

단일 책임 원칙 (SRP)
: 하나의 모듈이 하나의 책임만 갖게 하는 원칙.
  — [4장 SOLID](/books/pragmatic-programming-java-spring/solid/)

더미 (dummy)
: 전달되기만 하고 실제로 쓰이지 않는 테스트 대역.
  — [14장 테스트 대역](/books/pragmatic-programming-java-spring/test-double/)

덕 타이핑 (duck typing)
: 객체의 타입을 선언이 아니라 그 객체가 할 수 있는 행동으로 판단하는 관점.
  — [3장 행동](/books/pragmatic-programming-java-spring/behavior/)

도메인 (domain)
: 애플리케이션이 해결하고자 하는 문제 영역.
  — [10장 도메인](/books/pragmatic-programming-java-spring/domain/)

도메인 기반 구조
: 주문·결제·배송처럼 도메인으로 패키지를 나누는 방식.
  — [9장 모듈](/books/pragmatic-programming-java-spring/module/)

도메인 서비스
: 도메인 객체 하나에 담기 어려운 도메인 로직을 담는 자리.
  — [7장 서비스](/books/pragmatic-programming-java-spring/service/)

도메인 엔티티
: 도메인 모델에서 식별자를 갖고 생애주기를 가지는 객체. JPA 엔티티와 같은 것이 아니다.
  — [2장 객체의 종류](/books/pragmatic-programming-java-spring/kinds-of-objects/)

독립성
: 모듈이 다른 모듈에 기대지 않고 존재할 수 있는 성질.
  — [9장 모듈](/books/pragmatic-programming-java-spring/module/)

동등성
: 식별자가 아니라 값이 같으면 같은 객체로 취급하는 성질. VO의 조건 하나.
  — [2장 객체의 종류](/books/pragmatic-programming-java-spring/kinds-of-objects/)

레이어드 아키텍처
: 애플리케이션을 프레젠테이션·비즈니스·인프라스트럭처 같은 레이어로 나누고 역할을 주는 구조.
  — [8장 레이어드 아키텍처](/books/pragmatic-programming-java-spring/layered-architecture/)

리스코프 치환 원칙 (LSP)
: 하위 타입은 상위 타입을 대체할 수 있어야 한다는 원칙.
  — [4장 SOLID](/books/pragmatic-programming-java-spring/solid/)

모듈 (module)
: 독립성과 은닉성을 갖춘 코드 묶음. 언어의 특정 기능과 같은 것이 아니다.
  — [9장 모듈](/books/pragmatic-programming-java-spring/module/)

목 (mock)
: 호출을 기대하고 그 호출 여부를 검증하는 대역. 행위 기반 검증에 쓰인다.
  — [14장 테스트 대역](/books/pragmatic-programming-java-spring/test-double/)

불변성
: 생성 후 상태가 바뀌지 않는 성질. VO의 조건 하나.
  — [2장 객체의 종류](/books/pragmatic-programming-java-spring/kinds-of-objects/)

빈약한 도메인 모델
: 데이터만 갖고 행동이 없는 도메인 객체로 구성된 모델.
  — [8장 레이어드 아키텍처](/books/pragmatic-programming-java-spring/layered-architecture/)

상태 기반 검증
: 실행 후의 상태가 기댓값과 같은지 확인하는 방식.
  — [14장 테스트 대역](/books/pragmatic-programming-java-spring/test-double/)

순차지향
: 절차지향 이전의 패러다임. 코드가 순서대로 실행되는 것만으로 설명되지 않는다.
  — [1장 절차지향과 비교하기](/books/pragmatic-programming-java-spring/procedural-vs-oop/)

순환 참조
: 두 개 이상의 객체가 서로를 참조해 의존 관계에 사이클이 생긴 상태.
  — [5장 순환 참조](/books/pragmatic-programming-java-spring/circular-reference/)

숨겨진 입력
: 파라미터로 드러나지 않은 채 결과에 영향을 주는 값. 현재 시각, 랜덤, 전역 상태 등.
  — [15장 테스트 가능성](/books/pragmatic-programming-java-spring/testability/)

숨겨진 출력
: 반환값으로 드러나지 않는 부수 효과.
  — [15장 테스트 가능성](/books/pragmatic-programming-java-spring/testability/)

스마트 UI
: UI 계층에 비즈니스 로직이 모이는 안티패턴. 『도메인 주도 설계』에서 소개됐다.
  — [6장 안티패턴](/books/pragmatic-programming-java-spring/antipatterns/)

스텁 (stub)
: 미리 정해진 값을 돌려주는 테스트 대역.
  — [14장 테스트 대역](/books/pragmatic-programming-java-spring/test-double/)

스파이 (spy)
: 호출 기록을 남겨 나중에 확인할 수 있게 하는 대역.
  — [14장 테스트 대역](/books/pragmatic-programming-java-spring/test-double/)

양방향 레이어드 아키텍처
: 레이어 간 참조가 양방향으로 흐르는 상태. 레이어 구분의 의미가 사라진다.
  — [6장 안티패턴](/books/pragmatic-programming-java-spring/antipatterns/)

양방향 매핑
: 두 엔티티가 서로를 참조하도록 매핑하는 것. 순환 참조의 대표 사례다.
  — [5장 순환 참조](/books/pragmatic-programming-java-spring/circular-reference/)

영속성 객체
: 저장소에 저장되고 불러와지는 형태의 객체. 도메인 모델과 같을 필요는 없다.
  — [10장 도메인](/books/pragmatic-programming-java-spring/domain/)

은닉성
: 모듈 내부를 감추고 필요한 것만 드러내는 성질.
  — [9장 모듈](/books/pragmatic-programming-java-spring/module/)

의존성 역전 원칙 (DIP)
: 고수준 모듈이 저수준 모듈에 의존하지 않도록 의존 방향을 뒤집는 원칙.
  — [4장 SOLID](/books/pragmatic-programming-java-spring/solid/)

의존성 주입 (DI)
: 필요한 의존 객체를 외부에서 받아오는 기법. 의존성 역전과 같은 것이 아니다.
  — [4장 SOLID](/books/pragmatic-programming-java-spring/solid/)

인수 테스트
: 시스템이 비즈니스 요구사항을 만족해 소유권을 넘기기 전에 수행하는 검증 단계.
  — [12장 자동 테스트](/books/pragmatic-programming-java-spring/automated-testing/)

인터페이스 분리 원칙 (ISP)
: 쓰지 않는 메서드에 의존하지 않도록 인터페이스를 나누는 원칙.
  — [4장 SOLID](/books/pragmatic-programming-java-spring/solid/)

자가 검증
: 객체가 스스로 유효성을 보장하는 성질. 잘못된 상태의 객체가 만들어지지 않게 한다.
  — [2장 객체의 종류](/books/pragmatic-programming-java-spring/kinds-of-objects/)

자가 호출 (self invocation)
: 같은 객체 안에서 자기 메서드를 직접 호출하는 것. 프록시를 우회해 AOP 기능이 적용되지 않는다.
  — [11장 알아두면 유용한 스프링 활용법](/books/pragmatic-programming-java-spring/spring-tips/)

절차지향
: 데이터와 프로시저를 분리하고 프로시저의 호출 순서로 프로그램을 구성하는 패러다임.
  — [1장 절차지향과 비교하기](/books/pragmatic-programming-java-spring/procedural-vs-oop/)

타입 기반 주입
: 스프링 컨테이너가 이름이 아니라 타입으로 빈을 찾아 주입하는 방식.
  — [11장 알아두면 유용한 스프링 활용법](/books/pragmatic-programming-java-spring/spring-tips/)

테스트 가능성
: 코드를 테스트하기 쉬운 정도. 설계 품질의 지표로 쓸 수 있다.
  — [15장 테스트 가능성](/books/pragmatic-programming-java-spring/testability/)

테스트 대역 (test double)
: 테스트를 위해 진짜 대신 세우는 가짜 객체나 컴포넌트. 대역폭이 아니라 스턴트맨의 대역이다.
  — [14장 테스트 대역](/books/pragmatic-programming-java-spring/test-double/)

통합 테스트
: 여러 구성 요소를 함께 놓고 검증하는 테스트.
  — [13장 테스트 피라미드](/books/pragmatic-programming-java-spring/test-pyramid/)

트랜잭션 스크립트
: 서비스가 절차적으로 모든 로직을 수행하고 도메인은 데이터 컨테이너로 남는 형태.
  — [6장 안티패턴](/books/pragmatic-programming-java-spring/antipatterns/)

페이크 (fake)
: 동작하는 단순 구현을 가진 대역. 인메모리 저장소가 예다.
  — [14장 테스트 대역](/books/pragmatic-programming-java-spring/test-double/)

행위 기반 검증
: 어떤 호출이 일어났는지로 확인하는 방식.
  — [14장 테스트 대역](/books/pragmatic-programming-java-spring/test-double/)

회귀 버그
: 변경으로 인해 이전에 동작했던 기능이 깨지는 버그.
  — [12장 자동 테스트](/books/pragmatic-programming-java-spring/automated-testing/)

BDD (행위 주도 개발)
: TDD에서 파생한 방법론. 비즈니스 요구사항과 소프트웨어의 행동을 중심에 둔다.
  — [17장 테스트와 개발 방법론](/books/pragmatic-programming-java-spring/test-methodology/)

CORRECT
: 테스트 환경에서 데이터의 경계 조건에 어떤 것이 있는지 알려주는 원칙.
  — [16장 테스트와 설계](/books/pragmatic-programming-java-spring/test-and-design/)

DAO (Data Access Object)
: 데이터 접근 객체. 데이터 저장소 접근을 담당한다.
  — [2장 객체의 종류](/books/pragmatic-programming-java-spring/kinds-of-objects/)

DTO (Data Transfer Object)
: 데이터 전송 객체. 계층이나 경계를 넘길 목적으로 데이터를 담는다.
  — [2장 객체의 종류](/books/pragmatic-programming-java-spring/kinds-of-objects/)

E2E 테스트
: 사용자 관점에서 전체 흐름을 검증하는 테스트. 실제 환경에 가장 가깝고 가장 비싸다.
  — [13장 테스트 피라미드](/books/pragmatic-programming-java-spring/test-pyramid/)

Right-BICEP
: 무엇을 테스트해야 하는지 알려주는 원칙. 결과가 올바른지에서 시작한다.
  — [16장 테스트와 설계](/books/pragmatic-programming-java-spring/test-and-design/)

TDA 원칙 (Tell, Don't Ask)
: 객체에게 데이터를 묻지 말고 일을 시키라는 원칙. 수동적 객체를 능동적으로 만든다.
  — [1장 절차지향과 비교하기](/books/pragmatic-programming-java-spring/procedural-vs-oop/)

TDD (테스트 주도 개발)
: 테스트 케이스를 먼저 작성하고 그 테스트를 통과하는 코드를 쓰는 개발 방법론.
  — [17장 테스트와 개발 방법론](/books/pragmatic-programming-java-spring/test-methodology/)

VO (Value Object)
: 값 객체. 불변성, 동등성, 자가 검증을 갖춘 객체다. 읽기 전용이라는 설명만으로는 부족하다.
  — [2장 객체의 종류](/books/pragmatic-programming-java-spring/kinds-of-objects/)
