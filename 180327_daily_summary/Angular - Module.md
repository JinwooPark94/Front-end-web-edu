# Angular - Module

- 관련이 있는 구성요소(컴포넌트, 디렉티브, 파이프, 서비스)를 하나의 단위로 묶는 메커니즘
- 관련이 있는 구성요소들로 구성된 응집된 기능 블록으로 애플리케이션을 구성하는 하나의 단위
- 항상 모든 기준점은 루트 모듈에서부터 시작해야함
- 재사용성에 좋음

- ​

```typescript
// app.module.ts

// Angular Libral
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SomeDirective } from './some.directive';
import { SomeComponent } from './some/some.component';
import { SomePipe } from './some.pipe';
import { SomeService } from './some.service';

@NgModule({
  // Component, Directive, Pipe
  declarations: [
    AppComponent,
    SomeDirective,
    SomeComponent,
    SomePipe
  ],
  // Module
  imports: [BrowserModule],
  // Service
  providers: [SomeService],
  // Load시 bootstrap 지정
  bootstrap: [AppComponent]
})
// NgModule을 보고 클래스를 생성해라 !
export class AppModule { }
```

## 1. BrowserModule

```typescript
import { BrowserModule } from '@angular/platform-browser';
```

> root 모듈에서만 사용하며 웹 어플리케이션이 기본적으로 가지고 있는 모듈

## 2. @NgModule 데코레이터

- 함수이며 모듈의 설정 정보가 기술된 메타데이터 객체를 인자로 전달받아 모듈을 생성

```typescript
@NgModule({
  providers?: Provider[]
  declarations?: Array<Type<any>|any[]>
  imports?: Array<Type<any>|ModuleWithProviders|any[]>
  exports?: Array<Type<any>|any[]>
  entryComponents?: Array<Type<any>|any[]>
  bootstrap?: Array<Type<any>|any[]>
  schemas?: Array<SchemaMetadata|any[]>
  id?: string
})
```

| 프로퍼티     | 내용                                                         |
| ------------ | ------------------------------------------------------------ |
| providers    | 주입 가능한 객체(injectable object) 즉 서비스의 리스트를 선언한다. 루트 모듈에 선언된 서비스는 애플리케이션 전역에서 사용할 수 있다. |
| declarations | 컴포넌트, 디렉티브, 파이프의 리스트를 선언한다. 모듈에 선언된 구성 요소는 모듈에서 사용할 수 있다. |
| imports      | 의존 관계에 있는 Angular 라이브러리 모듈, 기능 모듈(Feature module)이라 불리는 하위 모듈, 라우팅 모듈, 서드 파티 모듈을 선언한다. |
| bootstrap    | 루트 모듈에서 사용하는 프로퍼티로서 애플리케이션의 진입점(entry point)인 루트 컴포넌트를 선언한다. |

> `@NgModule`은 뒤에 Class를 데코레이터를 해줌

## 3. 라이브러리 모듈

- Angular가 제공하는 빌트인 모듈

```json
...
  "dependencies": {
    "@angular/animations": "^5.2.0",
    "@angular/common": "^5.2.0",
    "@angular/compiler": "^5.2.0",
    "@angular/core": "^5.2.0",
    "@angular/forms": "^5.2.0",
    "@angular/http": "^5.2.0",
    "@angular/platform-browser": "^5.2.0",
    "@angular/platform-browser-dynamic": "^5.2.0",
    "@angular/router": "^5.2.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.5.6",
    "zone.js": "^0.8.19"
  },
...
```

>  **BrowserModule은 NgIf 및 NgFor와 같은 빌트인 디렉티브와 파이프를 포함하는 CommonModule을 내부에서 import하기 때문에 BrowserModule을 import하면 별도 import없이 CommonModule를 사용할 수 있게 함**

## 4. 루트 모듈

- Angular 애플리케이션은적어도 하나 이상의 모듈을 소유

  > 애플리케이션 레벨의 컴포넌트, 디렉티브, 파이프, 서비스를 선언하거나 의존 라이브러리 모듈과 기능 모듈이라 불리는 하위 모듈을 포함 할 수 있음

![angular-process](http://poiemaweb.com/img/angular-process.png)

## 5. 모듈의 분리

어플리케이션이 커지면 등록된 컨포넌트, 디렉티브, 파이프, 서비스도 늘어나게 되는데 하나의 모듈에 혼재되면 관리가 어려워지기 때문에 Angular는 모듈을 세 가지로 분리함

| 모듈      | 개요                                                         | 대상                                                         |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 기능 모듈 | 관심사가 유사한 구성 요소로 구성한 모듈                      | 특정 화면을 구성하는 구성 요소                               |
| 공유 모듈 | 애플리케이션 전역에서 사용될 구성 요소들로 구성한 모듈로서 기능 모듈에 의해 임포트된다. | 애플리케이션 전역에서 사용하는 컴포넌트, 디렉티브, 파이프 등 |
| 핵심 모듈 | 애플리케이션 전역에서 사용될 구성 요소들로 구성한 모듈로서 루트 모듈에 등록하여 싱글턴으로 사용한다. | 애플리케이션 전역에서 사용하는 데이터 서비스, 인증 서비스, 인증 가드 등 |

![Shared module](http://poiemaweb.com/img/shared-module.png)