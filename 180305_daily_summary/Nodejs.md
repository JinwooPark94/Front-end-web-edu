# Node.js

![Isomorphic-JavaScript](http://poiemaweb.com/img/Isomorphic-JavaScript.png)

- 데이터를 실시간 처리하며 빈번한 I/O가 발생하는 Single Page Application)에 적합

- Chrome V8 Javascript 엔진을 기본으로 Javascript 런타임 환경

  > 절대 서버가 아님

- Server-side 애플리케이션을 만들 때 사용


- 아직 안정성, 속도 측면에서도 보장되지 않음
- Javascript에 Built-in을 공유할 수 있음 (동형성)
- **Non-blocking I/O**와 **단일 스레드 이벤트 루프**를 통해 높은 Request 처리 성능을 가지고 있음

> Node.js는 간단한 I/O 를 다량으로 하는 것에 적합함



## 1. Node.js 설치

LTS (Long Term Supported) 버전은 장기적으로 안정된 지원이 보장되는 버전으로 최대한 LTS를 사용하는 것을 추천

![lts-schedule](http://poiemaweb.com/img/lts-schedule.png)

## 2. REPL

Node.js가 제공하는 가상환경으로 간단한 코드를 직접 실행하여 결과를 확인 가능

```bash
$ node

> 1 * 0
0
> x = 10
10
> console.log('Hello World')
Hello World
undefined
```

> 종료시 CTRL + C 키를 두번 실행하면 됨

## 3. HTTP Server

Node.js에는 http 서버 모듈을 내장하고 있어서 별도의 서버의 설치없이 웹서버를 설치 가능

- `request` , `response`를 항상 가지고 있어야함

  > `createServer`에서 자동으로 만들어 줌



```javascript
const http = require('http');

http.createServer((request, response) => {
  // 상태 확인
  response.statusCode = 200;
  // 헤더 설정
  response.setHeader('Content-Type', 'text/plain');
  // 끝나면 'Hello World' 출력
  response.end('Hello World');
}).listen(3000); // 서버가 기동하는 상태에 3000번 Port를 사용하겠다고 선언

console.log('Server running at http://127.0.0.1:3000/');
```

## 공부해야할 내용

PWA에 대해 알아보기