# Angular - Component Basics

## 1. 컴포넌트란?

Angular의 핵심 구성 요소로 Angular 애플리케이션은 컴포넌트 중심으로 구성되며 컴포넌트의 역할은 화면을 구성하는 View를 생성하고 관리함

### 1.1 웹 컴포넌트

- 컴포넌트는 동작 가능한 하나의 부품이며 부품화를 위해서 다른 컴포넌트에 간섭을 받지 않도록 독립된 스코프를 가져야 함
- **컴포넌트는 독립적이고 완결된 뷰를 생성하기 위하여 “HTML, CSS, JavaScript를 하나의 단위로 묶는 것**

> 컴포넌트 내에서만 유효한 상태 정보와 로직, 스타일을 소유한 완결된 뷰를 생성하기 위한 것

웹 컴포넌트는 웹 애플리케이션에서 재사용이 가능하도록 캡슐화된 HTML 커스텀 요소(Custom element)를 생성하는 웹 플랫폼 API의 집합

1. 컴포넌트의 뷰를 생성할 수 있어야 하며(HTML Template)
2. 외부로부터의 간섭을 제어하기 위해 스코프(scope)를 분리하여 DOM을 캡슐화(Encapsulation)할 수 있어야 하며(Shadow DOM)
3. 외부에서 컴포넌트를 호출할 수 있어야 하고(HTML import)
4. 컴포넌트를 명시적으로 호출하기 위한 명칭(alias)을 선언하여 마치 HTML 요소와 같이 사용할 수 있어야 한다(Custom Element).

## 2. 컴포넌트 추가

복잡한 화면이라도 컴포넌트 하나로 생성하고 관리 가능

> 재사용이 용이한 구조로 분할하여 작성하며 이렇게 분할된 컴포넌트를 조립하여 중복없이 UI 생성
>
> 예) Header, Footer, Sidebar

![component tree](http://poiemaweb.com/img/component-tree.png)

컴포넌트를 블록 구조로 전환하면 위와 같은 구조를 갖는데 DOM 트리와 유사한 형태로 이를 **컴포넌트 트리**라고 함

## 1. Component 추가

`ng generate component` 명령어를 사용하여 새로운 Component를 추가

예) home 이라는 component 추가

```bash
$ ng g c home
  create src/app/home/home.component.css (0 bytes)
  create src/app/home/home.component.html (23 bytes)
  create src/app/home/home.component.spec.ts (614 bytes)
  create src/app/home/home.component.ts (261 bytes)
  update src/app/app.module.ts (388 bytes)
```

`src/app/home`에 폴더를 생성 하는데 아래의 파일들 생성

- `home.component.html`

  컴포넌트 템플릿을 위한 HTML 파일

- `home.component.css`

  컴포넌트 템플릿의 스타일링을 위한 CSS 파일

- `home.component.ts`

  컴포넌트 클래스 파일

- `home.component.spec.ts`

  컴포넌트 유닛 테스트를 위한 스펙 파일

> ng generate 명령어로 추가되는 모든 구성요소에 모두 `케밥 표기법(Kebab-case)` 명칭을 사용 

### 1.1 componet.ts

`ng generate component` 명령어에 지정한 

#### 1.1.1 import 영역

```typescript
import { Component, OnInit } from '@angular/core';
```

- 컴포넌트에 필요한 외부 모듈을 임포트
- Angular 라이브러리 모듈의 경우 @가 붙어있으며 경로를 명시하지 않음
- Angular 모듈이 아닌 외부 모듈의 경우 상대 경로를 명시

#### 1.1.2 @Component 데코레이터 영역

```typescript
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
```

- **메타데이터** 객체를 인자로 전달

- 메타데이터는 컴포넌트 생성에 필요한 정보(셀렉터, 템플릿, 스타일 정의 등)를 담고 있는 객체

  > 메타데이터 객체의 templateUrl 프로퍼티에는 컴포넌트의 뷰를 정의한 html 파일인 **템플릿**의 상대경로를 설정

`app-home`은 컴포넌트를 마크업으로 표현할 때 사용하는 이름이며 `src/app/app.component.ts`에서 `home` 컴포넌트를 사용할 때 `src/app/app.component.html`를 수정

```html
<!-- src/app/app.component.html -->
<h1>{{title}}</h1>
<app-home></app-home>
```

