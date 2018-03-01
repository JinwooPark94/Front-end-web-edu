# ECMAScript6 - Class

Javascript는 **프로토타입 기반** 객체지향형 언어이며 클래스에는 없는 객체지향 프로그래밍 스타일로 프로토타입 체인과 클로저 등으로 객체지향을 구현 가능

## 1. 클래스 정의(Class Definition)

- 첫 문자는 대문자
- `constructor`를 항상 가지고 있어야함
- 클래스 안에는 메서드만 있어야함
- 프로퍼티는 변수에 선언하여 사용
- 결과값은 항상 선언문 뒤에서 사용


```javascript
class Person {
  constructor(name) {
    this._name = name;
  }

  sayHi() {
    console.log(`Hi! ${this._name}`);
  }
}

const me = new Person('Lee');
me.sayHi(); // Hi! Lee

console.log(me instanceof Person); // true
```

## 2. 인스턴스 생성

- 인스턴스 생성시 `new`연산자와 함께 생성자를 호출

  > `new` 연산자를 사용하지 않을 시 에러 발생

```javascript
class Foo {}

const foo = new Foo();
// const foo = Foo();     error
```

## 3. constructor

- 클래스 내부에 꼭 하나를 가져야함
- 생략이 가능하며 `constructor() {}`가 있는 것 처럼 동작

```javascript
class Foo {}

const foo = new Foo();
console.log(foo); // Foo {}

foo.num = 1;      // 동적 프로퍼티 추가
console.log(foo); // Foo { num: 1 }

class Bar {
  // constructor는 인스턴스의 생성과 동시에 멤버 변수의 생성 및 초기화를 실행할 수 있다.
  constructor(num) {
    this.num = num;
  }
}

console.log(new Bar(1)); // Bar { num: 1 }
```

## 4. 멤버 변수

- `Class Body`안에서는 변수 선언이 불가능하며, `constructor`안에 멤버 변수의 선언과 초기화가 가능
- `constructor` 내부에서 선언한 멤버 변수 name은 `this`에 바인딩 되어있으며 언제나 `public`이고 외부에서 참조 가능함

```javascript
class Foo {
  constructor(name) {
    this.name = name; // 멤버변수의 선언과 초기화
  }
}

const foo = new Foo('Lee');
console.log(foo.name); // Lee
```

## 5. 호이스팅 (Hoisting)

- `let`, `const`와 같이 호이스팅되지 않는 것처럼 동작

  > 호이스팅 과정인 선언, 초기화, 할당단계에서 선언 이 후 일시적 사각지대에 빠지게됨


- 선언문 이전에 참조하면 `ReferenceError: Foo is not defined`를 발생

```javascript
const foo = new Foo(); // ReferenceError: Foo is not defined
class Foo {}
```

## 6. getter, setter

- 어떤 멤버 변수에 접근할 때마다 멤버 변수의 값을 조작하는 행위가 필요할 때 사용
- `getter`는 항상 return 값이 있어야 함

```javascript
class Foo {
  constructor(arr = []) {
    this._arr = arr;
  }

  // getter: firstElem은 멤버 변수 이름과 같이 사용된다.
  // getter는 반드시 무언가를 반환하여야 한다.
  get firstElem() {
    return this._arr.length ? this._arr[0] : null;
  }
}

const foo = new Foo([1, 2]);
// 프로퍼티 firstElem에 접근하면 getter가 호출된다.
console.log(foo.firstElem); // 1
```

- 어떤 멤버 변수에 값을 할당할 때마다 멤버 변수의 값을 조작하는 행위가 필요할 때 사용
- `setter`는 값을 전달해줘야 하는데 직접 값을 할당함

```javascript
class Foo {
  constructor(arr = []) {
    this._arr = arr;
  }

  // getter: firstElem은 멤버 변수 이름과 같이 사용된다.
  // getter는 반드시 무언가를 반환하여야 한다.
  get firstElem() {
    return this._arr.length ? this._arr[0] : null;
  }

  // setter: firstElem은 멤버 변수 이름과 같이 사용된다.
  set firstElem(elem) {
    // ...this._arr은 this._arr를 개별 요소로 분리한다
    this._arr = [elem, ...this._arr];
  }
}

const foo = new Foo([1, 2]);

// 멤버 변수 lastElem에 값을 할당하면 setter가 호출된다.
foo.firstElem = 100;

console.log(foo.firstElem); // 100
```

- `getter`, `setter`는 프로퍼티처럼 사용

## 7. 정적 메소드 (Static method)

- `Class`의 정적 메소드로 정의
- 클래스 이름으로 호출하며 클래스의 인스턴스로 호출 불가
- `Math`, `Array`, `Nummer`와 같이 애플리케이션 전역에 사용할 유틸리티 함수를 생성하는데 사용

```javascript
class Foo {
  constructor(prop) {
    this.prop = prop;
  }

  static staticMethod() {
    return 'staticMethod';
  }

  prototypeMethod() {
    return 'prototypeMethod';
  }
}

const foo = new Foo(123);

console.log(Foo.staticMethod());
console.log(foo.staticMethod()); // Uncaught TypeError: foo.staticMethod is not a function
```

## 8. 클래스 상속 (Class Inheritance)

- 상속을 할 때 `extends`를 사용하며 자식에서 부모를 부를 때 `super`라 부름

### 8.1 extends 키워드

- 부모의 것은 자식이 가져다가 쓸 수 있지만, 자식의 것은 부모가 가져다 쓸 수 없음
- 무조건 클래스 정의가 필요함


```javascript
// Base Class
class Animal {
  constructor(weight) {
    this._weight = weight;
  }

  weight() {
    console.log(this._weight);
  }

  eat() { console.log('Animal eat.'); }
}

// Sub Class
class Human extends Animal {
  constructor(weight, language) {
    super(weight);
    this._language = language;
  }

  // 부모 클래스의 eat 메소드를 오버라이드하였다
  eat() { console.log('Human eat.'); }

  speak() {
    console.log(`Koreans speak ${this._language}.`);
  }
}

const korean = new Human(70, 'Korean');
korean.weight(); // 70
korean.eat();    // Human eat.
korean.speak();  // Koreans speak Korean.

console.log(korean instanceof Human);  // true
console.log(korean instanceof Animal); // true
```

### 8.2 super 키워드

- 부모 클래스의 프로퍼티를 참조할 때 사용


- parent의 `constructor`를 가리킴
- `super`는 상속받는 객체를 가리키기도 하고 `constructor`이기도 함

```javascript
class Parent {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }

  toString() {
    return `${this._x}, ${this._y}`;
  }
}

class Child extends Parent {
  constructor(x, y, z) {
    // super 메소드는 자식 class의 constructor 내부에서 부모 클래스의 constructor(super-constructor)를 호출한다.
    super(x, y);
    this._z = z;
  }

  toString() {
    // super 키워드는 부모 클래스(Base Class)에 대한 참조이다. 부모 클래스의 프로퍼티 또는 메소드를 참조하기 위해 사용한다.
    return `${super.toString()}, ${this._z}`; // B
  }
}

const child = new Child(1, 2, 3);
console.log(child.toString()); // 1, 2, 3
```

