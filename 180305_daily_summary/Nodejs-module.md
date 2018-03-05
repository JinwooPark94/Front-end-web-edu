#Node.js module

## 1. exports

- 독립적인 파일 스코프를 갖기 때문에 모듈 안에 선언한 모든 것들은 기본적으로 해당 모듈 내부에서만 참조 가능


- 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 수 있게 하고 싶다면 exports 객체를 사용

```javascript
// circle.js
const { PI } = Math;

exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;

// app.js
const circle = require('./circle.js'); // == require('./circle')

console.log(`지름이 4인 원의 면적: ${circle.area(4)}`);
console.log(`지름이 4인 원의 둘레: ${circle.circumference(4)}`);
```

**bash에서 app.js 실행**

```bash
$ node app
지름이 4인 원의 면적: 50.26548245743669
지름이 4인 원의 둘레: 25.132741228718345
```

## 2. module.exports

- `exports` 객체는 프로퍼티 또는 메소드를 여러 개 정의 가능했지만 `module.exports`에는 하나의 값을 할당

```javascript
// circle.js
const { PI } = Math;

module.exports = function (r) {
  return {
    area() { return PI * r * r; },
    circumference() { return 2 * PI * r}
  };
};

// app.js
const circle = require('./circle');
const myCircle = circle(4);

console.log(`지름이 4인 원의 면적: ${myCircle.area()}`);
console.log(`지름이 4인 원의 둘레: ${myCircle.circumference()}`);
```



### 여기서 잠깐 ! 

**`exports`와 `module.exports`의 차이점**

| 구분             | 모듈 정의 방식                                 | require 함수의 호출 결과                    |
| -------------- | ---------------------------------------- | ------------------------------------ |
| exports        | **exports 객체에는 값을 할당할 수 없고 공개할 대상을 exports 객체에 프로퍼티 또는 메소드로 추가** | exports 객체에 추가한 프로퍼티와 메소드가 담긴 객체가 전달 |
| module.exports | **module.exports 객체에 하나의 값(기본자료형, 함수, 객체)만을 할당** | module.exports 객체에 할당한 값이 전달         |

## 3. require

함수의 인수에는 파일뿐만 아니라 디렉터리를 지정 가능

```javascript
const myModule = require('./module');

// module/calc.js의 기능
const result = myModule.calc.add(1, 2);

console.log(result);

// module/print.js의 기능
myModule.print.sayHello();
```

## 5. 코어 모듈과 파일 모듈

`Node.js`에서 기본으로 포함하고 있는 모듈

```bash
[ 'Binding contextify',
  'Binding natives',
  'Binding config',
  'NativeModule events',
  'Binding async_wrap',
  'Binding icu',
  'NativeModule util',
  'NativeModule internal/errors',
  'NativeModule internal/encoding',
  'NativeModule internal/util',
  'Binding util',
  'Binding constants',
  'NativeModule internal/util/types',
  'Binding buffer',
  'NativeModule buffer',
  'NativeModule internal/buffer',
  'Binding uv',
  'NativeModule internal/process',
  'NativeModule internal/process/warning',
  'NativeModule internal/process/next_tick',
  'NativeModule async_hooks',
  'NativeModule internal/process/promises',
  'NativeModule internal/process/stdio',
  'Binding performance',
  'NativeModule perf_hooks',
  'NativeModule internal/linkedlist',
  'NativeModule internal/inspector_async_hook',
  'Binding inspector',
  'NativeModule timers',
  'Binding timer_wrap',
  'NativeModule assert',
  'NativeModule module',
  'NativeModule internal/module',
  'NativeModule internal/url',
  'NativeModule internal/querystring',
  'NativeModule querystring',
  'Binding url',
  'NativeModule vm',
  'NativeModule fs',
  'NativeModule path',
  'Binding fs',
  'NativeModule stream',
  'NativeModule internal/streams/legacy',
  'NativeModule _stream_readable',
  'NativeModule internal/streams/BufferList',
  'NativeModule internal/streams/destroy',
  'NativeModule _stream_writable',
  'NativeModule _stream_duplex',
  'NativeModule _stream_transform',
  'NativeModule _stream_passthrough',
  'Binding fs_event_wrap',
  'NativeModule internal/fs',
  'NativeModule internal/loader/Loader',
  'NativeModule internal/loader/ModuleWrap',
  'Internal Binding module_wrap',
  'NativeModule internal/loader/ModuleMap',
  'NativeModule internal/loader/ModuleJob',
  'NativeModule internal/safe_globals',
  'NativeModule internal/loader/ModuleRequest',
  'NativeModule url',
  'NativeModule internal/loader/search',
  'NativeModule console',
  'Binding tty_wrap',
  'NativeModule net',
  'NativeModule internal/net',
  'Binding cares_wrap',
  'Binding tcp_wrap',
  'Binding pipe_wrap',
  'Binding stream_wrap',
  'NativeModule dns',
  'NativeModule http',
  'NativeModule _http_agent',
  'NativeModule _http_client',
  'Binding http_parser',
  'NativeModule _http_common',
  'NativeModule internal/freelist',
  'NativeModule internal/http',
  'NativeModule _http_incoming',
  'NativeModule _http_outgoing',
  'NativeModule _http_server' ]
```

