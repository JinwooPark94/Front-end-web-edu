#  기본자료형 Number 레퍼(Wrapper) 객체

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

>  e(Exponent) 앞에 있는 숫자에 10의 n승이 곱하는 형식



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



### 참고 : http://poiemaweb.com