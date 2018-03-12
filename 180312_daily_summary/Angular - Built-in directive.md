# Angular - Built-in directive

DOM에 대한 지시, 명령을 나타냄

> **애플리케이션 전역에서 사용할 수 있는 공통 관심사를 컴포넌트에서 분리하여 구현한 것으로 컴포넌트의 복잡도를 낮추고 가독성을 향상**

```typescript
// text-blue.directive.ts
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }
}
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div textBlue>textBlue directive</div>
  `
})
export class AppComponent { }
```

## 2. 빌트인 어트리뷰트 디렉티브

어트리뷰트 디렉티브는 HTML 요소의 어트리뷰트와 같이 사용하여 해당 요소의 모양이나 동작을 제어

### 2.1 ngClass

여러개의 CSS 클래스를 추가 또는 제거

```html
<element [ngClass]="expression">...</element>
```

- 우변의 표현식을 평가한 후 HTML class 어트리뷰트를 변경
- HTML class 어트리뷰트에 의해 이미 클래스가 지정되어 있을 때 ngClass 디렉티브는 HTML class 어트리뷰트를 병합(merge)하여 새로운 HTML class 어트리뷰트를 작성

### 2.2 ngStyle

HTML 인라인 스타일을 추가 또는 제거

```html
<element [ngStyle]="expression">...</element>
```

- 우변의 표현식을 평가한 후 HTML style 어트리뷰트를 변경
- HTML style 어트리뷰트에 의해 이미 스타일이 지정되어 있을 때 ngStyle 디렉티브는 HTML style 어트리뷰트를 병합(merge)하여 새로운 HTML style 어트리뷰트를 작성

## 3. 빌트인 구조 디렉티브

DOM 요소를 반복 생성하거나 조건에 의한 추가 또는 제거를 수행하여 뷰의 구조를 변경

- 구조 디렉티브에는 `*` 접두사를 추가하며 `[]`을 사용하지 않음
- 하나의 호스트 요소(디렉티브가 선언된 요소)에는 하나의 구조 디렉티브만을 사용할 수 있음

### 3.1 ngIf

우변 표현식의 연산 결과가 참이면 해당 요소를 DOM에 추가하고 거짓이면 해당 요소를 DOM에서 제거

> true 또는 false로 평가되어야 함

```html
<element *ngIf="expression">...</element>
```

위에서 `*`은 문법적 설탕임

```html
<ng-template [ngIf]="expression">
  <element>...</element>
</ng-template>
```

### 3.2 ngFor

컴포넌트 클래스의 컬렉션을 반복하여 호스트 요소 및 하위 요소를 DOM에 추가

> 일반적으로 배열을 사용

```html
<element *ngFor="let item of items">...</element>

<element *ngFor="let item of items; let i=index; let odd=odd; trackBy: trackById">...</element>
```

인덱스를 취득할 필요가 있는 경우, 인덱스를 의미하는 index를 사용하여 변수에 인덱스를 할당받을 수 있고 index 이외에도 `first`, `last`, `even`, `odd`와 같은 로컬 변수가 제공