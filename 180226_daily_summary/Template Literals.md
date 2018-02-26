# Template Literals

ES5에서의 템플릿 리터럴은 작은따옴표와 큰따옴표 밖에 사용하지 못하였지만 ES6에서는 백틱(backtic) 문자 `를 사용

```javascript
const template = `템플릿 리터럴은 '작은따옴표(single quotes)'과 "큰따옴표(double quotes)"를 혼용할 수 있다.`;

console.log(template);
```

ES5에서는 일반적인 string을 `+`로 이어서 사용하는 경우 백슬래쉬`\` 를 사용해야 하지만 ES6에서 백틱 문자를 사용하면 더 간단해짐

```javascript
const template = `<ul class="nav-items">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>`;

console.log(template);
```

## 1. String Interpolation(문자열 삽입)

템플릿 리터널은 `+` 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공

```javascript
const first = 'Jinwoo';
const last = 'Park';

// 기존의 ES5 문자열 연결
console.log('My name is ' + first + ' ' + last + '.');

// ES6 String Interpolation (문자열 삽입)
console.log(`My name is ${first} ${last}.`); // My name is Jinwoo Park.
```

 **위와 같이 ${first}와 #{last}는 템플릿 대입문이라고 하는데 문자열뿐만 아니라 Javascript 표현식을 사용 가능**