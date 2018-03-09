# Angular

- `SPA(Single Page Application)`를 개발하기 위한 Framework

  > 한 페이지만 가지고 사이트를 사용함으로 SEO 관점에서 치명적임


- 모바일 : `Ionic Framework` 데스크탑 : `electron`

  >Ionic : https://ionicframework.com
  >
  >Electron : https://github.com/maximegris/angular-electron


- `axis`와 비슷한 라이브러리를 내포하고 있음

- 자유도가 없음 (Framework의 특징)

- `AngularJS`는 1.0 버전이며 이전에는 배우기 어렵고 성능적 이슈가 있었는데  2.0이상은 이름만 바꾼 Angular를 새롭게 출시

  > 1.0버전과 2.0버전 이상은 서로 호환성이 없음

## 1. AngularJS와 Angular의 차이

`AngularJS`는 `Angular`의 이전 버전인 1.0 버전이며 초기에 배우기 어렵고 성능적 이슈가 많았는데 이를 보안하여 `Angular`를 새롭게 만들었음

> 1.0버전과 2.0버전 이상은 서로 호환성이 없음

- Controller와 $scope 기반 개발에서 컴포넌트 기반 개발(CBD, Component Based Development)로 전환
- 선택적 바인딩(one-way, two-way `Angular`는 더 이상 양방향 데이터 바인딩을 빌트인으로 제공하지 않음)을 지원하고 디렉티브(Directive)와 서비스, 의존성 주입(dependency injection)은 간소화
- 강력한 개발환경 지원 도구인 Angular CLI를 제공
- AngularJS의 angular.module과 jQlite보다 향상된 모듈 시스템과 DOM 제어 기능을 제공하며 API 또한 단순화
- AngularJS의 Controller와 $scope 기반 개발에서 컴포넌트 기반 개발(CBD, Component Based Development)로 전환



## 2. 장점

### 2.1 컴포넌트 기반 개발

개발 생산성을 향상시키며 대규모 어플리케이션에 적합한 구조

### 2.2 `TypeScript`를 주력 언어로 채택

- 다양한 도구의 지원을 받을 수 있음
- 정적 타이핑을 지원하므로 높은 수준의 IntelliSense, 코드 어시스트, 타입 체크, 리팩토링 등을 지원

### 2.3 개발 도구의 통합 및 개발 환경 구축 자동화

어떤 프레임워크를 사용할 때나 항상 환경세팅이 오래걸리는 경우가 많은데 Angular는 `Angular CLI`를 통해 간편한 개발 환경 구축을 지원

### 2.4 Digest Loop로 인한 성능저하 문제의 해결

Model의 변화를 View에 반영시키는 과정으로 인한 문제로 성능저하가 심했지만 Angular에서는 Digest Loop로 인한 성능저하가 개선되어 4.2배 정도로 빨라짐

### 2.5 AoT 컴파일

사전 컴파일 방식을 의미하며  `ngIf`, `ngFor`, `ngSwitch`와 같은 구조 디렉티브(Structural directive)를 브라우저가 실행 가능한 코드로 변환하여야 하는데 이러한 과정을 런타임에서 실시하지 않고 사전에 컴파일하여 실행 속도를 향상시키는 기법

> 기존 프레임워크 `AngularJS`보다 50% 줄일 수 있음

### 2.6 Lazy Loading

Angular는 SPA를 개발하기 위한 프레임워크로 SPA의 태생적 단점(어플리케이션 실행 시점에서 전체 모듈을 로딩해야함)이 있지만 필요한 시점에 필요한 모듈만 로딩하는 방식으로 로딩 속도를 향상 시켜 이를 해결 

### 2.7 코드 최적화

Angular에 업데이트에서 지속적으로 최적화가 수행되고 있음

> 현재 45KB 정도의 크기로 축소

## 3. 브라우저 지원 범위

| Browser   | Supported versions                       |
| --------- | ---------------------------------------- |
| Chrome    | latest                                   |
| Firefox   | latest                                   |
| Edge      | 2 most recent major versions             |
| IE        | 11, 10, 9                                |
| IE Mobile | 11                                       |
| Safari    | 2 most recent major versions             |
| iOS       | 2 most recent major versions             |
| Android   | Nougat (7.0)Marshmallow (6.0)Lollipop (5.0, 5.1)KitKat (4.4) |
