#TypeScript

- ECMAScript의 업그레이드에 따른 새로운 기능들을 지속적으로 추가함

  > ECMAScript의 표준을 따라갈 수 있는 수단이 될 수 있음

- `webpack`과 `bundle`의 기능을 따로 사용할 필요가 없이 `TypeScript`에서 제공함

- `babel`기능이 필요 없이 `import`, `export` 기능을 제공함

- `javascript`를 `Class`기반 언어처럼 사용 가능

- `Java`와 `C#`을 배운 사람들에게는 쉽게 접근 가능

- 강타입 언어를 지정할 수 있기 때문에 사용


## 1. 정적 타입

`TypeScript`는 정적 타입을 지원하고 컴파일 단계에서 오류를 포착할 수 있음

> 개발자의 의도를 명확히 코드에 기술

- 코드의 가독성 향상
- 예측을 가능하게 하고 디버깅을 쉽게함

### JavaScript

```javascript
// 자바스크립트만 사용한다면 a,b에 개발자는 암묵적으로 이것을 a,b에 number type의 값을 넣으면 합을 출력하는 함수로 생각 할 수 있지만 변수나 반환값의 타입을 사전에 지정하지 않는 자바스크립트의 동적 타이핑에 의한 것
function sum(a, b) {
  return a + b;
}
```

### TypeScript

```typescript
// 아래와 같이 Type을 지정하므로 개발자의 의도가 Code에 들어감
function sum(a: number, b: number) {
  return a + b;
}

sum('x', 'y'); // error
```

## 2. 도구의 지원

대규모 프로젝트를 위한 필수적 요소인 IntelliSense, 코드 어시스트, 타입 체크, 리팩토링 등 IDE(통합개발환경)를 포함한 다양한 도구의 지원을 받을 수 있음

## 3. 강력한 객체지향 프로그래밍(OOP) 지원

`Interface`, `generic` 등과 같은 강력한 객체지향 프로그래밍으로 인해 복잡한 프로젝트의 코드 기반을 쉽게 구성 가능

## 4. ES6 / ES Next 지원

원래는 ES6 문법들을 브라우저에서 사용할라고 하면 Babel등의 트랜스파일러를 사용해야 했지만 `TypeScript`는 이를 제공

## 5. 개발환경

TypeScript 파일은 `.ts`의 확장자명을 사용하며 브라우저에서 동작하지 않으므로 TypeScript 컴파일러를 통해 JavaScript 파일로 변환이 필요

### 5.1 설치

#### global 설치

```bash
$ npm install -g typescript
```

#### 설치 확인

```bash
$ tsc -v
Version 2.7.2
```

#### 트랜스 파일링

1. 기본 파일 트랜스파일링

```bash
$ tsc (파일이름).ts
```

2.  버전으로 파일 트랜스파일링

```bash
$ tsc person.ts -t ES5
```

> 여기서의 `-t`는 `--target`과 같은 의미를 가지고 그 다음에는 JavaScript 버전을 넣으면 됨 

3. 여러개 파일 트랜스파일링

```bash
$ tsc *.ts
```

> 현재 폴더 안에 있는 `.ts` 파일을 모두 트랜스파일링

4. Watch 기능

```bash
$ tsc (파일이름).ts --watch
```

> 기존의 Watch 기능과 같이 해당 `.ts`파일이 바뀌면 알아서 트랜스파일링을 진행