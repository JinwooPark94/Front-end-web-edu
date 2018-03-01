# ECMAScript6 - Promise

- 비동기 처리를 할 때 무조건 성공 했는지 아니면 실패 했는지의 정보를 가지고 있음
- 콜백 패턴의 단점을 보안하기 위해 ES6에 추가됨

## 1. Callback의 단점

### 1.1 Callback Hell

비동기 처리 모델은 요청을 병렬로 처리하여 다른 요청이 blocking(작업 중단)되는 않는 장점이 있지만 단점도 가지고 있는데 그것은 여러개의 콜백함수가 순서를 보장하기 위해 nesting되어 복잡도가 높아지는 현상

### 1.2 에러 처리의 한계

비동기 처리의 콜백함수는 호출시 콜백함수가 갖는 비동기 함수가 아니기 때문에 try, catch문에서 catch되지 않고 프로세스가 종료됨 

```javascript
try {
  setTimeout(() => { throw 'Error!'; }, 1000);
} catch (e) {
  console.log('에러를 캐치하지 못한다..');
  console.log(e);
}
```

## 2. Promise의 상태

- 비동기 처리가 성공(fulfilled)하였는지 또는 실패(rejected)하였는지 등의 상태(state) 정보

| 상태            | 의미                        | 구현                                  |
| ------------- | ------------------------- | ----------------------------------- |
| pending       | 비동기 처리가 아직 수행되지 않은 상태     | resolve 또는 reject 함수가 아직 호출되지 않은 상태 |
| **fulfilled** | 비동기 처리가 수행된 상태 (성공)       | resolve 함수가 호출된 상태                  |
| **rejected**  | 비동기 처리가 수행된 상태 (실패)       | reject 함수가 호출된 상태                   |
| settled       | 비동기 처리가 수행된 상태 (성공 또는 실패) | resolve 또는 reject 함수가 호출된 상태        |

## 3. Promise의 생성

- `Promise` 생성자를 통해 인스턴스화


- `Promise`생성시 `resolve`, `reject` 의 매개변수를 받음

```javascript
var promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행한다.

  if (/* 비동기 작업 수행 성공 */) {
    resolve('resolved!');
  }
  else { /* 비동기 작업 수행 실패 */
    reject(Error('rejected!'));
  }
});
```

## 4. Promise 후속 처리 함수 then, catch

-  Promise 객체의 상태에 따라 후속 처리 함수(then, catch)를 체이닝 방식으로 호출

| then                                     | catch     |
| ---------------------------------------- | --------- |
| - 두 개의 콜백 함수를 인자로 받음<br />- 첫 번째 함수는 성공시 호출되며 두 번째 함수는 실패시 호출 | 예외 발생시 호출 |

```javascript
// 비동기 함수
function asyncFunc(param) {
  // Promise 객체 선언과 반환
  return new Promise((resolve, reject) => {
    // 비동기 함수
    setTimeout(() => (param ? resolve('resolved!') : reject('rejected!')), 1000);
  });
}

// asyncFunc 함수를 호출하면 Promise 객체를 생성하고 반환한다.
// 인자에 true를 전달 : resolve 메소드 호출
asyncFunc(true)
  .then(
    // resolve가 실행된 경우(성공), resolve 함수에 전달된 값이 result에 저장된다
    result => console.log(result), // resolved!
    // reject가 실행된 경우(실패), reject 함수에 전달된 값이 reason에 저장된다
    reason => {
      console.log(reason); // rejected!
      throw 'Error:' + reason;
    }
  )
  // 예외 발생 시 호출된다.
  .catch(err => console.log(err));

// asyncFunc 함수를 호출하면 Promise 객체를 생성하고 반환한다.
// 인자에 false를 전달 : reject 메소드 호출
asyncFunc(false)
  .then(
    // resolve가 실행된 경우(성공), resolve 함수에 전달된 값이 result에 저장된다
    result => console.log(result), // resolved!
    // reject가 실행된 경우(실패), reject 함수에 전달된 값이 reason에 저장된다
    reason => {
      console.log(reason); // rejected!
      throw 'Error:' + reason;
    }
  )
  // 예외 발생 시 호출된다.
  .catch(err => console.log(err));
```