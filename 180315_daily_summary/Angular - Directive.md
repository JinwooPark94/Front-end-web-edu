# Angular - Directive

## 1. 디렉티브(directive)란?

DOM의 모든 것을 관리하고 지시하거나 명령하는 것

> Component에서 중복을 제거하기 위해 만들어짐

- **애플리케이션 전역에서 사용할 수 있는 공통 관심사를 컴포넌트에서 분리하여 구현한 것**

  > 중복을 제거하기 위한 것

- 복잡도를 낮추고 가독성을 향상

- **`Component`도 View를 생성하고 이벤트를 처리하는 등 DOM을 관리하기 때문에 큰 의미에서는 `Directive`**

```html
<todo-form></todo-form>
<todo-nav></todo-nav>
<todo-list [todos]="todos"></todo-list>
<todo-footer></todo-footer>
```

```typescript
@Directive({
  selector?: string
  inputs?: string[]
  outputs?: string[]
  host?: {[key: string]: string}
  providers?: Provider[]
  exportAs?: string
  queries?: {[key: string]: any}
})
```

## 2. 디렉티브의 종류

Angular에는 3가지 유형의 디렉티브 제공

- 컴포넌트 디렉티브
- 어트리뷰트 디렉티브
- 구조 디렉티브

## 3. 사용자 정의 어트리뷰트 디렉티브

- 호스트요소에 대한 참조가 필하고 DOM 객체를 가져옴
- @Directive 데코레이터로 장식된 순수한 자바스크립트 클래스
- `ElementRef.nativeElement`로 접근하면 호스트 네이티브 DOM의 프로퍼티에 접근 가능

### 3.1 사용자 정의 어트리뷰트 디렉티브의 생성

```typescript
import { Directive, ElementRef, Renderer2 } from '@angular/core';

// 디렉티브의 식별자를 @Directive 데코레이터의 메타데이터 객체의 selector 프로퍼티에 지정한다.
@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    // el.nativeElement.style.color = 'blue';
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }
}
```

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p textBlue>textBlue directive</p>`
})
export class AppComponent { }

```

### 3.2 이벤트 처리

다양한 이벤트 처리가 가능함

```typescript
// text-blue.directive.ts
import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({ selector: '[textBlue]' })
export class TextBlueDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
```

>  `@HostListener` 데코레이터를 사용하여 컴포넌트 또는 요소의 이벤트에 대한 핸들러를 정의

### 3.3 @input 데이터 바인딩

```typescript
// text-color.directive.ts
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective {

  // 어트리뷰트 호스트에서 프로퍼티 바인딩한 값을 전달 받는다.
  @Input() color: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
```

> `@Input 데코레이터`를 사용하여 어트리뷰트 호스트에서 프로퍼티 바인딩한 값을 전달

## 4. 사용자 정의 구조 디렉티브

### 4.1 ng-templete

페이지에서 렌더링 될 요소를 div 또는 span 등의 요소와 함께 사용할 필요가 없는 요소들을 그룹화할 때 사용

> ngIf, ngFor, ngSwtch 디렉티브의 경우 ng-templete 사용

```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>

<!--
NgFor 디렉티브 앞에 붙은 *(asterisk)는 아래 구문의 문법적 설탕(syntactic sugar)이다.
즉 위 코드는 아래의 코드로 변환된다.
-->

<ul>
  <ng-template ngFor let-item [ngForOf]="items">
    <li>{{ item }}</li>
  </ng-template>
</ul>
```

### 4.2 ng-container

페이지에서 렌더링 될 요소를 div 또는 span 등의 요소와 함께 사용할 필요가 없는 요소들을 그룹화할 때 사용

```html
<p>
  안녕하세요!
  <span *ngIf="user">
    {{ user.name }} 님
  </span>
  방갑습니다.
</p>
```

```html
<p>
  안녕하세요!
  <ng-container *ngIf="user">
    {{ user.name }} 님
  </ng-container>
  방갑습니다.
</p>
```

> **ng-container와 ng-template의 차이는 ng-container는 \* 문법을 사용할 수 있고 ng-template는 * 문법을 사용할 수 없음**

