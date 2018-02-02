# 함수 객체의 속성(property)

## arguments 속성(property)

함수 호출시 함수 값에 arguments를 자동 생성하고 인수들의 정보를 담고 있는 순회가능한 유사배열 객체

> 유사배열 객체(array-like object) : 배열처럼 움직이는 객체

```javascript
function multiply(x, y) {
  
  // 방어코드 넣기
  
  console.log(arguments);
  return x * y;
}

multiply();        // {}
multiply(1);       // { '0': 1 }
multiply(1, 2);    // { '0': 1, '1': 2 }
multiply(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }
```



## caller 속성(property)

자신이 호출한 함수를 의미

```javascript
function restaurant(personFunc){
  var table = personFunc();
  return desk;
}
function person(){
  return person.caller;
}

console.log(restaurant(person)); // function restaurant의 속성을 가지고 있음
```

## length 속성(property)

함수에서 매개변수의 개수를 의미

```javascript
function person( name, gender, country ){}
console.log(person.length); // 3
```

## name 속성(property)

기명 함수 또는 익명 함수에 사용되며 

```javascript
function person( name, gender, country ){}
console.log(person.name); // 여기서의 person name은 함수 function의 이름인 person이 출력됨
```

## ______proto__ 속성(property)

- 함수 객체를 포함한 모든 객체가 가지고 있는 프로퍼티
- 자신의 부모역할을 할 프로포타입 객체를 가르킴
- 함수의 프로포타입 객체는 `Function.prototype` 이며 이것도 함수

```javascript
function phone(number) {
  return number;
}

console.log(phone.__proto__ === Function.prototype);
console.log(Object.getPrototypeOf(phone) === Function.prototype);
```



## prototype 속성(property)

- 함수 객체만 가지고 있는 프로퍼티
- 함수 객체가 생성자로 사용될 때 생성된 객체의 부모 역할을 하는 객체를 가르킴
- 함수가 생성될 때 만들어지며 `constructor` 프로퍼티를 가지는 객체를 가지는 객체를 가리킴

> 함수는 생성자 함수로 사용될 가능성이 있기 때문에

```javascript
function phone(number) {
  return number;
}

console.log(phone.__proto__ === Function.prototype); // true ①
console.log(phone.__proto__ === phone.prototype);   // false
console.log(phone.prototype.constructor === phone); // true ②
console.log(phone.__proto__.constructor === phone.prototype.constructor); // false
```

---

# 함수의 다양한 형태

## 즉시호출함수표현식 (IIFE,  Immediately Invoke Function Expression)

함수 정의와 동시에 즉시 호출하는데 딱 한번 호출함

> 실행이 필요한 초기화 처리등에 사용 가능

```javascript
// 기명 즉시호출함수
(function nameFunction() {
  
}());

// 익명방법
(function () {
  
}());
```



## 내부 함수 (Inner function)

함수 내부에 있는 함수를 내부함수

```javascript
//부모함수
function parent() {
  // 내부함수
  function child(){
  }
}
```

- 자식은 부모의 변수에 접근이 가능하지만 부모는 자식의 변수에 접근 불가능함
- 안의 내부함수는 부모함수의 외부에서 접근할 수 없음



## 콜백 함수 (Callback function)

