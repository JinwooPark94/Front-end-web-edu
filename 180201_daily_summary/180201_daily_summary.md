# 객체(Object)란 ?

나 자신(Subject)이 아닌 모든 인식가능한 것들을 객체라고 하며 기본자료형을 제외한 나머지 데이터와 그 데이터가 관련되는 `동작(절차, 방법, 기능)`을 모두 포함하는 것

> 이름과 값의 쌍인 속성(Property)들을 포함하는 컨테이너

## 속성(Property) 란?

객체안에서 이름과 값으로 구성됨

- 이름 : 빈 문자열을 포함하는 문자열과 숫자

  > 숫자를 쓰면 내부적으로 문자열로 바꿈 
  >
  > 예) 숫자 1을 썼다고 가정했을때 문자열 1로 바꿈

- 값 : `undefined`를 제외한 모든 값


```javascript
var container {
  name  : 'Jinwoo`s container';
  // 이름 : 값
}
```




## Method 란?

객체안에서 속성(Property)값에 `동작(절차, 방법 기능)`을 갖고 있는 것

> 결론 : 객체 안에 있는 함수

```javascript
var person = {
  name : 'Jin', // Property
  age : '100', // Property
  speak : function(){}// Method
  // 이름 : 값(함수: 동작-> 절차, 방법, 기능)
}
```



# 객체 생성 방법

## 1. 객체 리터럴

중괄호를 시작으로 생성하며 {}안에 아무 것도 입력하지 않으면 빈 객체로 생성되고 입력시  Property 이름 : 프로퍼티 값을 기술하여 생성가능

```javascript
var emptyObject = {}; // 빈 객체 생성

var person = {
 name : 'Jin', // Property
  age : '100', // Property
  speak : function(){} // Method
};
```



## 2. Object() 생성자 함수

New 연산자와 Object() 생성자 함수를 이용하여 빈 객체를 생성 가능하고 이후 객체 안에 Property를 추가를 하는 방식

```javascript
var person = new Object(); // 빈 객체 생성

person.name = 'Jin', // person의 객체에 name이 Jin인 Property를 추가
person.age = '100',
person.speak = functioon(){
	console.log("안녕 난 " + person.name + "이야");
}
```

> 브라우저안에 있는 자바스크립트 엔진은 우리(개발자?)를 위해서 내장 함수인 Object() 생성자 함수를 통해 단순화 시킨 위에 1번 객체 리터널 방식의 축약법임



## 3. 생성자 함수

우리가 원하는 객체를 만들기 위해서 함수를 정의 할 수 있는 방식

> Java에서의 Class 방식이며 중복을 제거하기 위해 만들어진 함수 

- 일반적으로 대문자로 시작 (함수 구별하여 기술 혼란을 방지하기 위해서)
- 속성(Property)값만 다른 여러개의 객체를 생성할때 사용

```javascript
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
  this.speak = functioon(){
	console.log("안녕 난 " + this.name + "이야");
  };
}

// 인스턴스의 생성
var person1 = new Person('Park', 'male');
var person2 = new Person('Woo', 'female');

// 여기서 person1이 실행되면 Person이라는 함수에 'Park', 'male'이라는 매개 변수를 가지고 실행하여 함수안에 this.name 값에 'Park'이 들어가고 this.gender에 'male' 이라는 값이 들어가며 결국 person1의 객체의 name 값은 'Park', gender 값은 'male'이 들어감
```



## 어떤 상황때 리터널 방식과 생성자 방식을 사용할까?

|     리터널 방식     |     생성자 방식     |
| :------------: | :------------: |
| 객체를 하나만 만들때 유리 | 객체를 여러개 만들때 유리 |

강사님 曰 : 둘중에 아무거나 하나 만들어보고 삽질을 통해 얻자. 사용방법을 터득하면 자신의 레벨이 한단계 올라감



---



## 객체 프로프티 접근

### 프로퍼티 이름

기본적으로 `문자열`을 포함하지만 문자열 이외에도 `숫자`를 포함하는데 숫자는 암묵적 형변환으로 인해 문자열로 바뀜

- Property 이름의 문자열이므로 따음표('', "")를 사용

  - 사용 가능한 유효한 이름일 경우 따음표 생략 가능

    > 유효한 이름이 아닌 경우 : 'first-name' (캐밥표기법)

- 예약어는 사용하면 안됨




### 프로퍼티 값 읽기

- 마침표(.) 표기법
- 대괄호([]) 표기법
   -  프로퍼티 이름과 마찬가지로 유효한 이름이 아닌 캐밥 표기법으로 될때 사용 

      > 예) person['first-name']

```javascript
var person = {
  'first-name': 'jinwoo',
  'last-name': 'Park',
  1: 10
};

