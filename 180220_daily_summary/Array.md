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

- 인수로 넘어온 값들을 자신의 복사본에 요소로 추가하고 반환


- 리턴 값을 항상 받아야함
- 값은 배열과 값이 올 수 있음

> 원본 배열은 변경 되지 않음

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

> Javascript에서는 타입 혼용이 가능하지만 혼용을 안 하는 것이 좋음

### 5. Array.prototype.push(item ...)

- 인자로 전달된 항목을 하나의 값으로 배열의 마지막에 추가
- `Queue`와 `Stack`을 구현할 때 사용함
- 반환값은 push로 추가된 새로운 `length` 값을 반환하여 원본 배열이 수정

```javascript
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

// push는 원본 배열을 직접 변경하고 변경된 배열의 length를 반환한다.
var c = a.push(b);
console.log(a); // a --> ['a', 'b', 'c', ['x', 'y', 'z']]
console.log(c); // c --> 4;

// concat은 원본 배열을 직접 변경하지 않고 복사본을 반환한다.
console.log([1, 2].concat([3, 4])); // [ 1, 2, 3, 4 ]
```

### 6. Array.prototype.join([separator = ','])

- 배열 요소 전체를 연결하며 원본 배열을 변경함
- 기본구분자는 `,`
- Array.prototype.join 메소드는 `+` 연산자보다 빠름

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

### 7. Array.prototype.pop()

- 배열 요소의 마지막을 제거하고 제거한 배열을 반환 

> 원본 배열을 변경

```javascript
var a = ['a', 'b', 'c'];
var c = a.pop();

// 원본 배열이 변경된다.
console.log(a); // a --> ['a', 'b']
console.log(c); // c --> 'c'
```

### 8. Array.prototype.shift()

- 배열 요소의 첫 요소를 제거하고 제거한 배열을 반환

> 원본 배열을 변경

![array-method](http://poiemaweb.com/img/array-method.png)

### 9. Array.prototype.slice(start, end)

- 배열의 특정 부분에 대한 복사본 생성
- 매개변수 `start` 부터 `end`의 전까지 가져옴
- `end`를 설정하지 않으면 기본값으로 배열의 `length
- 유사배열을 배열로 바꿀 때 사용함

> 원본 배열을 변경 하지 않음

```javascript
var items = ['a', 'b', 'c'];

// items[0]부터 items[1] 이전(items[1] 미포함)까지 반환
var res1 = items.slice(0, 1);
console.log(res1);  // [ 'a' ]

// items[1]부터 items[2] 이전(items[2] 미포함)까지 반환
var res2 = items.slice(1, 2);
console.log(res2);  // [ 'b' ]

// items[1]부터 이후의 모든 요소 반환
var res3 = items.slice(1);
console.log(res3);  // [ 'b', 'c' ]
```

### 10. Array.prototype.splice(start, deleteCount, item…)

- 배열의 특정 부분을 제거하고 그 위치에 새로운 요소를 추가
- 매개변수 `start`부터 `deleteCount` 만큼 제거함
- 배열 중간에 새로운 요소를 추가할 때 사용
- 일반적인 사용은 배열에서 요소를 삭제
- 반환값은 삭제한 요소들을 가진 배열

> 원본 배열을 변경

```javascript
var items = ['one', 'two', 'three', 'four'];

// items[1]부터 2개의 요소를 제거하고 제거된 요소를 배열로 반환
var res = items.splice(1, 2);

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 'two', 'three' ]
```

### 11. Array.prototype.sort(comparefunc)

- 배열 요소의 순서를 오름차순 정렬
- `sort`를 한 후 `reverse()`를 하면 내림차순으로 정렬

> 원본 배열을 변경

```javascript
// 숫자 배열 오름차순 정렬
// compareFunction의 반환값이 0보다 작은 경우, a를 우선한다.
points.sort(function (a, b) { return a - b; });
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

