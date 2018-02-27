# **Enhanced Object property**

## 1. 프로퍼티 축약 표현

프로퍼티 이름과 프로퍼티 값이 같으면 생략 가능함

```javascript
// ES5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // { x: 1, y: 2 }
```
```javascript
// ES6
let x = 1, y = 2;

const obj = { x, y };

console.log(obj); // { x: 1, y: 2 }
```

## 2. 프로퍼티 이름 조합

프로퍼티 이름을 문자열 또는 변수를 조합하여 동적으로 생성할때 ES5에서는 객체 선언 이후 프로퍼티 이름을 할당해야 하지만 ES6에서는 객체 생성과 동시에 프로퍼티 이름을 넣을 수 있음

```javascript
var i = 0;
var propNamePrefix = 'prop_';

// ES5
var obj = {};
obj[propNamePrefix + ++i] = i;
obj[propNamePrefix + ++i] = i;
obj[propNamePrefix + ++i] = i;

// ES6
const obj = {
  [propNamePrefix + ++i]: i,
  [propNamePrefix + ++i]: i,
  [propNamePrefix + ++i]: i
};

console.log(obj); // { prop_1: 1, prop_2: 2, prop_3: 3 }
```

## 3. 메소드 축약 표현

ES5에서는 메소드 선언을 위해 프로퍼티의 값으로 함수 선언식을 사용하지만 ES6부터는 메소드 선언을 위해 `function` 키워드를 생략한 축약 표현을 사용

```javascript
// ES5
var obj = {
  name: 'Park',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

// ES6
const obj = {
  name: 'Park',
  // 메소드 축약 표현
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee
```

## 4. `__proto__` 프로퍼티에 의한 상속

ES5에서는 객체 상속을 위해 `Object.create()`함수로 프로토타입 패턴 상속을 하지만 ES6부터는 `__proto__` 프로퍼티를 직접 설정 가능하며 `__proto__` 프로퍼티에 다른 객체를 직접 바인딩하여 상속 가능

```javascript
// ES6
const parent = {
  name: 'parent',
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

const child = {
  // child 객체의 프로토타입 객체에 parent 객체를 바인딩하여 상속을 구현한다.
  __proto__: parent,
  name: 'child'
};

parent.sayHi(); // Hi! parent
child.sayHi();  // Hi! child
```

> 결국 Javascript의 상속은 프로토타입 패턴 상속을 하는 것을 뜻하므로 상속은 최대한 사용 안하는 것이 좋음