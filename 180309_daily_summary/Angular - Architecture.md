# Angular - Architecture

## 1. Angular 애플리케이션 파일 구조

웹 애플리케이션에 필요한 기본적인 기능의 구현체를 정형화된 구조로 제공

```code
my-app/
├── .angular-cli.json
├── .editorconfig
├── .git/
├── .gitignore
├── e2e/
│   ├── app.e2e-spec.ts
│   ├── app.po.ts
│   └── tsconfig.e2e.json
├── karma.conf.js
├── node_modules/
├── package.json
├── protractor.conf.js
├── README.md
├── src/
│   ├── app/
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json
```

### 1.1 src 폴더

Angular의 모든 구성요소, 공통 CSS, 이미지, 설정 파일 등 애플리케이션 필수 파일을 담음

`src/app` 폴더에는 Angular 구성요소가 위치해 있으며 보통은 컴포넌트와 모듈만 존재함

> 구성요소가 추가되어도 저장되며 개발자가 작성하는 대부분의 파일은 `src/app`에 저장

- app/app.component.{ts, html, css, spec.ts}

    루트 컴포넌트를 구성하는 컴포넌트 클래스, HTML 템플릿, CSS, 유닛 테스트 파일.

- app/app.module.ts

    Angular 구성요소를 등록하는 루트 모듈.

