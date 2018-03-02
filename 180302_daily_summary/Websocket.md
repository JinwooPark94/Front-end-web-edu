# Websocket

## 1. Request & Response

### 1.1 Communication channels

### simplex

**단방향통신**

> 데이터를 전송하는 방향이 정해져있는 방식

예) 삐삐, 라디오, TV

### half-duplex

**반이중통신**

> 전송의 방향은 양방향이나 전송 순간에는 한쪽에서만 전송가능한 방식

예) 무전기

### full-duplex

**양방향통신**

> 동시에 송수신이 가능한 방식

예) 휴대폰, 팩스

## 2. Websocket

> 웹사이트가 사용자와 상호작용하기 위해 만들어진 기술

`W3C`, `ITF` 가 표준을 관리함 `port:80, HTTP1.1`

```
ws://로 접속
```

### 2-1. 이전 Websocket

- HTTP Request, Response
- Hidden Frame
- Long Polling

### 2-2. Polling vs Websocket

[![img](https://camo.githubusercontent.com/c860ca32070be2c633b8f1cef44500ee0920ec51/687474703a2f2f64322e6e617665722e636f6d2f636f6e74656e742f696d616765732f323031352f30362f68656c6c6f776f726c642d313333362d312d312e706e67)](https://camo.githubusercontent.com/c860ca32070be2c633b8f1cef44500ee0920ec51/687474703a2f2f64322e6e617665722e636f6d2f636f6e74656e742f696d616765732f323031352f30362f68656c6c6f776f726c642d313333362d312d312e706e67)

###2-3. Socket과 Websocket의 차이

#### Socket

HTTP run over TCP/IP(운영체제 위에서 실행될 때) 

Websocket - run from web browser (브라우저 위에서 실행될 때)

#### webSocket

HTML5의 표준 full-duplex 통신 방식 <https://html.spec.whatwg.org/multipage/web-sockets.html#network>

### 2-4. socket.io

`npm install --save socket.io`

- 실시간 통신기술의 웹 브라우저 호환성 문제 해결을 위한 프로젝트
- IE6 부터 최신 브라우저까지 지원
- WebSocket, Flash Socket, AJAX Long Polling, AJAX Multipart Streaming, Forever iframe, JSONP Polling 기술 모두 포함
- 브라우저에 따라 최적화된 기술 사용
- 일관성있는 문법과 API로 개발 가능

<https://caniuse.com/#search=web%20sockets>

### 2-5. chat.ejs

```
<style>
	* { margin: 0; padding: 0; box-sizing: border-box; }
	body { font: 13px Helvetica, Arial; }
	form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
	form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
	form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
	#messages { list-style-type: none; margin: 0; padding: 0; }
	#messages li { padding: 5px 10px; }
	#messages li:nth-child(odd) { background: #eee; }
</style>

<ul id="messages"></ul>
<form action="">
	<input id="m" autocomplete="off" /><button>Send</button>
</form>

```

### connection

```
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", function(socket){
	console.log("a user connected");
});

http.listen(8080, function(){
	console.log("Chat Server is running at localhost:8080");
});

```

```
<script src="/socket.io/socket.io.js"></script>
<script>
	var socket = io();
</script>

```

### disconnect

```
socket.on("disconnect", function(){
	console.log("user disconnected");
});

```

### emit message

```
socket.on("chat message", function(msg){
	console.log("message: " + msg);

```

```
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>

var socket = io();
$("form").submit(function(){
	socket.emit("chat message", $("#m").val());
	$("#m").val("");
	return false;
});

```

### broadcast

- unicast : 1:1. 출발지와 목적지가 정해진 전송
- broadcast : 네트워크에 접속된 모든 기기에 정보를 전송
- multicast : 네트워크에 접속된 기기 중 선택하여 전송

### broadcast

```
io.emit("chat message", msg);

```

```
socket.on("chat message", function(msg){
	$("#messages").append($("<li>").text(msg));
});
```