# Arrow function

## 1. Arrow function 선언

- function 키워드 대신 화살표(=>)를 사용하여 함수 선언 가능


- 콜백 함수일 때만 사용함

```javascript
// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한개인 경우, 소괄호를 생략 가능
(x, y) => { ... } // 매개변수가 여러개인 경우, 소괄호를 생략 불가능

// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             
// 함수 몸체가 한줄의 구문이라면 중괄호를 생략 가능하며 암묵적으로 return함

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일하며 객체 반환시 소괄호를 사용

() => {           // multi line block.
  const x = 10;
  return x * x;
};
```

## 2. Arrow function의 호출

- 익명 함수로만 사용가능하며 호출하기 위해서는 함수 표현식을 사용

```javascript
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]

// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```

## 3. this

- function 키워드를 사용하여 생성한 일반 함수와 `Arrow function`의 차이점은 `this`

### 일반 함수의 this

기존 ES5 bind를 이용한 함수의 this 선언 방식

```javascript
// bind(this)
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(function (x) {
    return this.prefix + ' ' + x;;
  }.bind(this)); // this: Prefixer 생성자 함수의 인스턴스
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Park', 'Kim']));
```

### Arrow function의 this

Arrow function의 this는 자신의 상위 컨텍스트를 바라봄

> 이러한 현상을 `Lexical this`라고 부름

```javascript
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map(x => `${this.prefix}  ${x}`);
};

const pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Park', 'Kim']));
```



## 4. Arrow Function을 사용해서는 안되는 경우

### 4.1 메소드

메소드 정의시 `Arrow Function`을 사용하는 것을 피해야 함

```javascript
// Bad
const obj = {
  name: 'Lee',
  sayHi: () => console.log(`Hi ${this.name}`)
};

obj.sayHi(); // Hi undefined
```

```javascript
// Good
const obj = {
  name: 'Lee',
  sayHi() { // === sayHi: function() {
    console.log(`Hi ${this.name}`);
  }
};

obj.sayHi(); // Hi Lee
```

### 4.2 prototype

메소드를 할당하는 경우에도 메소드와 같은 동일한 문제 발생

```javascript
// Bad
const obj = {
  name: 'Park',
};

Object.prototype.sayHi = () => console.log(`Hi ${this.name}`);

obj.sayHi(); // Hi undefined
```

```javascript
// Good
const obj = {
  name: 'Park',
};

Object.prototype.sayHi = function() {
  console.log(`Hi ${this.name}`);
};

obj.sayHi(); // Hi Park
```

### 4.3 생성자 함수

생성자 함수에도 `Arrow Function` 사용할 수 없음

```javascript
const Foo = () => {};
// Arrow Function은 prototype 프로퍼티가 없다
console.log(Foo.hasOwnProperty('prototype')); // false
const foo = new Foo(); // TypeError: Foo is not a constructor
```

### 4.4 addEventListener

`addEventListener`에서 `Arrow Function`을 사용하면 this는 그 상위인 `window`를 가리킴

```javascript
// Bad
var button = document.getElementById('myButton');

button.addEventListener('click', () => {
  console.log(this === window); // => true
  this.innerHTML = 'Clicked button';
});
```

```javascript
// Good
var button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this === button); // => true
  this.innerHTML = 'Clicked button';
});
```

