# TypeScript - Generic

선언 시점이 아니라 생성 시점에 Type을 명시하여 하나의 Type만이 아닌 다양한 Type을 사용할 수 있게 한 기법

- T는 제네릭을 선언할 때 관용적으로 사용되는 식별자로 타입 파라미터(Type parameter)라 함


### Generic을 사용하지 않았을 때

```typescript
class Queue {
  protected data = []; // data: any[]

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.shift();
  }
}

// Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스를 정의
class NumberQueue extends Queue {
  // number 타입의 요소만을 push한다.
  push(item: number) {
    super.push(item);
  }

  pop(): number {
    return super.pop();
  }
}

const queue = new NumberQueue();

queue.push(0);
// 의도하지 않은 실수를 사전 검출 가능
// [ts] Argument of type '"1"' is not assignable to parameter of type 'number'.
// queue.push('1');
queue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다

console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // 1
```

### Generic을 사용하였을 때

```typescript
class Queue<T> {
  protected data = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

// number 전용 Queue
const numberQueue = new Queue<number>();

numberQueue.push(0);
// numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능
numberQueue.push(+'1');   // 실수를 사전 인지하고 수정할 수 있다

console.log(numberQueue.pop().toFixed()); // 0
console.log(numberQueue.pop().toFixed()); // 1

// string 전용 Queue
const stringQueue = new Queue<string>();

stringQueue.push('Hello');
stringQueue.push('World');

console.log(stringQueue.pop().toUpperCase()); // HELLO
console.log(stringQueue.pop().toUpperCase()); // WORLD

// 커스텀 객체 전용 Queue
const myQueue = new Queue<{name: string, age: number}>();
myQueue.push({name: 'Lee', age: 10});
myQueue.push({name: 'Kim', age: 20});

console.log(myQueue.pop()); // { name: 'Lee', age: 10 }
console.log(myQueue.pop()); // { name: 'Kim', age: 20 }
```

- 선언 시점이 아니라 생성 시점에서 Type을 명시하여 하나의 Type만이 아닌 다양한 Type을 사용할 수 있게 한 기법

  > 한번의 선언으로 다양한 타입에 재사용 가능

- `T`는 제네릭을 선언할 때 관용적으로 사용되는 식별자로 타입 파라미터(Type parameter)