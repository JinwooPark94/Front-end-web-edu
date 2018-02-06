# 기본자료형 Number 레퍼(Wrapper) 객체

기본자료형 number를 다룰 때 유용한 프로퍼티와 메소드를 제공하는 레퍼(wrapper) 객체

> 변수 또는 객체의 속성(Property)가 숫자 값을 가지고 있다면 사용 가능

## Number Constructor

Number() 생성자 함수를 통해 생성

> 인자가 숫자로 변환될 수 없다면 NaN 반환

```javascript
var x = new Number(123); // 생성 방법 1
var x = 123; // 생성 방법 2

var y = new Number('123'); // 123
var z = new Number('str'); // NaN
```

## Number Property

Static 프로퍼티로 Number 객체를 생성할 필요없이 `Number.propertyName` 형태로 사용

> 숫자에 관련된 상수

### 1. Number.EPSILON

Number.EPSILON은 JavaScript에서 표현할 수 있는 가장 작은 수

> 중요 ! 컴퓨터에서 표현할 수 있는 다음 수

```javascript
console.log(0.1 + 0.2);        // 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // false!!!

function isEqual(a, b){
  // Math.abs는 절댓값을 반환한다.
  // 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));
```

### 2. Number.MAX_VALUE

자바스크립트에서 사용 가능한 가장 큰 숫자(1.7976931348623157e+308)를 반환

> MAX_VALUE보다 큰 숫자는 `Infinity`

### 3. Number.MIN_VALUE

자바스크립트에서 사용 가능한 가장 작은 숫자(5e-324)를 반환

> MAX_VALUE보다 작은 숫자는 `0`으로 변환



### 4. Number.POSITIVE_INFINITY

양의 무한대 `Infinity`를 반환

### 5. Number.NEGATIVE_INFINITY

음의 무한대 `-Infinity`를 반환

### 6. Number.NaN

숫자가 아님(Not-a-Number)을 나타내는 숫자값

```javascript
console.log('how'); // NaN
console.log(6 * 'string'); // NaN
```

## Number Method

Number Method안에 있는 것들을 형 변환을 안함

### 1. Number.isFinite()

매개변수로 전달된 값이 유한한 값인지 아닌지 검사하여 그 결과를 Boolean으로 반환

```javascript
Number.isFinite(testValue)
// testValue: 검사 대상 값

Number.isFinite('Hi'); // false
Number.isFinite(24); //true
Number.isFinite(null) //false
```

#### Number.isFinite()는 전역 함수 isFinite()와 차이

**전역 함수 isFinite()** : 인수를 숫자로 형 변환하여 검사를 수행

**Number.isFinite()** : 인수를 형 변환을 안함

따라서 Number.isFinite()가 더 엄격하게 검사함

### 2. Number.isInteger()

매개변수로 전달된 값이 정수인지 아닌지 검사하여 그 결과를 Boolean으로 반환

```javascript
Number.isInteger(testValue)
// testValue: 검사 대상 값

Number.isInteger(5-2)   //true
Number.isInteger(0)     //true
Number.isInteger(0.5)   //false
Number.isInteger('123') //false
```

### 3. Number.isNaN()

매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 반환

```javascript
Number.isNaN(testValue)
// testValue: 검사 대상 값

Number.isNaN('str') // false
Number.isNaM(29) // false
Number.isNaN('29') // false
```

### 4. Number.isSafeInteger()

매개변수에 전달된 값이 정수 범위안에 있는지를 확인하여 Boolean으로 반환

```javascript
Number.isSafeInteger(testValue)
// testValue: 검사 대상의 값

Number.isSafeInteger(123) // true
Number.isSafeInteger(0) // true
Number.isSafeInteger(10000000000000001) // false
```

### 5. Number.prototype.toExponential()

대상을 지수 표기법으로 변환하여 문자열로 반환

```javascript
numObj.toExponential([fractionDigits])
// fractionDigits: 0~20 사이의 정수값으로 소숫점 이하의 자릿수를 나타낸다. 옵션으로 생략 가능

var numObj = 77.1234;

console.log(numObj.toExponential());  // logs 7.71234e+1
console.log(numObj.toExponential(4)); // logs 7.7123e+1
console.log(numObj.toExponential(2)); // logs 7.71e+1
```

> e(Exponent) 앞에 있는 숫자에 10의 n승이 곱하는 형식



