# 문서 객체 모델 (DOM : Document Object Model)

- HTML과 XML 문서에 대한 애플리케이션 프로그래밍 인터페이스


- Document는 html, css, javascript를 포함하며 객체로 만들어 모델화 하는 것
- DOM은 W3C의 공식 표준이지만 HTML과 따로 관리함

![브라우저 동작 원리](http://poiemaweb.com/img/client-server.png)

이미지 : [http://poiemaweb.com/js-dom](http://poiemaweb.com/js-dom)

### 브라우저 동작 원리

1. HTML을 로드함
2. HTML 객체화를 위해 파싱하는데 중간에 멈춰서 CSS, Javascript가 나오면 CSS, Javascript를 로드 후 파싱
3. HTML은 Dom tree를 만들고 CSS는 CSSOM tree를 만들며 Javascript는 Syntax tree를 만드는데 여기서 Syntax tree는 HTML과 CSS를 제어할 수 있게 함
4. 각자 만든 tree를 합친 render tree를 만들어 렌더링을 할 수 있게 만들어 줌

##  1. DOM tree

브라우저는 HTML을 로드한 후 생성하는 모델을 의미하고 객체처럼 구조화 되어 있음

```html
<html>
  <head>
    <title>Hello</title>
  </head>
  <body>
    <p>안녕하세요</p>
  </body>
</html>
```

> Document -> Element : html -> Element : head -> Element : title -> Text Hello
>
> ​                                                   -> Element : body -> Element : p      -> Text: 안녕하세요

### **Dom tree는 네 종류의 노드로 구성되어 있음**

![Element Node](http://poiemaweb.com/img/HTMLElement.png)

이미지 : [http://poiemaweb.com/js-dom](http://poiemaweb.com/js-dom)

#### 1-1 Document 노드

- Dom tree의 최상위에 존재
- 각각의 노드들(Element, Attribute, Text)을 접근하기 위해 반드시 Document 노드를 통해야함 
- Dom tree에서의 시작점
- 페이지에 대한 정보를 얻고 구조 및 외관을 조작
- HTML, XML 기반 문서를 표현

> NodeType은 9를 나타냄

#### 1-2 Element 노드

- XML / HTML 요소를 표현하며 이를 통해 태그 이름이나 자식, 속성 정보에 접근 가능
- HTML 중첩에 의해 부자 관계를 가지며 이 부자 관계를 통해 정보를 구조화

> NodeType은 1을 나타냄

#### 1-3 Attribute 노드

- 해당 Attribute가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현
- Attribute를 참조 또는 수정 가능
- HTML에서는 자식 노드를 가질 수 없음
- XML에서는 자식 노드로 Text, EntityReference를 가질 수 있음

> NodeType 11을 나타냄

#### 1-4 Text 노드

- 평범한 텍스트가 포함되고 글자 그대로 사용
- HTML 문자는 포함 가능하지만 HTML 코드는 포함 불가
- 요소 노드의 자식이며 자신의 자식 노드를 가질 수 없음
- Dom tree에서의 마지막점

> NodeType은 3을 나타냄



결론적으로 Dom tree는 조작하고자 하는 요소를 선택 또는 탐색하며, 선택된 요소의 Contents 또는 Attribute를 조작함

## 3. DOM Query / Traversing (요소에의 접근)

### 3.1 하나의 요소 노드 선택(DOM Query)

#### `document.getElementById(id)`

- id Attribute 값으로 요소 노드를 한개 선택 

  > 여러개 선택시 첫 번째 요소 반환

```javascript
var elem = document.getElementById('haribo');
```

#### `document.querySelector(cssSelector)`

- CSS 셀렉터를 사용하여 요소 노드를 한개 선택

  > 여러개 선택시 첫 번째 요소 반환

```javascript
var elem = document.querySelector('div.food');
```

### 3.2 여러개의 요소 노드 선택(DOM Query)

#### `document.getElementsByClassName(class)`

- class Attribute 값으로 요소 노드를 모두 선택

  > 공백으로 구분하여 여러개의 class 지정 가능

```javascript
var elems = document.getElementsByClassName('food');
```

**단점 : 배열과 비슷한 사용법을 갖고 있으나 배열이 아닌 유사배열이므로 실시간으로 Node의 상태 변경을 반영**

#### `document.getElementsByTagName(tagName)`

- 태그명으로 요소 노드를 모두 선택

```javascript
var elems = document.getElementsByTagName('div');
```

#### `document.querySelectorAll(selector)`

- 지정된 CSS 선택자를 사용하여 요소 노드를 모두 선택

```javascript
var elems = document.querySelectorAll('div.food');
```

### 3.3 Dom traversing (탐색)

#### `parentNode`

- 부모 노드를 탐색

```javascript
var elem = document.querySelector('#haribo');

// id가 haribo인 부모 노드를 탐색함
var parentNode = elem.parentNode;
```

#### `firstChild, lastChild`

- 자식 노드를 탐색

```javascript
var elem = document.querySelector('.food');

// 첫 번째 자식 탐색
elem.firstChild.className = 'rainbow';
// 마지막 자식 탐색
elem.lastChild.className = 'rainbow';
```

#### `hasChildNodes()`

- 자식 노드가 있는지 확인하고 Boolean 값을 반환

#### `childNodes`

- 자식 노드의 컬렉션을 반환

```javascript
var elem = document.querySelector('.food');

if (elem.hasChildNodes()) {
  console.log(elem.childNodes);
}
```

#### `previousSibling`, `nextSibling`

- 형제 노드를 탐색



## 4. Dom Manipulation (조작)

### 4-1. 텍스트 노드 접근/수정

![nodeValue](http://poiemaweb.com/img/nodeValue.png)

이미지 : [http://poiemaweb.com/js-dom](http://poiemaweb.com/js-dom)

여기서 li와 attribute는 같은 관계이며 text는 부모와 자식 관계

#### 텍스트 노드에 접근하는 방식

1. 해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식
2. firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색
3. 텍스트 노드의 유일한 프로퍼티(`nodeValue`)를 이용하여 텍스트를 취득
4. `nodeValue`를 이용하여 텍스트를 수정

#### `nodeValue`

- 노드의 값을 반환

```javascript
// 해당 텍스트 노드의 부모 요소 노드를 선택한다.
var one = document.getElementById('one');
console.dir(one); // HTMLLIElement: li#one.red

// nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
console.log(one.nodeName); // LI
console.log(one.nodeType); // 1: Element node

// firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.
var textNode = one.firstChild;

// nodeName, nodeType을 통해 노드의 정보를 취득할 수 있다.
console.log(textNode.nodeName); // #text
console.log(textNode.nodeType); // 3: Text node

// nodeValue 프로퍼티를 사용하여 노드의 값을 취득한다.
console.log(textNode.nodeValue); // Seoul

// nodeValue 프로퍼티를 이용하여 텍스트를 수정한다.
textNode.nodeValue = 'Pusan';
```

### 4-2. 텍스트 노드 접근/수정

어트리뷰트 노드을 조작할 때 다음 프로퍼티 또는 메소드를 사용

#### `className`

- class Attribute 값을 취득 또는 변경
- 만약 class Attribute 값이 존재하지 않을시 Attribute를 생성하고 지정된 값을 설정
- class가 많을 경우 `split(' ')`을 이용해 배열로 사용

#### `id`

- id Attribute 값을 취득 또는 변경
- 만약 id Attribute 값이 존재하지 않을시 id Attribute를 생성하고 지정된 값을 설정

#### `hasAttribute(attribute)`

- 지정한 Attribute를 가지고 있는지 확인하며 true or false 반환

#### `getAttribute(attribute)`

- Attribute의 값을 취득

#### `setAttribute(attribute)`

- Attribute와 Attribute의 값을 설정

#### `removetAttribute(attribute)`

- 지정한 Attribute를 제거



## 5. HTML 콘텐츠 조작

HTML 콘텐츠를 조작하기 위해 사용하며 마크업이 포함된 콘텐츠를 추가하는 행위는 크로스 스크립팅 공격에 취약함

#### 5-1. `textContent`

- 요소의 텍스트 콘텐츠를 취득 또는 변경
- 마크업 사용 X
- 텍스트를 할당시 텍스트 변경 가능



#### 5-2. `innerText` 

- 비표준
- CSS에 순종적임 ( CSS에 보여지지 않는 것들은 반환 X)
- CSS를 함께 고려함으로 textContent보다 느림




#### 5-3. `innerHTML`

- 해당 요소의 모든 자식 요소를 포함하는 모든 콘텐츠를 하나의 문자열로 취득



### 6. DOM 조작 방식

`innerHTML` 프로퍼티를 사용하지 않고 새롭게 콘텐츠를 추가할 수 있는 방법

#### 6-1. `createElement(tagName)`

- 태그 이름을 인자로 전달하여 요소 생성

#### 6-2. `CreateTextNode(text)`

- 텍스트를 인자로 전달하여 텍스트 노드 생성

#### 6-3. `appendChild(Node)`

- 인자로 전달한 노드를 자식 요소로 DOM 트리에 추가

#### 6-4. `removeChild(Node)`

- 인자로 전달한 노드를 DOM 트리에 제거



### 7. `insertAdjacentHTML(position, string)`

인자로 전달한 텍스트를 HTML로 파싱하고 그 결과로 생성된 노드를 DOM 트리의 지정된 위치에 삽입

첫 번째 인자인 position에는 아래의 값들이 들어올 수 있음

- ‘beforebegin’
- ‘afterbegin’
- ‘beforeend’
- ‘afterend’

![insertAdjacentHTML-position](http://poiemaweb.com/img/insertAdjacentHTML-position.png)

이미지 : [http://poiemaweb.com/js-dom](http://poiemaweb.com/js-dom)

## 8. innerHTML vs. DOM 조작 방식 vs. insertAdjacentHTML()

#### **innerHTML**

| 장점                              | 단점                                       |
| ------------------------------- | ---------------------------------------- |
| DOM 조작 방식에 비해 빠르고 간편            | XSS공격에 취약점이 있기 때문에 사용자로 부터 입력받은 콘텐츠를 추가할 때 주의하여야 함 |
| 간편하게 문자열로 정의한 여러 요소를 DOM에 추가 가능 | 해당 요소의 내용을 덮어 쓴다. 즉, HTML을 로드하고 다시 파싱한다. 이것은 비효율적 |
| 콘텐츠를 취득할 수 있음                   |                                          |

#### **DOM 조작 방식**

| 장점                                      | 단점                           |
| --------------------------------------- | ---------------------------- |
| 특정 노드 한개(노드, 텍스트, 데이터 등)를 DOM에 추가할 때 적합 | innerHTML보다 느리고 더 많은 코드가 필요함 |

#### **insertAdjacentHTML()**

| 장점                                 | 단점                                       |
| ---------------------------------- | ---------------------------------------- |
| 간편하게 문자열로 정의된 여러 요소를 DOM에 추가할 수 있음 | XSS공격에 취약점이 있기 때문에 사용자로 부터 입력받은 콘텐츠를 추가할 때 주의하여야 함 |
| 삽입되는 위치를 선정할 수 있음                  |                                          |

#### 결론

- `innerHTML`과 insertAdjacentHTML()은 크로스 스크립팅 공격에 취약
- 텍스트 추가, 변경시 `textContent`, 새로운 요소 추가, 삭제시 `DOM 조작 방식`을 사용