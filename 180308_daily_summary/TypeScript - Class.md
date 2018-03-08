# TypeScript - Class

- ES6의 클래스와 매우 유사하지만 몇 가지 TypeScript 고유 기능이 존재

## 1. Class 정의

### 1.1 ES6

- Class 정의시 메소드만 포함 가능
- Class 안에 멤버 변수를 선언 불가능하고 생성자 내부에서 멤버 변수를 선언 및 초기화

### 1.2 TypeScript

- Class 안에 멤버 변수를 항상 선언 후 사용해야함

```typescript
class Person {
  // 멤버 변수를 사전 선언해야함
  name: string;

  constructor(name: string) {
    // 멤버 변수에 값을 할당
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }
}

const person = new Foo('Lee');
person.walk(); // Lee is walking
```

## 2. 접근 제한자

### 2.1 public

모든 곳에 공개

### 2.2 protected

자식에게만 공개

### 2.3 private

자식에게도 안보임

>  외부에서 보이면 모두가 사용가능함

| 접근 가능성   | public | protected | private |
| -------- | ------ | --------- | ------- |
| 클래스 내부   | ◯      | ◯         | ◯       |
| 자식 클래스   | ◯      | ◯         | ✕       |
| 클래스 인스턴스 | ◯      | ✕         | ✕       |

## 3. 생성자 파라미터에 접근 제한자 선언

- 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 멤버 변수로 선언하며 생성자 내부에서 별도의 초기화 없이도 암묵적으로 초기화

```typescript
class Foo {
  // 접근 제한자가 선언된 생성자 파라미터 x는 멤버 변수로 선언되고 초기화가 자동 수행된다
  // public이 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다
  constructor(public x: string) { }
}

const foo = new Foo('Hello');
console.log(foo);   // Foo { x: 'Hello' }
console.log(foo.x); // Hello

class Bar {
  // 접근 제한자가 선언된 생성자 파라미터 x는 멤버 변수로 선언되고 초기화가 자동 수행된다
  // private이 선언되었으므로 x는 클래스 내부에서만 참조 가능하다
  constructor(private x: string) { }
}

const bar = new Bar('Hello');

console.log(bar); // Bar { x: 'Hello' }

// private이 선언된 bar.x는 클래스 내부에서만 참조 가능하다
console.log(bar.x); // Property 'x' is private and only accessible within class 'Bar'.
```

## 4. readonly 키워드

`readonly`가 선언된 프로퍼티는 선언시 또는 생성자 내부에서만 값을 할당 가능

```typescript
class Foo {
  private readonly MAX_LEN: number = 5;
  private readonly MSG: string;

  constructor() {
    this.MSG = 'hello';
  }

  log() {
    // readonly가 선언된 프로퍼티는 재할당이 금지된다.
    this.MAX_LEN = 10; // Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
    this.MSG = 'Hi'; // Cannot assign to 'MSG' because it is a constant or a read-only property.

    console.log(`MAX_LEN: ${this.MAX_LEN}`); // MAX_LEN: 5
    console.log(`MSG: ${this.MSG}`); // MSG: hello
  }
}

new Foo().log();
```

## 5. Static 키워드

Typescript 클래스에서 static 키워드는 멤버 변수에도 사용 가능

```typescript
class Foo {
  static instanceCounter = 0;
  constructor() {
    // 생성자가 호출될 때마다 카운터를 1씩 증가시킨다.
    Foo.instanceCounter++;
  }
}

var foo1 = new Foo();
var foo2 = new Foo();

console.log(Foo.instanceCounter);  // 2
console.log(foo2.instanceCounter); // error TS2339: Property 'instanceCounter' does not exist on type 'Foo'.
```

## 6. 추상 클래스 (Abstract class)

- 클래스로서 직접 인스턴스를 생성할 수 없으며 상속만을 위해 사용
- 추상 클래스를 상속하는 클래스는 추상 클래스의 추상 메소드를 반드시 구현

```typescript
abstract class Animal {
  // 추상 메소드
  abstract makeSound(): void;
  // 일반 메소드
  move(): void {
    console.log('roaming the earth...');
  }
}

// new Animal();
// error TS2511: Cannot create an instance of the abstract class 'Animal'.

class Dog extends Animal {
  // 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
  makeSound() {
    console.log('bowwow~~');
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
```

