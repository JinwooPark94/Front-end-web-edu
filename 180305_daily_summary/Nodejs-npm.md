# Nodejs - npm

Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키기 설치 및 관리를 위한 CLI(Command line interface)를 제공

- 패키시 설치시 홈페이지 방문한 후 버전 및 다운로드 수를 보고 조심하여 사용

## 1. 패키지 설치

- Package 설치시 `npm install` 명령어 뒤에 설치할 Package 이름을 지정
- npm install 명령에는 지역 설치와 전역 설치가 존재

**1.1 지역(Local)에 설치시**

```bash
$ npm install <package>
```

**1.2 전역(global)에 설치시**

```bash
$ npm install -g <package>
```

> 프로젝트명과 Package의 이름이 같을시 에러!

## 2. package.json과 의존성 관리

만약 npm install 설치 도중 `package.json`을 찾을 수 없다는 경고가 발생하면 `npm init` 명령어를 통해 `package.json`을 설치

- `npm init` 명령어만 사용했을 시

```bash
npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (exam)
```

- `npm init` 명령어에 `-y` 옵션을 추가하여 사용했을 시

```bash
$ npm init -y
Wrote to /Users/leeungmo/Desktop/emoji/package.json:

{
  "name": "emoji",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "node-emoji": "^1.8.1"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

여기서 `dependencies`에는 

## 3. Semantic versioning (유의적 버전)

![sementic-versioning](http://poiemaweb.com/img/sementic-versioning.png)

### 3.1 MAJOR

호환되지 않는 API 변경 사항

> 해당 숫자가 바뀌면 이전 MAJOR 버전이랑 호환이 안될 수 있으므로 조심

### 3.2 MINOR

하위 버전과 호환되는 기능을 추가

### 3.3 PATCH

이전 버전과 호환되는 버그 수정을 할 때 사용

| 표기법      | Description          |
| -------- | -------------------- |
| version  | 명시된 version과 일치      |
| ~version | 명시된 version과 근사한 버전  |
| ^version | 명시된 version과 호환되는 버전 |

#### 3.3.1 `~ `와 `^`의 차이

`~`는 패치 버전 범위 내에서 업데이트함

- ~0.0.1 : 0.0.1 <= version < 0.1.0
- ~0.1.1 : 0.1.1 <= version < 0.2.0

`^`는 마이너 버전 범위 내에서 업데이트함

- ^1.0.2 : 1.0.2 <= version < 2.0