![참고 : http://poiemaweb.com/js-function - callback function](http://poiemaweb.com/img/callback.png)

특정한 이벤트가 발생할때 호출되는 함수 

> 나중에 호출하는 함수

```javascript
function laterCall() {
  var name = 'Park';
  
  // 0.03초 후에 함수 실행
  setTimeout(function () {
    console.log('My name is ' + name);
  }, 300);
}

doSomething(); // My name is Park 이라고 출력됨
```



---

# 프로토타입 객체

- `Javascript`는 프로토타입 기반 객체지향 프로그래밍 언어

- 모든 객체는 자신의 부모 역할 담당하는 객체와 연결되어 있음

  > 부모 객체를 Prototype 객체라고 부르며 줄여서 Prototype이라고 함

**결국 Prototype 객체는 생성자 함수에 의해 생성된 각 객체들에 제공되는 공통부분의 프로퍼티를 제공하기 위해 사용**

```javascript
var restaurant = {
  foodName: 'pasta',
  value: 16000
};

console.log(restaurant.hasOwnProperty('name')); // 값은 : true
```

restaurant라는 객체에는 hasOwnProperty라는 정보가 없지만 값은 true가 출력이 된다. 그 이유는 만약 선택한 객체에 값이 없으면 그 다음 부모 객체로 찾아가고 또 없으면 이 과정을 반복하여 결국 Object 객체까지 가서 없으면 error값을 반환 한다. 

## constructor 프로퍼티

모든 Prototype 객체는 constructor 이라는 Property를 가지는데 이것은 생성자 함수를 가르킴

```javascript
function Restaurant(food){
  this.food = food;
}

var person = new Restaurant('pasta');

console.log(Restaurant.prototype.constructor === Restaurant);

console.log(person.constructor === Restaurant);

console.log(Restaurant.constructor === Function);
```



## Prototype chain(프로토타입 체인)

Property나 메소드로 접근하려고 할 때 해당 객체에 Property 값 또는 메소드가 없다면 각각의 객체에 가지고 있는 ______proto__( 부모역할을 할 프로포타입 객체를 가르킴)의 위치를 찾아 계속 반복 수행을 하는 것

> Prototype chain의 동작 조건

**자바스트립트의 프로토타입 체이닝은 결국 상속**

### 리터널 방식 객체의 Prototype 체인

객체를 생성하는 과정에서 Object() 생성자 함수로 객체를 생성하는데 Object() 생성자 함수도 다른 함수와 같은 함수이기 때문에 prototype 속성이 있음

![참고 : http://poiemaweb.com/js-function - Object literal Prototype chaining](http://poiemaweb.com/img/object_literal_prototype_chaining.png)

> 결국 객체(Object)를 생성하면 그 객체에 `Object.prototype`을 프로포타입 객체로 가짐



### 생성자 방식 객체의 Prototype 체인

함수를 생성하는 과정에서 Function() 생성자 함수를 통해 함수가 생성되는데 모든 함수의 Prototype 객체는 `Function.prototype`이고 또한 생성자 함수도 함수 객체이므로 `Function.prototype` 객체이다. 

![참고 : http://poiemaweb.com/js-function - constructor function prototype chaining](http://poiemaweb.com/img/constructor_function_prototype_chaining.png)

> 모든 방식은 결국 모든 객체의 부모인 Object.prototpye 객체에서 끝나는데 이것을 `프로토타입 체인의 종점`이라고 함



## Prototype 객체의 확장 및 변경

Prototype 객체도 객체이므로 객체를 추가, 수정 또는 삭제 할 수 있음

> 이 말은 즉 Object.prototype 객체를 추가, 수정 또는 삭제 가능

![참고 : http://poiemaweb.com/js-function - changing prototype](http://poiemaweb.com/img/changing_prototype.png)

## 기본자료형(Primitive data type)의 확장

기본자료형인 문자열이 객체와 유사하게 동작하는데 기본자료형으로 프로퍼티나 메소드를 호출할 때 기본자료형과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유하고 이후 다시 기본자료형으로 변환

```javascript
var str = 'test';
console.log(typeof str);                 // 자료형
console.log(str.constructor === String); // true
console.dir(str);

var strObj = new String('test');
console.log(typeof strObj);                 // 객체
console.log(strObj.constructor === String); // true
console.dir(strObj);
```

> 기본자료형 중 문자열일 경우 "."을 찍는 순간 String() 생성자 함수로 객체로 바꿔버림

---

# Scope (유효범위)

## Scope의 종류

- 전역변수 : 어디서든 참조할 수 있는 변수

  > 전역 객체(Global scope)는 window의 property

- 지역변수 : 지역에서만 참조할 수 있는 변수

  > 함수 지역내에만 지역변수를 선언 가능

  ​

## 생존기간(life-cycle) 조절

- 전역변수 : 어플리케이션이 끝날 때 까지 남아 있음
- 지역변수 : 함수가 종료될 때 까지 남아 있음

---

# This

인스턴스 자신을 가르키는 변수이며 객체 자신에 대한 참조 값을 가지고 있음

## 특징

- 함수가 호출될 때 argument 객체와 this를 전달 받음

- 함수 또는 메소드 안에 있는 것은 모두 전역객체

  > 단, 2가지를 제외함 

  - 메소드 내에 있는 경우
  - 생성자 함수에 있는 경우

## 함수 호출 패턴에 따른 this의 참조값

### 1. 함수 호출 패턴

전역객체는 객체중에 가장 상위 객체인데 딱 유일한 하나이며 browser에서는 'window' node에서는 'global'을 포함

```javascript
// browser console
this === window // true

// in Terminal - Node
this === global // true
```

### 2. 메소드 호출 패턴

함수 자체가 객체의 Property면 메소드 호출 패턴으로 호출

> 메소드 내부에 this는 메소드를 호출한 객체에 바인딩됨

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function() {
  return this.name;
}

var me = new Person('Park');
console.log(me.getName());

Person.prototype.name = 'Woo';
console.log(Person.prototype.getName());
```

### 3. 생성자 호출 패턴

기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작

#### 동작 방식

1. 빈 객체 생성과 동시에 this 바인딩

   **순서**

   - 빈 객체를 만듬
   - this를 빈 객체를 가리킴
   - 마지막에 자신의 프로토타입 객체로 설정

2. this를 통한 property 생성

3. 생성된 객체를 반환함

   - 반환문이 없는 경우, this에 바인딩 되어있는 새로운 객체를 반환
   - 반환문이 this가 아닌 다른 객체를 반환하는 경우, this가 아닌 해당 객체가 반환

```javascript
var Person = function(name) {
  // 생성자 함수 코드 실행 전 -------- 1
  this.name = name;  // --------- 2
  // 생성된 함수 반환 -------------- 3
}

var me = new Person('Lee');
console.log(me.name);
```

![참고 : http://poiemaweb.com/js-function - constructor](http://poiemaweb.com/img/constructor.png)