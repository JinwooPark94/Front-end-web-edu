# Built-in Object(내장 객체)

웹페이지를 표현하기 위한 공통의 기능을 제공하며 수많은 개발자들에 의한 신뢰할 수 있는 객체

> 브라우저가 로드되자마자 바로 사용 가능

- Standard Built-in Objects (or Global Objects)
- BOM (Browser Object Model)
- DOM (Document Object Model)

![object](http://poiemaweb.com/img/object.png)



## 1. Standard Built-in or Global Objects

Javascript는 프로그램 전체의 영역에서 공통적으로 필요한 기능을 제공

- 일반적으로 대문자로 시작
- 여기서 Global은 전역 객체(Global Objects)와 다름
- 전역객체는 브라우저에서는 `window`를 객체를 의미하며, 서버에서는 `global` 객체를 의미함

## 2. BOM (Browser Object Model)

브라우저 객체 모델은 브라우저 탭 또는 브라우저 창의 모델을 생성

> 최상위 객체는 `window` 객체로 브라우저 창 또는 탭을 표현함

![BOM](http://poiemaweb.com/img/BOM.png)



## 3. DOM (Document Object Model)

현재 내가 사용중인 웹페이지의 모델을 생성함

> 최상위 객체는`document` 객체로 전체 문서를 표현

![DOM](http://poiemaweb.com/img/DOM.png)



### 참고 : http://poiemaweb.com