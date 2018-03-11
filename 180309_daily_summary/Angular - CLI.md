# Angular - CLI

- 간단한 명령어를 사용하여 Angular 프로젝트 스캐폴딩을 생성, 실행, 빌드 가능
- 개발용 서버를 내장하고 있으며 간단한 프로젝트를 실행하여 동작을 확인 가능

## 1. 지원하는 기능

- Angular 프로젝트 생성
- Angular 프로젝트에 컴포넌트, 디렉티브, 파이프, 서비스, 클래스, 인터페이스 등의 구성 요소 추가
- LiveReload를 지원하는 내장 개발 서버를 사용한 Angular 프로젝트 실행
- Unit/E2E(end-to-end) 테스트 환경 지원
- 배포를 위한 Angular 프로젝트 패키징


## 2. Angular CLI 설치

### 2.1 Version

- Node.js 6.9.0
- NPM 3.0.0 이상

```bash
$ npm install -g @angular/cli
```

> Angular CLI 1.0.0 이전 버전의 경우 패키지명이 `angular-cli`이었으나 Angular CLI 1.0.0부터 `@angular/cli`으로 변경

## 3. 프로젝트 생성

`ng new` 명령어를 사용하여 프로젝트를 생성

```bash
$ ng new <project-name>
```

프로젝트 생성시 아래와 같은 파일들을 모두 생성

```code
my-app/
├── .git/
├── e2e/
├── node_modules/
├── src/
├── .angular-cli.json
├── .editorconfig
├── .gitignore
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── README.md
├── tsconfig.json
└── tslint.json
```

## 4. 프로젝트 실행

`ng serve` 명령어를 사용하여 프로젝트 실행

```bash
$ ng serve
```

### 4.1 옵션

`--open` : 자동으로 브라우저 실행 (`-o`)

`--port` : 포트번호 변경 (`-p`)

## 5. 프로젝트 구성 요소 추가

`ng generate` 명령어를 사용하여 프로젝트 구성 요소를 추가

| 추가 대상 구성요소 | 명령어                                  | 축약형                   |
| ---------- | ------------------------------------ | --------------------- |
| 컴포넌트       | ng generate component component-name | ng g c component-name |
| 디렉티브       | ng generate directive directive-name | ng g d directive-name |
| 파이프        | ng generate pipe pipe-name           | ng g p pipe-name      |
| 서비스        | ng generate service service-name     | ng g s service-name   |
| 모듈         | ng generate module module-name       | ng g m module-name    |
| 가드         | ng generate guard guard-name         | ng g g guard-name     |
| 클래스        | ng generate class class-name         | ng g cl class-name    |
| 인터페이스      | ng generate interface interface-name | ng g i interface-name |
| Enum       | ng generate enum enum-name           | ng g e enum-name      |

## 6. 프로젝트 빌드

`ng build` 명령어를 사용하여 프로젝트 개발 완료 후 배포

```bash
$ ng build
Date: 2018-01-03T10:50:46.926Z
Hash: 6856ddacfa273eff797a
Time: 8785ms
chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 5.83 kB [entry] [rendered]
chunk {main} main.bundle.js, main.bundle.js.map (main) 10.4 kB [initial] [rendered]
chunk {polyfills} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 202 kB [initial] [rendered]
chunk {styles} styles.bundle.js, styles.bundle.js.map (styles) 11.4 kB [initial] [rendered]
chunk {vendor} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.34 MB [initial] [rendered]
```

> dist 폴더가 생성되며 결과물이 저장됨

### 6.1 트랜스파일링과 의존 모듈 번들링

모든 `TypeScript`는 `JavaScript`로 변환해야 하는데 Angular CLI의 내부적 모듈 번들러 `webpack`을 사용하여 아래와 같은 작업의 자동화를 지원

