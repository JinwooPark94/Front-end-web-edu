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
