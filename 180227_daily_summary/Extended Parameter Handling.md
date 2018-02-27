# Extended Parameter Handling

## 1. 기본 파라미터 초기값

ES5에서는 파라미터의 초기값을 설정할 수 없고 함수 내부에서 확인해서 처리해야만 했음

```javascript
// ES5
function plus(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}

console.log(plus());     // 0
console.log(plus(1, 2)); // 3
```

하지만 ES6에서는 파라미터에 초기값을 성정하여 만약 인수가 전달되지 않으면 초기값 설정

```javascript
// ES6
function plus(x = 0, y = 0) {
  // x, y에 인수가 할당되지 않으면 초기값 0이 할당된다.
  return x + y;
}

console.log(plus());     // 0
console.log(plus(1, 2)); // 3
```

## 2. Rest 파라미터

### 2.1 Syntax

- 항상 반드시 마지막 파라미터여야함
- `Rest`파라미터는 나머지를 뜻하며 다른 매개변수가 있을 시 그 값을 제외한 나머지를 반환

`Spread` 연산자(`...`)를 사용하여 파라미터를 작성한 형태

> 함수 내부에서 배열로 전달 받음

중요 ! Rest 파라미터와 `Spread`는 서로 반대

```javascript
function foo(...rest) {
  console.log(Array.isArray(rest)); // true
  console.log(rest); // [ 1, 2, 3, 4, 5 ]
}

foo(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest);   // [ 3, 4, 5 ]
}

bar(1, 2, 3, 4, 5);
```

## 2.2 argements와 rest 파라미터

## 3. Spread 연산자

Spread 연산자(`...`)는 연산자의 대상 배열 또는 이터러블을 개별 요소로 분리

> **이터러블 : 객체인데 순회 가능한 객체**  

```javascript
// ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(-> 1, 2, 3)
console.log(...[1, 2, 3]) // -> 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Helllo');  // H e l l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']]));  // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 1 2 3
```

### 3.1 함수의 인자로 사용하는 경우

```javascript
function foo(x, y, z) {
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // 3
}

//배열을 전달할 때
const arr = [1, 2, 3];

// ES5
foo.apply(null, arr); // apply 함수를 먼저 실행하고 사용하여 값을 전달하고 함수를 호출함

// ES6
foo(...arr); // spread 연산자를 사용하여 값은 전달
```

### 3.2 배열에서 사용하는 경우

간결하고 가독성이 향상된 표현이 가능

- `concat`, `push`, `splice`, `copy`를 사용할 수 있는데 `push`와 `splice`는 원본 배열을 건드리므로 `concat`만 사용하는 것을 추천

  > 원본배열은 최대한 안 건드리는 것이 좋음

```javascript
// ES5
var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
```



### 3.3 객체에서 사용하는 경우

Spread 연산자를 사용하면 객체를 결합 할 수 있음

```javascript
const o1 = { x: 1, y: 2 };
const o2 = { ...o1, z: 3 };

console.log(o2); // { x: 1, y: 2, z: 3 }

const target = { x: 1, y: 2 };
const source = { z: 3 };

// Object.assign를 사용하여도 동일한 작업을 할 수 있다.
// Object.assign은 타깃 객체를 반환한다
console.log(Object.assign(target, source)); // { x: 1, y: 2, z: 3 }
```