- assets/*

    이미지 등과 같은 정적 파일을 위한 폴더이며 프로젝트 생성 초기에는 빈 폴더

- environments/*

    프로젝트 빌드 시에 사용될 프로덕션 또는 개발 환경 설정 파일

- favicon.ico

    파비콘

- index.html

    웹 애플리케이션에 방문시 처음으로 로딩되는 디폴트 페이지. 루트 컴포넌트(/src/app/app.component.*)의 셀렉터인 <app-root>에 의해 루트 컴포넌트의 뷰가 로드되어 브라우저에 표시된다. 빌드 시에는 번들링된 JavaScript 파일이 자동 추가된 /dist/index.html이 생성된다.

![index.html](http://poiemaweb.com/img/index.html.png)

> 빌드 시에 index.html에 자동 추가되는 JavaScript 파일

- main.ts

    프로젝트의 메인 진입점. platformBrowserDynamic()에 의해 JIT 컴파일러가 실행되고 루트 모듈(AppModule)을 부트스트랩

- polyfills.ts

    변화 감지(Change Detection)를 위한 zone.js와 ES6/ES7와 크로스 브라우저 웹 표준 지원을 위한 폴리필들을 임포트하는 역할을 함

- styles.css

    애플리케이션 전역에 적용되는 글로벌 CSS

- test.ts

    유닛 테스트를 위한 메인 진입점

- tsconfig.{app|spec}.json

    TypeScript 컴파일 옵션 설정 파일

- typings.d.ts

    TypeScript를 위한 타입 선언 파일

### 1.2 그외의 파일

- e2e/

    e2e(end-to-end) 테스트 관련 파일

- node_modules/

    의존 모듈 저장소. 패키지 매니저에 의해 package.json에 등록된 의존 모듈이 설치되는 장소

- .angular-cli.json

    Angular CLI를 위한 설정 파일

- .editorconfig

    코드 에디터 기본 설정 파일

- .gitignore

    Git 소스 관리 제외 대상을 위한 설정 파일

- karma.conf.js

    Karma test runner를 위한 유닛 테스트 설정 파일. ng test 명령어 실행시 참조

- package.json

    의존 모듈 관리를 위해 패키지 매니저가 사용하는 모듈 관리 파일

- protractor.conf.js

    e2e 테스트를 위해 Protractor가 사용하는 설정 파일. ng e2e 명령어 실행시 참조

- README.md

    프로젝트의 개요를 기술한 README 파일. Angular CLI가 기본적인 내용을 자동 생성

- tsconfig.json

    TypeScript 컴파일 옵션 설정 파일

- tslint.json

    TSLint가 사용하는 linting(구문 체크) 설정 파일. ng lint 명령어 실행시 참조

## 2. Angular 애플리케이션의 처리 흐름

Angular 프로젝트 파일들은 고유의 처리 흐름을 가지며 아래와 같이 로드되고 실행됨

![angular-process](http://poiemaweb.com/img/angular-process.png)

### 2.1 index.html

- 웹 브라우저에 의해 가장 먼저 로딩되는 파일 

- `ng build` 명령어로 프로젝트 빌드를 실행하였을 때 /my-app/src/index.html에 번들링된 JavaScript 파일이 추가되어 자동으로 생성되는 파일

- bundle의 결과물로 JavaScript 파일들이 로드되어 실행되며 Angular 애플리케이션이 동작

  - inline.bundle.js

  > Webpack 유틸리티가 포함된 Webpack loader

  - polifills.bundle.js

  > polyfill 의존성 모듈(core-js, zone.js)을 번들링한 파일

  - styles.bundle.js

  > 스타일 정의를 번들링한 파일

  - vendor.bundle.js

  > Angular 의존성 모듈(@angular/*, RxJS 등)을 번들링한 파일

  - main.bundle.js

  > 개발자가 작성한 컴포넌트, 디렉티브, 서비스 등 소스코드를 번들링한 파일

### 2.2 main.ts

프로젝트의 메인 진입점이며 platformBrowserDynamic()에 의해 JIT 컴파일러가 실행

> 루트 모듈(/src/app/app.module.ts)을 부트스트랩

```typescript
// src/main.ts
...
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
```

main.ts는 .angular-cli.json의 main 프로퍼티의 설정에 의해 로드

```json
...
  "apps": [
    {
      ...
      "index": "index.html",
      "main": "main.ts",
...
```

### 2.3 app.module.ts

@NgModule 데코레이터의 인자로 전달되는 메타데이터에 애플리케이션 전체의 설정 정보를 기술한 루트 모듈

> 루트 컴포넌트(/src/app/app.component.ts)를 부트스트랩

### 2.4 app.component.ts

모든 컴포넌트의 부모 역할을 담당하는 루트 컴포넌트

```html
// html안에 아래와 같은 루트 컴포넌트의 뷰가 로드되어 표시
<app-root></app-root>
```

## 3. Angular의 구성 요소

### 3.1 포넌트 (Component)

- 화면을 구성하는 **뷰(View)**를 생성하고 관리하는 것이 주된 역할
- 화면은 1개 이상의 컴포넌트를 조립하여 구성
- 템플릿과 메타데이터, 컴포넌트 클래스로 구성되며 데이터 바인딩에 의해 연결

###3.2 디렉티브 (Directive)

- 애플리케이션 전역에서 사용할 수 있는 공통 관심사를 컴포넌트에서 분리하여 구현한 것으로 컴포넌트의 복잡도를 낮추고 가독성을 향상
- 컴포넌트도 뷰를 생성하고 이벤트를 처리하는 등 DOM을 관리하기 때문에 큰 의미에서 디렉티브로 볼 수 있음
- 구조 디렉티브(Structural directive)와 어트리뷰트 디렉티브(Attribute directive), 커스텀 디렉티브(Cunstom directive)로 구분 가능

### 3.3 서비스 (Service)

- 다양한 목적의 애플리케이션 공통 로직을 담당
- 컴포넌트에서 애플리케이션 전역 관심사를 분리하기 위해 사용하며 의존성 주입(Dependency Injection)이 가능한 클래스로 작성

### 3.4 라우터(Router)

- 컴포넌트를 교체하는 방법으로 뷰를 전환하여 화면 간 이동을 구현

### 3.5 모듈 (NgModule)

- 기능적으로 관련된 구성요소(컴포넌트, 디렉티브, 파이프, 서비스)를 하나의 단위로 묶는 메커니즘
- 모듈은 관련이 있는 기능들이 응집된 기능 블록으로 애플리케이션을 구성하는 하나의 단위를 만듬
- 모듈은 다른 모듈과 결합할 수 있으며 Angular는 여러 모듈들을 조합하여 애플리케이션을 구성
- 컴포넌트, 디렉티브, 파이프, 서비스 등의 Angular의 구성요소는 모듈에 등록되어야 사용 가능

### 결론
- `Angular`는 컴포넌트를 중심으로 Angular 구성요소를 조합하여 애플리케이션을 구축
- 뷰를 담당하는 컴포넌트를 중심으로 화면을 구성하고 디렉티브와 서비스를 사용하여 애플리케이션 전역 관심사를 분리하고 컴포넌트는 필요 시 디렉티브와 서비스를 사용
- 라우터(Router)는 컴포넌트를 교체하는 방식으로 뷰를 전환하여 화면 간 이동을 구현
- 모듈은 관련된 구성 요소를 하나로 묶어 애플리케이션을 구성하는 하나의 단위를 만드는 역할