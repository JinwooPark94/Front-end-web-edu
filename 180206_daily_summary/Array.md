# 배열 (Array)

1개의 변수안에 여러개의 값을 순차적으로 저장할 때 사용



## 배열의 생성

### 1.배열 리터널 

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

배열의 메소드들을 사용하기 위해서 



## 배열 요소의 추가와 삭제

### 1. 배열 요소의 추가



### 2. 배열 요소의 삭제



## Array Method

### 1. Array.isArray()

객체가 배열이면 true, 배열이 아니면 false를 반환

### 2. Array.prototype.indexOf()

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

