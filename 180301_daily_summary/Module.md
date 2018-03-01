# ECMAScript6 - Module

- 애플리케이션을 구성하는 개별적 요소로서 구현된 세부 사항을 캡슐화하고 공개가 필요한 API를 외부에 노출하여 다른 코드에서 로드하여 사용할 수 있도록 작성된 재사용 가능한 코드 조각

- 파일 단위로 분리되어 있으며 애플리케이션은 필요에 따라 명시적으로 모듈을 로드

- Javascript 모듈화는 크게 `CommonJS` 진영과 `AMD `진영으로 나뉨

- ES6에서 `Client-side Javascript`에서 동작하는 모듈 기능을 추하하였지만 대부분의 브라우저가 ES6의 모듈을 지원 안함

  > 이러한 문제를 해결할 수 있는 모듈 로더 및 번들러
  >
  > - SystemJS, RequireJS (모듈 로더)
  > - Webpack (모듈 번들러)

## 1. export

- 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 때 사용
- 선언된 변수, 함수, 클래스 모두 `export` 가능

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

// 객체화하여 한번에 export를 함
export { pi, square, Person };
```

## 2. import

불러오는 방식이 3가지가 있음

- 각각 하나씩 불러오기

```javascript
// main.js
import { pi, square, Person } from './lib';

console.log(pi);         // 3.141592653589793
console.log(square(10)); // 100
console.log(new Person('Lee')); // Person { name: 'Lee' }
```

- 하나의 이름으로 한꺼번에 불러오기

```javascript
// main.js
import * as lib from './lib';

console.log(lib.pi);         // 3.141592653589793
console.log(lib.square(10)); // 100
console.log(new lib.Person('Lee')); // Person { name: 'Lee' }
```

- 이름을 변경하여 import하여 불러오기

```javascript
// main.js
import { pi as PI, square as sq, Person as P } from './lib';

console.log(PI);    // 3.141592653589793
console.log(sq(2)); // 4
console.log(new P('Kim')); // Person { name: 'Kim' }
```