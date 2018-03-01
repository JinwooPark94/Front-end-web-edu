# ECMAScript6 - Class

자바스크립트 

## 1. 클래스 정의(Class Definition)

- 첫 문자는 대문자
- `constructor`를 항상 가지고 있어야함
- 클래스 안에는 메서드만 있어야함
- 프로퍼티는 변수에 선언하여 사용
- 결과값은 항상 선언문 뒤에서 사용



## 3. constructor

- 꼭 하나를 가져야함
- 생략이 가능하며 `constructor() {}`가 있는 것 처럼 동작

모든 프로퍼티들은 

## 4. 멤버 변수

- `Class Body`안에서는 변수 선언이 불가능하며, `constructor`안에 멤버 변수의 선언과 초기화가 가능
- `constructor` 내부에서 선언한 멤버 변수 name은 `this`에 바인딩 되어있으며 언제나 `public`이고 외부에서 참조 가능함

## 5. 호이스팅 (Hoisting)

- 선언문 이전에 참조하면 `ReferenceError: Foo is not defined`를 발생

## 6. getter, setter

- `getter`는 항상 return 값이 있어야 함
- `setter`는 값을 전달해줘야 하는데 직접 값을 할당함
- `getter`, `setter`는 프로퍼티처럼 사용

## 7. 정적 메소드 (Static method)

- ​

## 8. 클래스 상속 (Class Inheritance)

- 부모의 것은 자식이 가져다가 쓸 수 있지만, 자식의 것은 부모가 가져다 쓸 수 없음
- 무조건 클래스 정의가 필요함
- 상속을 할 때 `extends`를 사용하며 자식에서 부모를 부를 때 `super`라 부름
- `super`는 상속받는 객체를 가리키기도 하고 `constructor`이기도 함



### 8.2 super 키워드

- parent의 `constructor`를 가리킴
- ​