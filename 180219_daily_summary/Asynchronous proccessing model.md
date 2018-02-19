# 비동기식 처리 모델 (Asynchronous processing model)

![img](http://poiemaweb.com/img/block_nonblock.png)

## 1. 동기식 처리 모델

동기식으로 코드가 동작하면 **순서가 보장**이 되며 만약 화면에 표시하는 작업을 수행할 경우 서버에 데이터를 요청하고 데이터가 응답될 때까지 다음 작업을 모두 **중단**됨

```javascript
function func1() {
  console.log('첫 번째 함수');
  func2();
}  // 1번

function func2() {
  console.log('두 번째 함수');
  func3();
}  // 2번

function func3() {
  console.log('세 번째 함수');
}  // 3번

func1()		/* 첫 번째 함수
               두 번째 함수
               세 번째 함수 */
```

위의 코드에서는 동기식 처리 모델 방식으로 코드가 실행되면 코드가 순차적으로 실행되므로 차례대로 실행함

## 2. 비동기식 처리 모델

비동기식으로 코드가 동작하면 **순서가 보장되지 않으며** 만약 화면에 표시하는 작업을 수행할 경우 작업을 모두 수행할 때까지 **기다리지 않고** 바로 다음 작업을 수행

예)

- DOM
- Timer 함수 (setTimeout, setInterval)
- Ajax

```javascript
function func1() {
  console.log('첫 번째 함수');
  func2();
}  // 1번

function func2() {
  setTimeout(function() {
    console.log('두 번째 함수');
  }, 0);
  
  func3();
}  // 2번

function func3() {
  console.log('세 번째 함수');
}  // 3번

func1()		/* 첫 번째 함수
               세 번째 함수
               두 번째 함수 */
```

위의 코드는 2번에서 Timer 함수를 사용하였으므로 비동기식 처리 모델 방식이며 setTimeout 설정 값을 0초로 해놓아도 병행하여 수행하기 때문에 3번의 결과가 먼저 출력되는 것을 볼 수 있음

### 2-1. 비동기 처리 모델 동작 원리

![event-loop](http://poiemaweb.com/img/event-loop.gif)

이미지 : [http://poiemaweb.com/js-event](http://poiemaweb.com/js-event)

위에 있는 결과를 예시로 살펴보면 함수가 호출되면 실행 컨텍스트 stack 안에 쌓이게 되는데 2번에 setTimeout(callback)의 콜백 함수는 즉시 실행하지 않고 Wep API에서 지정 대기 시간만큼 기다리다가 Event Queue로 이동하는데 이벤트가 발생하면 모든 Call Stack이 비워졌을때 Call Stack으로 이동하여 실행