selector 프로퍼티 값은 `app-home`은 기본 접두사 app이 자동 추가된 값이며 `.angular-cli.json`에서 확인 가능

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "project": {
    "name": "my-app"
  },
  "apps": [
    {
      ...
      "prefix": "app",
      ...
    }
  ],
  ...
}
```

> 기본 접두사를 바꾸고 싶을 때는 해당 파일로 이동하여 수정 가능하며 Component 생성시 prefix하고 싶다면 아래의 명령어를 사용

```bash
$ ng new my-app --prefix todos
```

#### 1.1.3 컴포넌트 클래스 영역

```typescript
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
```

- 컴포넌트 뷰를 관리하기 위한 로직을 정의
- 자신의 바로 아래에 위치한 클래스를 컴포넌트 클래스로 인식
- 컴포넌트의 내부 관심사인 뷰의 관리에 집중해야 하며 애플리케이션 공통 관심사는 서비스로 분리

### 1.2 컴포넌트 기본 동작 구조

```html
<!-- src/app.component.html -->
...
  <h1>
    Welcome to {{ title }}!
  </h1>
...
```

템플릿은 컴포넌트 뷰를 정의하기 위해 HTML과 Angular 고유의 템플릿 문법으로 작성

> 컴포넌트 클래스의 데이터를 템플릿에 바인딩을 하는데 이러한 방식을 **데이터 바인딩**이라 함

![data binding](http://poiemaweb.com/img/data-binding.png)

컴포넌트는 데이터 바인딩에 의해 템플릿 컴포넌트 클래스의 데이터를 유기적으로 연계하며 구조는 아래와 같음

![component](http://poiemaweb.com/img/component.png)

#### 1. 템플릿

- 컴포넌트의 뷰를 생성하기 위해 HTML과 Angular의 고유한 템플릿 문법(Template Syntax)로 작성된 코드

#### 2. 메타데이터

- 컴포넌트 설정 정보를 담고 있는 객체
- @Component 데코레이터는 메타데이터 객체를 인자로 전달받아서 컴포넌트 클래스에 반영

#### 3. 컴포넌트 클래스

- 컴포넌트의 뷰를 생성하는 템플릿의 상태(state)를 관리
- 데이터 바인딩(Data Binding)을 통해 템플릿에 필요한 데이터를 제공하거나 템플릿에서 발생한 이벤트를 처리

### 1.3 @Component 데코레이터

- 일반 클래스를 컴포넌트화하기 위해서는 @Component 데코레이터를 해당 클래스 바로 앞에서 호출하여 Angular에게 해당 클래스가 일반 클래스가 아니라 컴포넌트 클래스임을 알려야 함

```typescript
@Component()
export class HelloComponent {}
```

- Angular에서 데코레이터는 중요한 개념이며 아래의 4가지 유형의 데코레이터를 제공

  1. 클래스 데코레이터 

     > @Component, @NgModule


  2. 프로퍼티 데코레이터 : 

     > @Input, @Output


  3. 메소드 데코레이터 

     > @HostListener


  4. 파라미터 데코레이터

     > @Inject

### 1.4 templateUrl, styleUrls 프로퍼티와 template, styles 프로퍼티

`templateUrl`, `styleUrls` 프로퍼티는 외부 파일을 로드하기 위해 사용

```typescript
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
```

아래와 같이 `template`, `styles` 프로퍼티를 사용하여 바로 코드를 넣을 수도 있음

```typescript
@Component({
  selector: 'app-home',
  template: `
    <p>home works!</p>
  `,
  styles: [`
    p { color: red; }
  `]
})
```

### 1.5 모듈에 컴포넌트 등록

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component'; // 1

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent // 2
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 우선 1)과 같이 hello 컴포넌트의 컴포넌트 클래스를 임포트


- @NgModule 데코레이터에 인자로 전달되는 메타데이터의 declarations 프로퍼티에 컴포넌트 클래스 HelloComponent를 선언

| 프로퍼티         | 내용                                       |
| ------------ | ---------------------------------------- |
| providers    | 주입 가능한 객체(injectable object) 즉 서비스의 리스트를 선언하고 루트 모듈에 선언된 서비스는 애플리케이션 전역에서 사용할 수 있음 |
| declarations | 컴포넌트, 디렉티브, 파이프의 리스트를 선언한다.              |
| imports      | 의존 관계에 있는 Angular 라이브러리 모듈, 기능 모듈(Feature module)이라 불리는 하위 모듈, 라우팅 모듈, 서드 파티 모듈을 선언 |
| bootstrap    | 애플리케이션의 진입점(entry point)인 루트 컴포넌트를 선언    |

