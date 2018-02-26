# let, const와 블록 레벨 스코프

- Javascript ES5까지는 변수 선언은 유일하게 `var`를 이용하여 선언하는 방식밖에 없는데 `var`를 사용하면 Function-level scope, var 키워드 생략 허용, 중복 선언 허용, 변수 호이스팅 등 여러가지 문제점이 있었음 
- Javascript ES6로 넘어오면서 변수 선언은 `var`, `let`, `const` 총 3개로 늘어났고 위의 `var`의 문제점들을 다 보안할 수 있음

## 1. let

### 1.1 Block-level scope

ES5에서는 Function-level scope를 가지만 ES6부터는 `let`을 사용하여 Block-level scope를 제공함

```javascript
let foo = 123;
{ 
  // 여기서의 foo와 bar는 지역 변수
  let foo = 456;
  let bar = 456;
}
console.log(foo); // 123
console.log(bar); // ReferenceError: bar is not defined
```

### 1.2 중복 선언 금지

- `var`는 중복 선언이 가능하지만 `let`은 중복 선언이 불가능

```javascript
var foo = 123;
var foo = 456;  // OK

let bar = 123;
let bar = 456;  // Uncaught SyntaxError: Identifier 'bar' has already been declared -> 바로 SyntaxError가 발생함
```

### 1.3 호이스팅(Hoisting)

- 호이스팅은 모든 선언(var, let, const, function, function*, class)문에 발생함
- `let` 로 선언된 변수는 일반적인 `var` 변수 호이스팅과 다르게 선언단계와 초기화 단계 사이에 일시적 사각지대(TDZ)가 생성됨

결론 :  **`let`은 호이스팅이 안되는 것 처럼 움직임**

![let lifecycle](http://poiemaweb.com/img/let-lifecycle.png)


### 1.4 클로저

`let`에서는  Block-level scope를 제공함으로 지역변수가 존재하며 아래의 코드에서 `let i`는 자유변수가 됨

```javascript
var funcs = [];

// 함수의 배열을 생성한다
// i는 for loop에서만 유효한 지역변수이면서 자유변수이다
// i는 자유변수로서 for loop의 생명주기가 종료하여도 변수 i를 참조하는 함수가 존재하는 한 계속 유지
for (let i = 0; i < 3; i++) {
  funcs.push(function () { console.log(i); });
}

// 배열에서 함수를 꺼내어 호출한다
for (var j = 0; j < 3; j++) {
  funcs[j]();
}

```

### 1.5 전역 객체와 let

`var` 키워드로 선언된 변수를 전역 변수로 사용하면 전역 객체(Global Object)의 프로퍼티가 되어 `window`를 가리키게 되는데 `let`키워드를 사용하면 전역 변수는 `window`를 가리키지 않고 보이지 않는 개념적인 블럭 내에 존재

```javascript
var foo = 123; // 전역변수

console.log(window.foo); // 123

let boo = 123; // 전역변수

console.log(window.boo); // undefined
```

## 2. const

- `const`는 상수(변하지 않는 값)를 위해 사용하는데 반드시 상수만을 위해 사용하지 않음
- `let`과 대부분 동일한 특징을 가짐

### 2.1 재할당이 불가능 함

- `const`는 초기화 이 후 다른값으로 재할당이 불가
- 선언과 동시에 초기화를 같이 진행해야함

```javascript
const FOO = 123;
FOO = 456; // TypeError: Assignment to constant variable.
```

### 2.2 상수

- 가독성의 향상과 유지보수의 편의를 위해 적극적으로 사용 
- 항상 대문자를 사용

```javascript
// x의 의미를 알기 어렵기 때문에 가독성이 좋지 않다.
if (x > 10) {
}

// 변수의 의미를 명확히 기술하여 가독성이 향상되었다.
const MAXROWS = 10;
if (x > MAXROWS) {
}
```

### 2.3 const와 객체

- `const` 변수의 값이 객체인 경우, 객체에 대한 참조의 변경을 금지
- 객체의 프로퍼티는 보호되지 않으므로 프로퍼티 내용은 변경 가능

```javascript
const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};

// 객체의 프로퍼티 내용은 변경 가능
user.name = 'Park';
console.log(user); // { name: 'Park', address: { city: 'Seoul' } }
```

### 결론

**객체 타입 변수 선언에는 `const`를 사용하는 것이 좋음**

- 객체에 대한 참조는 거의 변경될 필요가 없으므로 `const`를 사용하다가 만약 변수에 재할당을 해야한다면 `let`을 사용 

## 3. `var`, `let`, `const` 언제 사용?

- ES6부터는 `var` 키워드를 사용하지 않음
- 변경이 발생하지 않는 이상 primitive형 변수와 객체형 변수에는 `const`를 사용
- 재할당이 필요하다면 `const` -> `let`

