# TypeScript - Typing

## 1. Type 선언

- 변수명 뒤에 Type을 선언

```typescript
let foo: string = 'hello';

let boo: number = 'haha'; // error : 타입이 number인데 string값이 들어가서 에러가 남
```

- 함수의 매개변수와 함수에 Type 선언 가능

```typescript
// 함수선언식
function multiply1(x: number, y: number): number {
  return x * y;
}

// 함수표현식
const multiply2 = (x: number, y: number): number => x * y;
```

### 1.1 새롭게 추가된 Type의 선언

### 1. Object

```typescript
const obj: object = {};
```
### 2. Array

```typescript
let list1: any[] = [1, 'two', true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1, 2, 3]; // Generic array type
```
### 3. Tuple

고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현

```typescript
let x: [string, number];

x = ['hello', 10];
```
### 4. enum

숫자값 잡합에 이름을 지정

```typescript
enum Color1 {Red, Green, Blue};
let c1: Color1 = Color1.Green;

console.log(c1); // 1

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

console.log(c2); // 2
```
### 5. any

모든 Type의 선언이 가능

```javascript
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; 
```
### 6. void

일반적으로 함수에서 반환값이 없을 경우 사용

```javascript
function warnUser(): void {
  console.log("This is my warning message");
}
```
### 7. never

절대 발생하지 않는 값

```typescript
function infiniteLoop(): never {
  while (true) {}
}
```
## 2. 정적 타이핑 (Static Typing)

- 변수를 초기화 시키지 않으면 `any` Type
- TypeScript은 정적 타이핑을 지원하며 Type을 선언 후 잘못된 Type의 값이 할당되면 컴파일러는 감지 후 에러 발생


### 2.1 일반적인 정적 타이핑

```typescript
let foo: string,   // 문자열 타입
    bar: number,   // 숫자 타입
    baz: boolean,  // 불리언 타입
    boo;           // any 타입

foo = 'Hello';
bar = 123;
baz = '123';       // boolean 값에 string 값이 들어갔으므로 error
```

### 2.2 함수 매개변수와 리턴값에도 사용

```typescript
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(10, 10)); // 20
console.log(add('10', '10'));
// error TS2345: Argument of type '"10"' is not assignable to parameter of type 'number'.
```

### 2.3 결론

**정적 타이핑은  대규모 프로젝트에 매우 적합**

> TypeScrip의 장점
>
> - 코드 가독성
> - 예측성
> - 안정성의 향상