// 숫자 배열 내림차순 정렬
// compareFunction의 반환값이 0보다 큰 경우, b를 우선한다.
points.sort(function (a, b) { return b - a; });
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]
```

### 12. Array.prototype.reverse()

- 배열 요소의 순서를 반대 정렬
- 원본 배열을 변경하며 반환값은 변경된 배열

> 원본 배열을 변경

```javascript
var a = ['a', 'b', 'c'];
var b = a.reverse();

// 원본 배열이 변경된다
console.log(a); // [ 'c', 'b', 'a' ]
console.log(b); // [ 'c', 'b', 'a' ]
```

### 13. Array.prototype.forEach()

- 각 요소를 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수 실행
- 콜백함수의 매개변수는 `배열 요소의 값`, `요소 인덱스`, `순회할 배열`
- `for`문이 아니기 때문에 반복문에서만 사용 가능한 break문을 사용하지 못함
- 매개변수는 순서는 의미가 있고 값의 개수는 상관없음
- `this` 전달 가능

```javascript
var total = 0;
var testArray = [1, 3, 5, 7, 9];

// forEach 메소드는 원본 배열을 변경하지 않는다.
testArray.forEach(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  total += item;
});

console.log(total); // 25
console.log(testArray); // [ 1, 3, 5, 7, 9 ]

testArray = [1, 2, 3, 4];

// 원본 배열을 변경하려면 콜백 함수의 3번째 인자를 사용한다.
testArray.forEach(function (item, index, array) {
  array[index] = Math.pow(item, 2);
});

console.log(testArray); // [ 1, 4, 9, 16 ]

// foreach()동작 원리 예상 코드

Array.prototype.myForEach = function (f) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!f || {}.toString.call(f) !== '[object Function]') {
    throw new TypeError(f + ' is not a function.');
  }

  for (var i = 0; i < this.length; i++) {
    // 배열 요소의 값, 요소 인덱스, 순회할 배열을 매개변수에 전달하고 콜백 함수 호출
    f(this[i], i, this);
  }
};
```

### 14. Array.prototype.map()

- 각 요소를 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수 실행
- 콜백함수의 매개변수는 `배열 요소의 값`, `요소 인덱스`, `순회할 배열`
- 수행 결과를 리턴한 새로운 배열을 반환
- 배열을 순회하면서 각각의 요소에 대응
- 반드시 `return`값이 존재해야함
- `this` 전달 가능

> 원본 배열을 변경 하지 않고 새로운 배열을 만들어서 반환

```javascript
var numbers = [1, 4, 9];

// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행
var roots = numbers.map(function (item) {
  return Math.sqrt(item);
});

// 위 코드의 축약표현은 아래와 같다.
// var roots = numbers.map(Math.sqrt);

// map 메소드는 새로운 배열을 반환한다
console.log(roots);   // [ 1, 2, 3 ]
// map 메소드는 원본 배열은 변경하지 않는다
console.log(numbers); // [ 1, 4, 9 ]

// map() 동작 원리 코드
Array.prototype.myMap = function (f) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!f || {}.toString.call(f) !== '[object Function]') {
    throw new TypeError(f + ' is not a function.');
  }

  var result = [];
  for (var i = 0; i < this.length; i++) {
    // 배열 요소의 값, 요소 인덱스, 순회할 배열을 매개변수에 전달하고 콜백 함수 호출하고 그 결과를 새로운 배열로 리턴
    result[i] = f(this[i], i, this);
  }
  return result;
};
```

###  여기서 잠깐 !!

###  `map()`과 `forEach()`의 차이점

| map()                          | forEach()                         |
| ------------------------------ | --------------------------------- |
| 배열을 순회하며 요소 값을 새로운 값을 맵핑할 때 사용 | 배열을 순회하며 요소 값을 참조하여 무언가를 하기 위해 사용 |

### 15. Array.prototype.filter()

- 각 요소를 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수 실행
- 콜백함수의 매개변수는 `배열 요소의 값`, `요소 인덱스`, `순회할 배열`
- 수행 결과가 `true`, `false`를 리턴


> 원본 배열을 변경되지 않음

```javascript
var result = [1, 2, 3, 4, 5].filter(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  return item % 2; // 홀수만을 필터링한다 (1은 true로 평가된다)
});

