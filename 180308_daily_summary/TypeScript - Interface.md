# TypeScript - Interface

- 일반적으로 Type을 체크하기 위해 사용하며 일반 변수, 함수, 클래스에 사용
- 프로퍼티 또는 메소드의 구현을 강제하여 일관성을 유지할 수 있게함
- 멤버변수와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수는 없음

## 1. 변수와 인터페이스

- 항상 인터페이스를 타입으로 선언받은 변수는 해당 인터페이스를 준수
- 복잡한 매개변수 체크가 필요없음
- 일반 변수의 타입으로 사용 가능

```typescript
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

// 파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
function addTodo(todo: Todo) {
  console.log(todo.content);
}

// 파라미터 todo는 Todo 인터페이스를 준수하여야 한다.
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
```

## 2. 함수와 인터페이스

- Type이 선언된 파라미터 리스트와 리턴 타입을 정의

```typescript
// 함수 인터페이스의 정의
interface SquareFunc {
  (num: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
}

console.log(squareFunc(10)); // 100
```

## 3. 클래스와 인터페이스

- 클래스 선언문의 implements 뒤에 인터페이스를 선언하면 해당 클래스는 지정된 인터페이스를 반드시 구현
- 인터페이스를 구현하는 클래스의 일관성을 유지가능
- 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수 없음

```typescript
// 인터페이스의 정의
interface IPerson {
  name: string;
  sayHello(): void;
}

// 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 멤버변수와 메소드를 반드시 구현하여야 한다.
class Person implements IPerson {
  // 인터페이스에서 정의한 멤버변수의 구현
  constructor(public name: string) {}

  // 인터페이스에서 정의한 메소드의 구현
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

function greeter(person: IPerson): void {
  person.sayHello();
}

const me = new Person('Lee');
greeter(me); // Hello Lee
```

## 4. 덕 타이핑(Duck typing)

```typescript
interface IDuck { // 1
  quack(): void;
}

class MallardDuck implements IDuck { // 3
  quack() {
    console.log('Quack!');
  }
}

class RedheadDuck { // 4
  quack() {
    console.log('q~uack!');
  }
}

function makeNoise(duck: IDuck): void { // 2
  duck.quack();
}

makeNoise(new MallardDuck()); // Quack!
makeNoise(new RedheadDuck()); // q~uack! // 5
```

1. 인터페이스 IDuck은 quack() 메소드를 정의
2. makeNoise 함수는 인터페이스 IDuck를 구현한 클래스의 인스턴스 duck을 인자로 전달
3. 클래스 MallardDuck은 인터페이스 IDuck을 구현
4. 클래스 RedheadDuck은 인터페이스 IDuck을 구현하지는 않았지만 quack() 메소드를 가짐
5. makeNoise() 함수에 인터페이스 IDuck을 구현하지 않은 클래스 RedheadDuck의 인스턴스를 인자로 전달하여도 에러없이 처리
6. TypeScript는 해당 인터페이스에서 정의한 값(멤버변수나 메소드)을 가지고 있다면 그 인터페이스를 구현한 것으로 인정한다. 이것을 덕 타이핑(duck typing) 또는 구조적 타이핑(structural typing)이라 함

## 5. 선택적 프로퍼티 (Optional Property)

인터페이스의 프로퍼티는 반드시 구현되야 하지만 프로퍼티가 선택적으로 필요할 때 `?`를 붙여서 사용하면 됨

```typescript
interface IUserInfo {
  username: string;
  password: string;
  age?    : number;
  address?: string;
}

const userInfo: IUserInfo = {
  username: 'wlsdntus4@gmail.com',
  password: '123456'
}

console.log(userInfo);
```

> 선택적 프로퍼티를 사용하면 사용 가능한 프로퍼티를 파악 할 수 있어 코드가 이해하기 쉬워짐