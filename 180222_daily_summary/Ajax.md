# Ajax (Asynchronous JavaScript and XML)

## 1. Ajax가 나오게 된 계기 

- `Google`이 V8을 개발하면서 직접 Gmail, Google Map 을 V8 안에서 `Ajax`를 사용하여 개발

- 브라우저에서 화면 전환시 깜박이거나 로딩되는 화면을 제거하기 위해서 등장

  > 브라우저가 화면을 전환하는 경우

   - 사용자가 URI를 입력하면 페이지 이동
   - 웹페이지에서 링크를 클릭하면 페이지 이동
   - 브라우저에서 뒤로가기, 앞으로가기, 새로고침을 클릭시 History를 따라 페이지 이동

   ![traditional-webpage-lifecycle](http://poiemaweb.com/img/traditional-webpage-lifecycle.png)


자료 :  http://poiemaweb.com/img/traditional-webpage-lifecycle.png

## 2. Ajax 란?

- **비동기적으로 서버와 브라우저가 데이터를 공유할 수 있는 통신 방식**

  > Javascript를 통해서 서버에 데이터를 요청하는 것

- **웹 브라우저에 대한 Script 언어로 만들어진 언어**

- **이전에는 XML 데이터 형식을 사용**

![ajax-webpage-lifecycle](http://poiemaweb.com/img/ajax-webpage-lifecycle.png)

자료 : http://poiemaweb.com/img/ajax-webpage-lifecycle.png

### 2-1. 특징

- 서버와 통신하기위한 수단
- JSON 방식으로 데이터를 주고 받음
- 페이지 전체를 로드할 필요 없이 필요한 부분만 로드하여 갱신

## 2. JSON (Javascript Object Notation)

클라이언트와 서버 간에 데이터가 필요한데 그 포멧을 Javascript Object와 비슷하게 생겼다 하여 JSON이라 불리며 값은 문자열임

- Javascript의 객체 리터럴과 매우 흡사함
- XML 포맷보다 가볍고 사용하기 간편함
- Key와 Value에서 Key는 항상 큰따음표로 둘러싸야함

```json
{
  "food" : "HARIBO",
  "age" : 20,
  "money" : true
}
```

## 2.1 JSON.stringify

객체를 JSON 형식의 문자열로 변환

```json
var foo = {
  "food" : "HARIBO",
  "age" : 20,
  "money" : true
}

var boo = JSON.stringify(foo);
console.log(boo); // {"food":"HARIBO","age":20,"money":true}
console.log(typeof(boo)); // String

//보기 좋게 편의 기능 -> 데이터를 확인하기 위해 사용
// stringify(객체, )
var preettyBoo = JSON.stringify(foo, null, 2);

/* 숫자가 아닌 것만 보내는 함수
   key : 프로퍼티 명, value : 값 */
function filter(key, value) {
  return typeof === 'number' ? undefined : value;
}

var booFilter = JSON.stringify(foo, filter, 2);
console.log(booFilter);
console.log(typeof(booFilter)); // String

var arr = ['HARIBO', 20, true];

// 배열 객체 => 문자열
var strArray = JSON.stringify(arr);
console.log(typeof strArray, strArray); // string [1,5,"false"]

// replacer
// 모든 값을 대문자로 변환된 문자열을 반환한다
function replaceToUpper(key, value) {
  return value.toString().toUpperCase();
}

// 배열 객체 => 문자열 + replacer
var strFilteredArray = JSON.stringify(arr, replaceToUpper);
console.log(typeof strFilteredArray, strFilteredArray); // string "1,5,FALSE"
```

## 2.2  JSON.parse

서버로부터 브라우저에게 데이터를 문자열로 반환하는데 JSON 데이터를 가진 문자열을 객체로 변환

```javascript
// JSON 형식의 문자열 => 객체
var obj = JSON.parse(strObject);
console.log(typeof obj, obj); // object { name: 'Lee', gender: 'male' }

// 문자열 => 배열 객체
var objArray = JSON.parse(strArray);
console.log(typeof objArray, objArray); // object [1, 5, "false"]
```

## 3. XMLHttpRequest

XMLHttpRequest 객체를 이용하여 Ajax 요청을 생성하고 전송

- XMLHttpRequest는 생성자 함수
- 서버가 브라우저의 요청에 응답을 반환하면 같은 XMLHttpRequest 객체가 그 결과를 처리

###  3.1 Ajax request

```javascript
// XMLHttpRequest 객체의 생성
var xhr = new XMLHttpRequest();

// 비동기 방식으로 Request를 오픈함
// xhr.open은 GET 방식으로 '/users' url
xhr.open('GET', '/users');

// Request를 전송
xhr.send();
```

#### 3.1.1 XMLHttpRequest.open

객체 인스턴스를 생성후 서버로부터 요청 준비를 함

```javascript
XMLHttpRequest.open(method, url[, async])
```

| 매개변수   | 설명                                       |
| ------ | ---------------------------------------- |
| method | HTTP method (“GET”, “POST”, “PUT”, “DELETE” 등) |
| url    | 요청을 보낼 URL                               |
| async  | 비동기 조작 여부. 옵션으로 default는 true이며 비동기 방식으로 동작한다. |

#### 3.1.2 XMLHttpRequest.send

준비된 요청을 서버에 전달하는 역할을 함

|              GET              |              POST              |
| :---------------------------: | :----------------------------: |
| URL의 일부분인 쿼리 문자열로 데이터를 서버로 전송 | 데이터(페이로드)를 Request Body에 담아 전송 |

![HTTP request response message](http://poiemaweb.com/img/HTTP_request+response_message.gif)

> request body에 담아 전송할 인수를 전달 가능

```javascript
req.send(null); // 요청 메소드가 GET인 경우, send 메소드의 인수는 무시하며 null로 설정
// req.send('string');
// req.send(new Blob()); // 파일 업로드와 같이 바이너리 컨텐트를 보내는 방법
// req.send({ form: 'data' });
// req.send(document);
```

#### 3.1.3 XMLHttpRequest.setRequestHeader

해당 메소드는 HTTP Request Header 값을 설정하며 반드시 `XMLHttpRequest.open` 메소드가 실행된 이후에 사용 가능

- **Content-type**

  request body에 담에 전송할 데이터의 MIME-type의 정보를 표현

  | 타입                | 서브타입                                     |
  | ----------------- | ---------------------------------------- |
  | text 타입           | text/plain, text/html, text/css, text/javascript |
  | Application 타입    | application/json, application/x-www-form-urlencode |
  | File을 업로드하기 위한 타입 | multipart/formed-data                    |

  ```javascript
  req.setRequestHeader('Content-type', 'application/json');
  ```

- **Accept**

  HTTP 클라이언트가 서버에 요청할 때 서버가 센드백할 데이터의 MIME-type을 지정

  ```javascript
  req.setRequestHeader('Accept', 'application/json'); 
  // Accept 헤더를 설정하지 않으면, send 메소드가 호출될 때 Accept 헤더가 */*로 전송
  ```

### 이외에 내용

- Meta  - 데이터 위의 데이터

- 서버에서 데이터 저장 방식

  - Cookie 방식
  - Session 방식 
  - Token 방식

  > 이전 사이트들은 Cookie, Session 방식을 사용하였지만 현재는 Token 방식을 사용함