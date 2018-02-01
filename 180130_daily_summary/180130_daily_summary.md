# **변수 (Variable)**
값을 저장 참조하기 위해 사용하며 메모리 상의 주소를 기억하는 저장소
> 메모리 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자
- 저장단위 : byte (8bit : 영문 대소문자, 숫자 특수문자를 포함할 수 있는 단위)

---

# **자료형(Data Type)**
문자열, 숫자, 불리언(boolean), 객체 등 여러 종류의 데이터를 식별하는 분류
> 자료형이 있는 이유 : 메모리에 할당하는 크기를 정하기 위해
## **기본 자료형 : 변경 불가능한 값(immutable value)이며 값으로 접근(pass-by-value)**
 - Boolean
 - null
 - undifined
 - Number
 - String
 - Symbol 

### **Boolean : true or false**
### **null : 변수가 가르키고 있는 참조를 무효화함(null은 "Null","NULL"과 다름)**
### **undifined : 아직 값이 할당되지 않아서  초기화 해놓은 곳**
### **Number : 정수와 실수, infinite(+,-), NaN(Not-a-Number)**
### **String : 문자열 (유사배열)**
### **Symbol : 객체(key,value)명이 중복되지않은 값을 만드는 것 (ECMAScript 6에서 추가)**

예)

	var num;  // 1
	num = 4;  // 2

1. 변수명 num이라는 변수를 생성하는데 값을 정의하지 않았으므로 undifined에 해당하는 메모리에 공간을 확보하고 위치를 기억
2. 4라는 값에 대한 메모리를 새로 확보하고 num이 가르키던 undifined에서 4로 가르킴
> 여기서 undifined는 가르키는 포인터가 없으므로 Garbage Collector가 자동적으로 메모리에 확보되있던 공간을 삭제해줌

## **객체형 : 변경 가능한 값(mutable value), 참조로 접근(Pass-by-reference)**
 - Object

### **Object : 배열, 함수, 정규표현식 등 기본자료형을 제외한 나머지들을 포함**

예) 

	var user1 = {
	  name: 'Park',
	  number: '13'
	  }
	}; // 1


    var user2 = user1; // 2

    user2.name = 'John'; // 3

    console.log(user1.name); // 4
    console.log(user2.name); // 4

1. 객체 user1을 생성하고 user1안에 있는 값들을 메모리안에 넣음
2. user1의 값을 user2에 넣는게 아니라 user2는 user1을 포인터로 가르킴
3. user2.name에 'John'이라는 값을 넣으면 기존의 기본자료형 방식과는 다르게 따로 공간을 생성하지 않고 user1에 있던 공간에서 덮어쓰기 형식으로 수정함
4. 결국 user1.name과 user2.name의 값은 같은 포인터를 가르키기때문에 John 이라는 값을 출력함 


## **기본 자료형과 객체형의 차이점**
- 데이터를 변경할 수 없음 
- 값으로 전달

## **표기법**
낙타등표기법(camelcase)   
- Ex) nameName

스네이크표기법(snakecase)   
- Ex) name_name

케밥표기법(kebabcase)   
- Ex) name-name

## **메모리**
1. CODE
2. DATA : 전역변수를 저장
3. STACK : inmutable
4. HEAP(참조형 변수) 영역 : mutable

---

# **var 키워드로 선언된 변수의 문제점**
## **중복 선언**
- 변수는 중복 선언이 가능

  var score = 1;
    console.log(score); // 1

    var score = 100;
    console.log(score); // 100

## **var 키워드 생략 가능**
- 변수 선언시 var 키워드 생략 가능
  > 변수는 전역 변수가 됨

## **동적 타이핑**
- 같은 변수에 여러 data type의 값을 대입할 수 있음

## **변수 호이스팅(Variable Hoisting)**
- 변수를 선언 이전에 참조 가능

## **Function-level scope**
- 전역 변수의 남발

---
# **블록 구문**
함수안에서의 블록 구문에만 지역변수를 인정

# **비교 연산자**
(==, ===)(!=, !==)의 차이 : "==, !="는 값만 확인하고 "===, !=="는 값과 타입을 확인함

# **삼항 연산자**
조건 ? 조건이 ture일때 반환할 값 : 조건이 false일때 반환할 값 
> 2개 이상의 조건이 들어갈시 가독성 때문에 if문을 쓰는것이 좋음

	var condition = true;
	var result = condition ? 'true' : 'false';
	console.log(result); // 'true'

# **단축 평가**

	function foo (str) {
	  str = str || '';
	  // do somethig with str
	  console.log(str.length);
  	}

> 매개변수 초기화

# **!!**
피연산자를 boolean값으로 변환하는 것



### 암묵적 강제 형 변환

Javascript는 문맥을 고려하여 자료형을 암묵적으로 강제 변환 함

```javascript
console.log ('1' > 0);     // true

// 위의 내용은 문자열 1과 정수 0을 비교하면 문자열 1을 암묵 적 강제형 변환으로 숫자 1로 변환하여 숫자 1과 숫자 0을 비교하여 숫자 1과 숫자 0의 값보다 크므로 true라는 값을 출력 
```

> 하지만 암묵적 강제 형 변환은 안좋은 방법 명확하게 자료형을 비교하는 것이 좋음



### 암묵적 강제 형 변환의 과정

뒤에있는 값을 컨버젼을 숫자형으로 하게 되는데 비트 연산을 하여 

"+" 단항 연산자는 대부분의 값을 숫자형으로 변환 가능

```javascript
console.log(+10);
// 10이라는 값을 양수로 바꾸어 줌 (양수화)
```

> undifined와 NaN은 정수형으로 못 바꿈



### String -> number로 바꾸는 방법

```javascript
val = +val; // "+": 단항 연산자(unary operator)
// val = val * 1;
// val = parseInt(val);
// val = Number(val);
console.log(typeof val); // number
```

> 1번째와 3번째를 추천

### Number -> String으로 바꾸는 방법

```javascript
val = val + '';
// val = String(val);
// val = val.toString();
console.log(typeof val); // string
```

> 1번째와 3번째를 추천



