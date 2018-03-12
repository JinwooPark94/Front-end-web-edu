# Angular - Data Binding

## 1. Data Binding 이란?

- 뷰와 모델을 하나로 연결하는 것을 의미
- 템플릿의 정적 HTML에 컴포넌트의 동적 데이터를 하나로 묶어 브라우저에 표시할 완성된 뷰를 만들기 위해 사용
- 템플릿 문법을 사용


- `React`, `Vue`, `Angular` 모두 data binding의 방식은 똑같음

구조화된 웹 애플리케이션 : 유지보수를 감안하여 여러 파일로 분리되어진 구조화된 애플리케이션 

### 1.1 이전 방식

![procedural-programming](http://poiemaweb.com/img/procedural-programming.png)

- View가 변경되면 로직도 변경될 가능성이 높음
- JavaScript와 DOM이 강력하게 연결되어 있음

### 1.2 현재 방식 : 선언형 프로그래밍

![declarative-programming](http://poiemaweb.com/img/declarative-programming.png)

- 선언적으로 기술하여 데이터를 주고 받음
- Template 문법으로 기술된 템플릿은 JIT 또는 AOT 컴파일러에 의해 컴파일
- 코드량이 많이 줄어듬
- JavaScript와 Template가 느슨하게 연결되어 있음

## 2. 변화 감지(Change detection)

- View와 Model의 동기화를 유지하기 위해 변화를 감지하고 반영함
- 이전 AngularJS에서는 양방향 바인딩만 지원을 하였으나 Angular 버전부터는 양방향 바인딩, 단반향 바인딩을 모두 지원
- `Zone.js` 라이브러리를 사용하여 네이티브 DOM 이벤트를 사용하여도 변화감지가 수행되도록 개선

### 2.1 `Zone.js`

- DOM 이벤트(click, key press, mouse move 등)
- Timer(setTimeout, setInterval)의 tick 이벤트
- Ajax 통신 / Promise

> 결국 비동기식 처리가 수행될 때 컴포넌트 클래스의 데이터가 변경됨

#### 2.1.1 몽키패치

일반적으로 런타임 중인 프로그램 메모리의 소스 내용을 직접 바꾸는 것

```javascript
// node_modules/zone.js/dist/zone.js
function zoneAwareAddEventListener() {...}
function zoneAwareRemoveEventListener() {...}
function patchTimer() {...}
function zoneAwarePromise() {...}
...

window.prototype.addEventListener = zoneAwareAddEventListener;
window.prototype.removeEventListener = zoneAwareRemoveEventListener;
window.prototype.promise = zoneAwarePromise;
window.prototype.setTimeout = patchTimeout;
...
```

위의 같이 일부 함수를 프록시(Proxy)로 재정의하여 대체하며 이벤트 또는 Promise가 프록시로 랩핑되는 현상을 몽키패치라고 함

- addEventListener
- Timer 함수
- XMLHttpRequest
- Promise

## 3. 데이터 바인딩

Angular는 단방향 데이터 바인딩과 양방향 데이터 바인딩을 지원

> DOM 조작 방식보다 간편하게 데이터를 가져와서 뷰에 표현

| 데이터 바인딩     | 데이터의 흐름        | 문법                                 |
| ----------- | -------------- | ---------------------------------- |
| 인터폴레이션      | 컴포넌트 클래스 ⟹ 템플릿 | {{ expression }}                   |
| 프로퍼티 바인딩    | 컴포넌트 클래스 ⟹ 템플릿 | [property]=”expression”            |
| 어트리뷰트 바인딩   | 컴포넌트 클래스 ⟹ 템플릿 | [attr.attribute-name]=”expression” |
| 클래스 바인딩     | 컴포넌트 클래스 ⟹ 템플릿 | [class.class-name]=”expression”    |
| 스타일 바인딩     | 컴포넌트 클래스 ⟹ 템플릿 | [style.style-name]=”expression”    |
| 이벤트 바인딩     | 컴포넌트 클래스 ⟸ 템플릿 | (event)=”statement”                |
| 양방향 데이터 바인딩 | 컴포넌트 클래스 ⟺ 템플릿 | [(ngModel)]=”variable”             |

### 3.1 인터폴레이션

중괄호로 열고 닫고 한느 형식으로 단방향 바인딩 사용되는 템플릿 문법이며 표현식의 평가 결과를 문자열로 변환 후 템플릿에 바인딩

```html
{{ expression }}

<!-- Angular component -->
@Component({
	<p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>admin: {{ admin }}</p>
    <p>address: {{ address.city }} {{ address.country }}</p>
)}
```

- 클래스의 프로퍼티가 문자열이 아닌 경우 문자열로 변환
- 존재하지 않는 프로퍼티에 접근하는 경우 에러 발생없이 무시

### 3.2 프로퍼티 바인딩

인터폴레이션은 프로퍼티 바인딩의 문법적 설탕이며 문법상 `undefined`를 제외한 나머지 값을 줄 수 있음

```html
<element [property]="expression">...</element>

<!-- Angular component -->
@Component({
	<input type="text" [value]="name">
	<p [innerHTML]="contents"></p>
	<img [src]="imageUrl"><br>
	<button [disabled]="isDisabled">disabled button</button>
})
```

### 3.3 어트리뷰트 바인딩

컴포넌트 클래스의 프로퍼티와 템플릿 간의 단방향 바인딩(One-way binding)에 사용되는 템플릿 문법으로 평가 결과를 HTML 어트리뷰트를 바인딩함

```html
<element [attr.attribute-name]="expression">...</element>

<!-- Angular component -->
@Component({
	<input id="user" type="text" [attr.value]="name">
})
```

#### 3.3.1 프로퍼티와 어트리뷰트의 차이점

- HTML 요소는 DOM 노드 객체로, HTML 어트리뷰트는 DOM 노드 객체의 프로퍼티로 변환
- HTML 어트리뷰트의 값은 언제나 문자열이지만 DOM 프로퍼티는 객체를 비롯하여 모든 값을 가질 수 있다

> 목적이 서로 다르다!

### 3.4 클래스 바인딩

HTML Class를 추가 또는 제거의 의미로 사용

```html
<!-- 추가 또는 제거를 할 때 사용 -->
<element [class.class-name]="booleanExpression">...</element>
<element [class]="class-name-list">...</element>
```

> 여러개의 Class를 선택할 때에는 ng-class를 사용함

### 3.5 스타일 바인딩(Style binding)

여러가지를 바꾸어야 할 때에는 `ng-style`을 사용

```html
<element [style.style-property]="expression">...</element>

<!-- Angular component -->
@Component({
	<button class="btn"
      [style.background-color]="isActive ? '#4CAF50' : '#f44336'"
      [style.font-size.em]="isActive ? 1.2 : 1"
      (click)="isActive=!isActive">Toggle</button>
})

export class AppComponent {
  isActive = false;
}
```

> 주로 하나의 인라인 스타일을 조건에 의해 추가하는 용도로 사용

### 3.6 이벤트 바인딩

View의 상태 변화(버튼 클릭, 체크박스 체크, input에 텍스트 입력 등)에 의해 이벤트가 발생하면 이벤트 핸들러를 호출

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [value]="name" (input)="onInput($event)">
    <button (click)="onClick()">clear</button>
    <p>name: {{ name }}</p>
  `
})
export class AppComponent {
  name = '';

  onInput(event) {
    console.log(event);
    // event.target.value에는 사용자 입력 텍스트가 담겨있다.
    this.name = event.target.value;
  }

  onClick() {
    this.name = '';
  }
}
```

### 3.7 양방향 데이터 바인딩

View와 Component 클래스의 상태 변화를 상호 반영하는 것

```html
<element [(ngModel)]="property">...</element>
```

사용하기 전 FormsModule을 모듈에 등록해야함

```typescript
// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="name">
    <p>name: {{ name }}</p>
  `
})
export class AppComponent {
  name = '';
}
```

> 양방향 바인딩은 이벤트 바인딩과 프로퍼티 바인딩의 축약 표현이며 실제로 동작은 이벤트 바인딩과 프로퍼티 바인딩의 조합으로 이루어짐