### 6. Number.prototype.toFixed()

매개변수로 지정된 소숫점자리를 반올림하여 `문자열`로 반환

```javascript
numObj.toFixed([digits])
// digits: 0~20 사이의 정수값으로 소숫점 이하 자릿수를 나타낸다. 기본값은 0이며 옵션으로 생략 가능

var numObj = 12345.6789;

// 소숫점 이하 반올림
console.log(numObj.toFixed());   // '12346'
// 소숫점 이하 1자리수 확보, 나머지 반올림
console.log(numObj.toFixed(1));  // '12345.7'
// 소숫점 이하 2자리수 확보, 나머지 반올림
console.log(numObj.toFixed(2));  // '12345.68'
// 소숫점 이하 6자리수 확보, 나머지 반올림
console.log(numObj.toFixed(6));  // '12345.678900'
```



### 7. Number.prototype.toPrecision()

```javascript
numObj.toPrecision([precision])
// precision: 1~21 사이의 정수값으로 전체 자릿수를 나타낸다. 옵션으로 생략 가능

var numObj = 15345.6789;

// 전체자리수 유효
console.log(numObj.toPrecision());   // '12345.6789'
// 전체 1자리수 유효, 나머지 반올림
console.log(numObj.toPrecision(1));  // '2e+4'
```



### 8. Number.prototype.toString()

숫자를 문자열로 변환

```javascript
numObj.toString([radix])
// radix: 2~36 사이의 정수값으로 진법을 나타내고 옵션으로 생략 가능

var count = 10;
console.log(count.toString());   // '10'
console.log((17).toString());    // '17'

var x = 16;
console.log(x.toString(2));       // '10000'
console.log(x.toString(8));       // '20'
```



### 9. Number.prototype.valueOf()

Number 객체의 기본자료형 값(primitive value)을 반환

```javascript
numObj.valueOf()

var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
```

# 수학 상수와 함수를 위함 built-in 객체

- 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체
- 별도의 생성자가 없는 정적(static) 프로퍼티와 메소드

## Math Property

### Math.PI

PI 값(π ≈ 3.141592653589793)을 반환

```javascript
Math.PI; // 3.141592653589793
```



## Math Method

### 1. Math.abs()

반드시 0 또는 양수이어야하는 절댓값(absolute value)을 반환

```javascript
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('string'); // NaN
Math.abs();         // NaN
```

### 2. Math.round()

숫자를 가장 인접한 정수로 올림/내림

```javascript
ar x;

// Returns the value 20
x = Math.round(20.49);

// Returns the value 21
x = Math.round(20.5);

// Returns the value -20
x = Math.round(-20.5);

// Returns the value -21
x = Math.round(-20.51);
```

### 3. Math.sqrt()

양의 제곱근 반환

```javascript
Math.sqrt(9); // 3
```

### 4. Math.ceil()

지정된 숫자를 자신보다 큰, 가장 가까운 정수로 올림

```javascript
Math.ceil(1.4); // 2
```



### 5. Math.floor()

지정된 숫자를 자신보다 작은, 가장 가까운 정수로 내림

> 소숫점 이하의 값을 제거한 정수

```javascript
Math.floor(1.9); // 1
Math.floor(9.1); // 9
```

### 6. Math.random()

0과 1 사이의 임의의 숫자를 반환

> 0은 포함되지만 1은 포함되지 않음

```javascript
console.log(Math.random()); // 0 ~ 1 미만의 소수 (0.8208720231391746)

// 랜덤 정수 취득
var randomNum = Math.floor((Math.random() * 10) + 1); // 1 ~ 10의 정수
console.log(randomNum);
```

### 7. Math.pow()

첫번째 인수를 밑, 두번째 인수를 지수로하여 거듭제곱함

```javascript
Math.pow(7, 2) // 49
Math.pow(2, 5) // 32
```

### 8. Math.max()

argument 중에서 가장 큰 수를 반환

```javascript
Math.max(1, 2, 3) ;  // 3

var arr = [1, 2, 3];
var max = Math.max.apply(null, arr); // 3
// 여기서 apply의 null은 arr은 this를 어떤 것을 쓸것인지를 나타내고 argument의 리스트를 나타냄
apply도 똑같은 함수이며, apply("this 여부", "배열");
call도 비슷한 함수이며, call("this 여부", 1,2,3);

// ES6
var max = Math.max(...arr); // 3
```

