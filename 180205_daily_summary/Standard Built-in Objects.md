# 전역 객체(Global Object)

모든 객체의 유일한 최상위 객체를 의미함

- new 연산자를 이용하여 새롭게 생성 불가
- 전역 스코프를 갖게 됨
- 전역 객체의 자식 객체를 사용할 때 전역 객체의 기술은 생략 가능

| Browser  | Server(Node.js) |
| :------: | :-------------: |
| `window` |    `global`     |

```javascript
// window.alert('Hello world!');;
alert('Hello world!');
```

## 전역 프로퍼티(Global property)

전역 객체의 프로퍼티를 의미하고 애플리케이션 전역에서 사용하는 값들을 나타내기 위해 사용

### 1. Infinity

양/음의 무한대를 나타내는 숫자값 Infinity를 가짐

```javascript
console.log(3/0);  // Infinity
console.log(-3/0); // -Infinity
```

### 2. NaN

숫자가 아님을 나타내는 숫자값 NaN을 가짐

```javascript
console.log(1 * 'String'); // NaN
console.log(typeof NaN);   // number
```

### 3. undefined

기본자료형 undefined를 값으로 가짐

```javascript
var a;
console.log(a); // undefined
console.log(typeof undefined); // undefined
```

## 전역 함수(Global function)

애플리케이션 전역에서 호출할 수 있는 함수로서 전역 객체의 메소드

### 1. eval()

전달된 문자열 구문 또는 표현식을 평가 또는 실행함

> 사용자로 부터 입력받은 콘텐츠를 실행하는 것은 보안에 매우 취약하므로 사용을 가급적 금지 하는 것이 좋음

```javascript
eval(string)
// string: code 또는 표현식을 나타내는 문자열. 표현식은 존재하는 객체들의 프로퍼티들과 변수들을 포함할 수 있음

var x = 7,
    y = 4;
console.log(eval('x * y')); // 28
```

### 2. isFinite()

매개변수에 전달된 값이 유한수인지 검사하여 그 결과를 Boolean으로 반환

```javascript
isFinite(testValue)
// testValue: 검사 대상 값

console.log(isFinite(3));         // true
console.log(isFinite('Hello'));   // false
```

### 3. isNaN()

매개변수에 전달된 값이 NaN인지 검사하여 그 결과를 Boolean으로 반환

> 값이 숫자가 아닌 경우, 숫자로 변환

```javascript
isNaN(testValue)
// testValue: 검사 대상 값

isNaN(NaN)       // true
isNaN(37)        // false
isNaN('park')    // true: 'park' -> NaN
isNaN('')        // false: '' -> 0
```

### 4. parseFloat()

매개변수에 전달된 문자열을 부동소수점 숫자로 변환하여 반환

> 첫 숫자만  반환되고 숫자로 변환할 수 없으면 NaN을 반환

```javascript
parseFloat(string)
// string: 변환 대상 문자열

parseFloat('3.14');     // 3.14
parseFloat('10.00');    // 10
parseFloat('34 45 66'); // 34
```

###  5. parseInt()

매개변수에 전달된 문자열을 정수형 숫자로 변환하여 반환

> 첫 숫자만 반환되고 숫자로 변환할 수 없으면 NaN을 반환

```javascript
parseInt(string);

parseInt('23');       // 23
parseInt('10.33');    // 10
parseInt('10 20 30'); // 30
parseInt(' 60 ');     // 60
```

### 6. encodeURI() / decodeURI()

encodeURI() : 매개변수로 전달된 URI를 인코딩

decodeURI() : 매개변수로 전달된 URI을 디코딩

![uri](http://cfile26.uf.tistory.com/image/255D3F4755AF337B1BEB88)

> 네트워크를 통해 정보를 공유할 때 모든 시스템에서 읽을 수 있도록 ASCII Charactor-set으로 변환

```javascript
encodeURI(URI)
// URI: 완전한 URI
decodeURI(encodedURI)
// encodedURI: 인코딩된 완전한 URI

var uri = 'http://example.com?id=sdasq1123&name=박진우';
var enc = encodeURI(uri);
var dec = decodeURI(enc);

console.log(enc);
// http://example.com?id=sdasq1123&name=%CE%3D%C4%EC%9B%85%EB%AA%A8
console.log(dec);
// http://example.com?id=sdasq1123&name=박진우
```

### 7. encodeURIComponent() / decodeURIComponent()

encodeURIComponent() : 매개변수로 전달된 URI component(구성 요소)를 인코딩

decodeURIComponent() : 매개변수로 전달된 URI component(구성 요소)를 디코딩

```javascript
encodeURIComponent(URI)
// URI: URI component(구성 요소)
decodeURIComponent(encodedURI)
// encodedURI: 인코딩된 URI component(구성 요소)

var uriShort = 'id=sdasq1123&name=박진우';

enc = encodeURIComponent(uriShort);
dec = decodeURIComponent(enc);

console.log(enc);
// id=sdasq1123&name=%CE%3D%C4%EC%9B%85%EB%AA%A8
console.log(dec);
// id=sdasq1123&name=박진우
```