# 배열 (Array)

1개의 변수안에 여러개의 값을 순차적으로 저장할 때 사용

## 배열의 생성

### 1. 배열 리터널 

- 0개 이상의 값을 쉼표를 구분하여 대괄호([])로 묶음


- 존재하지 않으면 `undefined`반환

```javascript
var emptyArr = [];

var arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
]; // 요소

console.log(emptyArr[1]); // undefined
console.log(arr[1]);      // 'one'
console.log(emptyArr.length); // 0
console.log(arr.length);  // 10
console.log(typeof arr);  // object
```

> 배열의 리터널은 객체 리터널과는 다르게 Property명이 없고 각 요소의 값만 존재함

### 2. Array() 생성자 함수

배열은 리터널 방식으로 생성되며 이 방식도 결국 Array()함수의 배열 생성하는 것을 단순화 시킨 것임

> Array.prototype.constructor 프로퍼티로 접근 가능

```javascript
new Array(arrayLength)

var arr = new Array(2);
// 값을 넣지 않았으므로 'undefined'가 들어가 있음
```



## 배열 요소의 추가와 삭제

### 1. 배열 요소의 추가

배열도 객체이므로 동적으로 요소를 추가할 수 있음

### 2. 배열 요소의 삭제

배열도 객체이므로 배열의 요소를 `delete` 연산자를 통해 삭제 가능함

```javascript
var arr = [];
arr[0] = 'zero';
arr[1] = 'one';
arr[3] = 'three';

console.log(arr); // ["zero", "one", empty , "three"]

delete arr[0];
console.log(arr); // [empty , "one", empty , "three"]
```

## Array Property

### 1. Array.length

배열의 길이를 나타내줌

```javascript
var arr = [1,2,3,4,5];
console.log(arr.length);

// 배열에 요소를 추가할 때도 사용 가능

arr[arr.length] = 6;
console.log(arr);
```

## Array Method

### 1. Array.isArray()

객체가 배열이면 true, 배열이 아니면 false를 반환

```javascript
Array.isArray(); // false
Array.isArray([]); // true
Array.isArray([1, 2]); // true
Array.isArray(new Array()); // true
Array.isArray({}); // false
Array.isArray(null); // false
```

### 2. Array.prototype.indexOf()

지정된 요소를 배열에서 검색하여 반환

```javascript
var arr = [1, 2, 3, 4];
arr.indexOf(2); // 3
arr.indexOf(4); // -1
```

### 3. Array.prototype.concat(item…)

인수로 넘어온 값들을 자신의 복사본에 요소로 추가하고 반환

> 원본 배열은 변경 X

```javascript
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b);
console.log(c); // ['a', 'b', 'c', 'x', 'y', 'z']

var d = a.concat('String');
console.log(d); // ['a', 'b', 'c', 'String']

var e = a.concat(b, true);
console.log(e); // ['a', 'b', 'c', 'x', 'y', 'z', true]

// 원본 배열은 변하지 않는다.
console.log(a); // [ 'a', 'b', 'c' ]
```

### 4. Array.prototype.join()

배열 요소 전체를 연결하여 생성한 문자열을 반환

> separator를 지정하지 않았을 때 ','를 가짐

```javascript
str = arr.join([separator = ','])

var arr = ['a', 'b', 'c', 'd'];

var x = arr.join();
console.log(x);  // 'a,b,c,d';

var y = arr.join('');
console.log(y);  // 'abcd'

var z = arr.join(':');
console.log(z);  // 'a:b:c:d'
```

### 참고 : http://poiemaweb.com