### 9. Math.min()

argument 중에서 가장 작은 수를 반환

```javascript
Math.min(1, 2, 3);  // 1

var arr = [1, 2, 3];
var min = Math.min.apply(null, arr); // 1

// ES6
var min = Math.min(...arr); // 1
```



# 정규표현식

- 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용
- 반복문과 조건문을 사용한 복잡한 코드도 정규표현식을 이용하면 매우 간단하게 표현
- 주석이나 공백을 허용하지 않고 여러가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지않은 문제가 있음

![regular expression](http://poiemaweb.com/img/regular_expression.png)

## 정규표현식을 사용하는 Javascript 메소드

- RegExp.prototype.exec()
- RegExp.prototype.test() : True or False 반환
- String.prototype.match()
- String.prototype.replace()
- String.prototype.search()
- String.prototype.split()

```javascript
var targetStr = 'This is a pen.';
var regexr = /is/ig;

// RegExp 객체의 메소드
console.log(regexr.exec(targetStr)); // [ 'is', index: 2, input: 'This is a pen.' ]
console.log(regexr.test(targetStr)); // true

// String 객체의 메소드
console.log(targetStr.match(regexr)); // [ 'is', 'is' ]
console.log(targetStr.replace(regexr, 'IS')); // ThIS IS a pen.
console.log(targetStr.search(regexr)); // 2
console.log(targetStr.split(regexr));  // [ 'Th', ' ', ' a pen.' ]
```



## Flag(플래그)

플래그의 종류는 아래와 같음

> 검색 대상이 1개 이상이라도 첫번째 매칭만 대상만 검색함

| 플래그  | 의미          | 설명                      |
| ---- | ----------- | ----------------------- |
| i    | Ignore Case | 대소문자를 구별하지 않고 검색한다.     |
| g    | Global      | 문자열 내의 모든 패턴을 검색한다.     |
| m    | Multi Line  | 문자열의 행이 바뀌더라도 검색을 계속한다. |

```javascript
var targetStr = 'Is this all there is?';
var regexr = /is/;

console.log(targetStr.match(regexr)); // [ 'is', index: 5, input: 'Is this all there is?' ]

regexr = /is/ig;

console.log(targetStr.match(regexr)); // [ 'Is', 'is', 'is' ]
```

## 패턴

- 찾고자 하는 대상을 문자열로 지정
- 특별한 의미를 가지는 메타문자(Metacharacter) 또는 기호로 표현 가능

```javascript
var targetStr = 'AA BB Aa Bb';
// 임의의 문자 3개
var regexr = /.../; // 3자리 문자 추출

console.log(targetStr.match(regexr)); // [ 'AA ', index: 0, input: 'AA BB Aa Bb' ]
```

이때 패턴은 반복하지 않는다.

여기서 반복하기 위해서 Flag `g`를 사용하고 Flag `i`를 추가하면 대소문자 구별을 하지 않음 

```javascript
var targetStr = 'AA BB Aa Bb';
// 임의의 한문자를 반복 검색
var regexr = /A/gi;
console.log(targetStr.match(regexr));
// [ 'A', 'A' , 'A', 'a' ]
```

`|`를 사용하면 or의 의미를 가지며 `+`를 사용하면 분해되지 않은 단어 레벨로 추출함

```javascript
// 1번
var targetStr = 'AA AAA BB Aa Bb';
// 'A' 또는 'B'가 한번이상 반복되는 문자열을 반복 검색
var regexr = /A+|B+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'AAA', 'BB', 'A', 'B' ]

// 2번
var targetStr = 'AA BB Aa Bb';
// 'A' 또는 'B'가 한번이상 반복되는 문자열을 반복 검색
var regexr = /[AB]+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'A', 'B' ]

1번과 2번은 같다.
```

`\d`는 숫자를 의미한다. `\D`는 `\d`

- 0-9를 의미함

```javascript
var targetStr = 'AA BB Aa Bb 24,000';
// '0' ~ '9' 또는 ','가 한번이상 반복되는 문자열을 반복 검색
var regexr = /[\d,]+/g;
console.log(targetStr.match(regexr)); // [ '24,000' ]

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) 또는 ','가 한번이상 반복되는 문자열을 반복 검색
var regexr = /[\D,]+/g;
console.log(targetStr.match(regexr)); // [ 'AA BB Aa Bb ', ',' ]
```

`\w`는 알파벳과 숫자를 의미한다. `\W`는 `\w`와 반대로 동작

- 알파벳을 의미함

```javascript
var targetStr = 'AA BB Aa Bb 24,000';
// 알파벳과 숫자 또는 ','가 한번이상 반복되는 문자열을 반복 검색
var regexr = /[\w,]+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'Aa', 'Bb', '24,000' ]

// 알파벳과 숫자가 아닌 문자 또는 ','가 한번이상 반복되는 문자열을 반복 검색
var regexr = /[\W,]+/g;
console.log(targetStr.match(regexr)); // [ ' ', ' ', ' ', ' ', ',' ]
```

**더 많은 내용은 [[Regexr.com]](https://regexr.com/)을 참고** 

# **Array**

## 배열

### 배열의 생성

> 우리는 배열(array)를 이용하여 HTML을 건든다. 

- 배열 리터럴

  0개 이상의 값을 쉼표로 구분하여 대괄호([])로 묶는다. 첫번째 값은 인덱스 ‘0’으로 읽을 수 있다.

  배열은 순서가 의미가 '있다' - index

  ```javascript
  var emptyArr = [];

  var arr = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
  ]; // array의 '요소'들

  console.log(emptyArr[1]); // undefined
  console.log(arr[1]);      // 'one'
  console.log(emptyArr.length); // 0
  console.log(arr.length);  // 10
  console.log(typeof arr);  // object
  ```

### 배열요소의 추가와 삭제

- 배열 요소의 추가

  = 순서에 맞게 값을 할당할 필요는 없고 필요한 인덱스 위치에 값을 할당한다. 값이 할당되지 않은 인덱스 위치의 요소의 값은 undefined가 되고 배열의 길이(length)는 최종 인덱스 위치의 기준으로 산정된다.

  ```javascript
  var arr = [];
  console.log(arr[0]); // undefined

  arr[0] = 'one';
  arr[3] = 'three';
  arr[7] = 'seven';

  console.log(arr); // ["one", undefined × 2, "three", undefined × 3, "seven"]
  ```


- 배열 요소의 삭제

  = 해당 요소를 완전히 삭제하기 위해서는 Array.prototype.splice() 메소드를 사용한다.

  ```javascript
  var numbersArr = ['zero', 'one', 'two', 'three'];

  // 요소 일부를 삭제 (시작 인덱스, 삭제할 요소수)
  numbersArr.splice(2, 1); // ['zero', 'one', 'three']
  console.log(numbersArr);
  ```

### 배열 요소의 열거

배열은 객체이기 때문에 프로퍼티를 가질 수 있다. for in 문을 사용하면 불필요한 프로퍼티까지 출력될 수 있고 요소들의 순서를 보장하지 않으므로 배열을 열거하는데 적합하지 않다.

따라서 **배열 요소의 열거에는 for 문을 사용**하는 것이 좋다.

### Array Property

- **Array.length : 요소의 갯수(배열의 길이)**를 나타낸다. Array.length는 양의 정수이며 2^32미만.

### Array Method

- **Array.isArray()** : 객체가 배열이면 true, 배열이 아니면 false를 반환.

- **Array.prototype.indexOf()** 

  : indexOf 메소드의 인자로 지정된 요소를 배열에서 검색하여 인덱스를 반환.

    중복되는 요소가 있는 경우 첫번째 인덱스만 반환. 

    만일 해당하는 요소가 없는 경우, -1을 반환

- **Array.prototype.concat(item…)**

  : concat 메소드의 인수로 넘어온 값들(배열 또는 값)을 **자신의 복사본에 요소로 추가하고 반환**한다. 이때 **원본 배열은 변경되지 않는다**.

  ​

- **Array.prototype.join()**

  : 배열 요소 전체를 **연결**하여 생성한 **문자열을 반환**한다. 기본구분자는 ‘,’이다.

  ```javascript
  str = arr.join([separator = ','])
  ---------------------------------

  var arr = ['a', 'b', 'c', 'd'];

  var x = arr.join();
  console.log(x);  // 'a,b,c,d'; //자동으로 ,(comma)로 구문

  var y = arr.join('');
  console.log(y);  // 'abcd' // 공백추가는 ' ' (가운데 스페이스)

  var z = arr.join(':');
  console.log(z);  // 'a:b:c:d'
  ```