console.log(person);

console.log(person.first-name);    // NaN: undefined-undefined
console.log(person[first-name]);   // ReferenceError: first is not defined
console.log(person['first-name']); // 'jinwoo'

console.log(person['1']); // 10
console.log(person[1]);   // 10 정수형인 1을 내부적으로 문자열 1로 바꾸므로
console.log(person.1);    // SyntaxError
```

> 객체에 존재하지 않는 속성(Property)를 참조하면 `undefined`를 반환

### 프로퍼티 값 변경

객체로 접근하여 프로퍼티 값을 새롭게 변경

```javascript
var person = {
  firstName: 'jinwoo',
  lastName: 'Park'
};

person.firstName = 'haha';
console.log(person.firstName); // 'haha'
```



### 프로퍼티 동적 생성

빈 객체를 만든 상태에서 프로퍼티를 추가할 경우 사용

```javascript
var person = {
  firstName: 'jinwoo',
  lastName: 'Park'
};

person.age = '20';
console.log(person.age); // '20'
```

> 코드에 사용하지 않는 것이 좋음

### 프로퍼티 삭제

`delete`라는 명령어를 사용하여 삭제

```javascript
var person = {
  firstName: 'jinwoo',
  lastName: 'Park',
  age : 20
};

delete person.age;
console.log(person.age); // undefined
```

> 코드에 사용하지 않는 것이 좋음



###  for-in 문

- 객체의 문자열 키를 순회하기 위한 문법
- 배열에는 사용하지 않는 것이 좋음
  - 객체는 속성(Property)의 순서가 보장 X
  - 배열 요소들만을 순회 X 

> 위의 단점을 극복하기 위해 ES6에서 "for-of"문이 추가



## Pass-by-reference (참조형)

Object 타입은 mutable 방식으로 객체형 또는 참조형이라고 하며 속성(Property)를 변경 또는 추가, 삭제가 가능하므로 변경가능한 값

> Object의 값은 동적으로 계속 바뀔 수 있으므로 메모리의 Heap 영역에 저장

## Pass-by-value 

기본자료형은 immutable 방식이며, 기본자료형의 값은 값으로 전달되기 때문에 값이 한번 정해지면 변경 불가능함

> 기본자료형 값은 정적으로 바뀔 수가 없으므로 고정된 메모리의 Stack 영역에 저장 



## 인스턴스의 정의 

new 연산자와 생성자 함수를 통해 만든 객체 



# 객체 분류

![object](http://poiemaweb.com/img/object.png)

**Host Object( 생성자 )** : 사용자가 생성된 객체

**Built-in Object(내장 객체)** : 웹페이지 등을 표현 하기위해서

**Standard Built-in Object(표준 빌드인 객체)**  :  프로그램 전체 영역에 공통적으로 필요한 기능을 개발자 각자가 일일이 작성하는 것을 줄이기 위해 제공

**BOM (Browser Object Model)** : browser와 대화를 하기위해서

**DOM (Document Object Model)** :  동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공



## 순수 함수와 비순수 함수의 차이 

### 순수 함수

SideEffect가 일어나지 않도록 방지하는 함수

### 비순수 함수

SideEffect가 일어날 수 있는 함수는 비순수함수  



---

# 함수란?

- 어떤 작업을 수행할때 필요한 일련의 구문들을 그룹화하기 위한 개념

## 함수를 생성하는 방식

### 1. 함수 선언식

```javascript
function testFunction(number) {
  
  // 방어코드 작성 (Type Check)
  
  return number * number;
}
```

- 함수명 :  함수를 구별할 수 있는 식별자 역할 예) square
- 매개변수 목록 : 함수명 옆에 괄호로 구별하며 안에 콤마(,)로 분리함 예) number
- 함수 몸체 : 중괄호({})로 감싸며 `return` 문으로 결과를 반환

> 만약 return을 생략하면 return 값을 'undefined'를 결과값으로 반환

### 2. 함수 표현식

함수 선언식과 마찬가지로 동일하게 함수 리터널 방식으로 정의

```javascript
var test = function(number) {
  return number * number;
};
```

#### 일급 객체란 ?

값처럼 사용할 수 있는 것

- 무명 리터럴(무명 함수)로 표현이 가능
- 변수나 자료구조(객체, 배열)에 저장 가능
- 함수의 파라미터(매개 변수)로 전달 가능 
- 반환값으로 사용 가능


내부적으로 함수 표현식으로 바꿈

#### 재귀함수란 ?

자기 함수를 자신이 호출하는 것 

### 3. Function() 생성자 함수

함수 표현식과 함수 선언식이 결국 리터널 방식으로 정의되는데 결국 Function() 생성자 함수로 함수를 생성하는 것을 단순화 시킨 것

```javascript
var test = new Function('number', 'return number * number');
console.log(square(10)); // 100
```



## 호이스팅(Hoisting)

Javascript 호이스팅은 총 3단계로 나눌 수 있음

1. **선언단계** : 코드를 실행하기 전 전체적으로 브라우저가 확인을 한 후 변수나 함수 등을 실행 컨택스트안에 넣음
2. **초기화단계** : 모든 메모리에 'undefined'를 넣음
3. **할당단계** : 값에 맞게 포인터를 함



## 변수 호이스팅(Variable Hoisting)

변수 호이스팅은 위의 단계 중 2단계인 초기화단계까지 실행되며 변수가 선언이 안되었더라도 있다고 인식하며 'undefiend'라는 값을 가지고 있음

## 함수 호이스팅(Function Hoisting)

함수 호이스팅은 스크립트가 로딩되는 시점 초기화를 하고 3단계 할당단계인 VO(Variable object)에 저장하여 어디에서든 실행도 할 수 있지만 함수 선언문에서만 유효함 

## 매개변수(parameter, 인자)

함수의 작업을 위해 추가적인 정보가 필요한 경우 매개변수를 지정하여 사용

### 매개 변수 vs 인자

```javascript
// 매개 변수 - 인수
var foo = function (p1, p2) {
  console.log(p1, p2);
};

