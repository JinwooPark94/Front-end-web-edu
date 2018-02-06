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

-  찾고자 하는 대상을 문자열로 지정
-  특별한 의미를 가지는 메타문자(Metacharacter) 또는 기호로 표현 가능

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