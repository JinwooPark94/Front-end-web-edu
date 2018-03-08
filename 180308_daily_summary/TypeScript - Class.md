# Class

- ES6의 클래스와 매우 유사하지만 몇 가지 TypeScript 고유 기능이 존재

## 1. Class 정의

ES6에서는 

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

- public

  모든 곳에 공개

- protected

  자식에게만 공개

- private

  자식에게도 안보임

  외부에서 보이면 모두가 사용가능함

공개(public)한 것은 모든 사용자들이 알아야 하므로 기본적으로 private를 사용함 그런데 자식들에게도 공개해야 한다면 protected를 사용



## 3. 생성자 파라미터에 접근 제한자 선언

## 4. readonly 키워드

참조만 가능함

## 5. Static 키워드

## 6. 추상 클래스 (Abstract class)