// 인자
foo(1); // 1 undefined
```



## Call-by-value

기본자료형은 값에 의한 호출로 동작하며 함수를 호출하여 매개변수를 변경해도 값은 변경되지 않음

```javascript
function foo(primitive) {
  primitive += 1;
  return primitive;
}

var x = 0;

console.log(foo(x)); // 1
console.log(x);      // 0
```



## Call-by-value

객체형(참조형)은 참조에 의한 호출로 동작하며 함수를 호출하여 매개변수를 변경하면 값이 변경됨

```javascript
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
  obj.gender = 'female';
}

var num = 100;
var obj = {
  name: 'Lee',
  gender: 'male'
};

console.log(num); // 100
console.log(obj); // Object {name: 'Lee', gender: 'male'}

changeVal(num, obj);

console.log(num); // 100
console.log(obj); // Object {name: 'Kim', gender: 'female'}
```



## arguments 프로퍼티

함수 호출시 함수 값에 arguments를 자동 생성하고 인수들의 정보를 담고 있는 순회가능한 유사배열 객체

> 유사배열 객체 : 배열처럼 움직이는 객체

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



## caller 프로퍼티

자신이 호출한 함수를 의미



## length 프로퍼티

함수에서 매개변수의 개수를 의미



## name 프로퍼티

기명 함수 또는 익명 함수에 사용되며 



## proto 프로퍼티

함수 객체를 포함한 모든 객체가 가지고 있는 프로퍼티

> 자신의 부모역할을 할 프로토타입 객체를 가리킴



### 참고 : http://poiemaweb.com