console.log(result); // [ 1, 3, 5 ]

// filter() 동작 원리 코드
Array.prototype.myFiter = function (f) {
  // 첫번재 매개변수에 함수가 전달되었는지 확인
  if (!f || {}.toString.call(f) !== '[object Function]') {
    throw new TypeError(f + ' is not a function.');
  }

  var result = [];
  for (var i = 0; i < this.length; i++) {
    // 배열 요소의 값, 요소 인덱스, 순회할 배열을 매개변수에 전달하고 콜백 함수 호출하여 그 결과가 참인 요소만을 리턴
    if (f(this[i], i, this)) result.push(this[i]);
  }
  return result;
};
```



### 16. Array.prototype.reduce()

- 배열을 순회하여 각 요소에 대해 이전 콜백함수 실행 반환값을 전달하여 콜백함수를 실행
- 콜백함수의 매개변수는 `이전 콜백의 반환값`, `배열 요소의 값`, `요소 인덱스`, `순회할 배열`
- 수행 결과는 항상 하나를 리턴

```javascript
/*
previousValue: 이전 콜백의 반환값
currentValue : 배열 요소의 값
currentIndex : 인덱스
array        : 순회할 배열
*/
var result = [1, 2, 3, 4, 5].reduce(function (previousValue, currentValue, currentIndex, array) {
  console.log(previousValue + '+' + currentValue + '=' + (previousValue + currentValue));
  return previousValue + currentValue; // 결과는 다음 콜백의 첫번째 인자로 전달된다
});

console.log(result); // 15: 1~5까지의 합
/*
1: 1+2=3
2: 3+3=6
3: 6+4=10
4: 10+5=15
15
*/
```



### 17. Array.prototype.some()

- 배열 내 일부 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과 값을 boolean으로 반환

- 콜백함수의 매개변수는 `배열 요소의 값`, `요소 인덱스`, `순회할 배열`
- 수행 결과가 `true`, `false`를 리턴

```javascript
// 배열 내 요소 중 10보다 큰 값이 1개 이상 존재하는지 확인
var res = [2, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});
console.log(res); // false

res = [12, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});
console.log(res); // true

// 배열 내 요소 중 특정 값이 1개 이상 존재하는지 확인
res = ['apple', 'banana', 'mango'].some(function (item) {
  return item === 'banana';
});
console.log(res); // true
```

### 18. Array.prototype.every()

- 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인하여 그 결과 값을 boolean으로 반환
- 콜백함수의 매개변수는 `배열 요소의 값`, `요소 인덱스`, `순회할 배열`
- `this` 전달 가능

```javascript
// 배열 내 모든 요소가 10보다 큰 값인지 확인
var res = [21, 15, 89, 1, 44].every(function (item) {
  return item > 10;
});
console.log(res); // false

res = [21, 15, 89, 100, 44].every(function (item) {
  return item > 10;
});
console.log(res); // true
```

### 19. Array.prototype.find()

- 배열을 순회하며 각 요소에 대하여 인자로 주어진 **콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환**
- 콜백함수의 매개변수는 `배열 요소의 값`, `요소 인덱스`, `순회할 배열`

```javascript
var array = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

// 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환한다.
var result = array.find(function (item) {
  return item.id === 2;
});

// ES6
// const result = array.find(item => item.id === 2;);

console.log(result); // { id: 2, name: 'Kim' }

// filter는 콜백함수의 실행 결과가 true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.
result = array.filter(function (item) {
  return item.id === 2;
});

console.log(result); // [ { id: 2, name: 'Kim' },{ id: 2, name: 'Choi' } ]
```

### 참고 :

- http://poiemaweb.com (모든 코드 예제 사용 및 설명)