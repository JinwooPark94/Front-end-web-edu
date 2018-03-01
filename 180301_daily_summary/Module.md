# ECMAScript6 - Module

A에 있는 a라는 변수를 선언을 했으면 B에서 a라는 변수를 새로 선언해도 변수와 달라야함



## 1. export



```javascript
// lib.js
const pi = Math.PI;

function square(x) {
  return x * x;
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

// 객체화하여 export를 함
export { pi, square, Person };
```



## 2. import

불러오는 방식이 3가지가 있음

- 각각 하나씩 불러오기
- 하나의 이름으로 한꺼번에 불러오기
- 이름을 변경하여 import하여 불러오기