- TypeScript에서 JavaScript로의 트랜스파일링
- 디버깅 용도의 map 파일 생성
- 의존 모듈과 HTML, CSS, JavaScript 번들링
- AoT 컴파일
- 소스코드의 문법 체크
- 코드 규약 준수 여부 체크
- 불필요한 코드의 삭제 및 압축

### 6.2 프로덕션 빌드

`ng build` 명령어를 실행하면 Angular CLI는 `src/environments.ts` 파일을 참조하여 빌드를 수행

```typescript
// src/environments/environments.ts
export const environment = {
  production: false
};
```

개발환경 빌드로 프로덕션 용도로 최적화되어 있지 않으므로 아래와 같이 실행

```bash
$ ng build --target=production
# 위 명령어의 축약형은 아래와 같다
$ ng build -prod
Date: 2018-01-03T10:59:54.845Z
Hash: 80e4d7fafb7bfdbf28c6
Time: 21876ms
chunk {0} polyfills.61df7d7ec492d95bb0b2.bundle.js (polyfills) 61.3 kB [initial] [rendered]
chunk {1} main.2c2b6c0a6d95ad6f48ec.bundle.js (main) 152 kB [initial] [rendered]
chunk {2} styles.d41d8cd98f00b204e980.bundle.css (styles) 0 bytes [initial] [rendered]
chunk {3} inline.cd5410a32cdfcea4794b.bundle.js (inline) 1.45 kB [entry] [rendered]
```

개발환경 빌드에 기본 적용되는 옵션은 아래와 같음

| Flag            | -dev  | -prod |
| --------------- | ----- | ----- |
| –aot            | false | true  |
| –environment    | dev   | prod  |
| –output-hashing | media | all   |
| –sourcemaps     | true  | false |
| –extract-css    | false | true  |

### 6.3 AoT(Ahead-of Time) 컴파일

TypeScript에서 JavaScript로 트랜스파일링을 할때 자동으로 `AoT`파일로 자동 적용하여 템플릿 빌드 시 컴파일 되지 않고 런타임에 컴파일함

```bash
# AoT 컴파일
$ ng build -aot
# 프로덕션 빌드: AoT 컴파일이 자동 적용된다.
$ ng build -prod
```

## 7. 기본 옵션 변경

기본으로 적용되는 옵션을 변경하기 위해서 [schema.json](https://github.com/angular/angular-cli/blob/398356503ab4729cf40587804c44b55eb5c99768/packages/%40angular/cli/lib/config/schema.json)에 기술되어 있는 옵션을 참고하여 `.angular-cli.json`을 수정

- `component` 생성시 기본 설정

```json
  ...
  "component": {
    "description": "Options for generating a component.",
    "type": "object",
    "properties": {
      "flat": {
        "description": "Flag to indicate if a dir is created.",
        "type": "boolean",
        "default": false
      },
      "spec": {
        "description": "Specifies if a spec file is generated.",
        "type": "boolean",
        "default": true
      },
  ...
```

- `component` 생성시 스팩 파일 생성하지 않도록 하기 위해 아래의 명령어 또는 `.angular-cli.json`을 아래와 같이 수정

```bash
$ ng generate component <component-name> --spec false
```

```json
"defaults": {
  "styleExt": "css",
  "component": {
    "spec": false
  }
}
```

- 또는 `ng new` 명령어로 프로젝트를 생성할 때, 옵션을 추가하여 `.angular-cli.json`에 반영

```bash
$ ng new my-app --inline-template --inline-style --skip-tests
# 축약형
$ ng new my-app -it -is -st
```

```json
{
  ...
  "defaults": {
    "styleExt": "css",
    "class": {
      "spec": false
    },
    "component": {
      "inlineStyle": true,
      "inlineTemplate": true,
      "spec": false
    },
    "directive": {
      "spec": false
    },
    "guard": {
      "spec": false
    },
    "module": {
      "spec": false
    },
    "pipe": {
      "spec": false
    },
    "service": {
      "spec": false
    }
  }
}
```

