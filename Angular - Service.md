# Angular - Service

- 컴포넌트의 관심사와 어플리케이션 전역 관심사를 분리할 때 사용
- 각각의 자신의 관심사에 집중하여 `Service`는 공통 사용하게 될 로직에 집중
- 구성 요소 마다 자신의 관심사에 집중하는 독립성 보장
- 재사용성이 높아지며 복잡도는 낮아짐
- Class로 구성되어 있음

## 1. 서비스의 생성

의존성 주입이 가능한 클래스로 작성

```bash
ng generate service greeting
```

```typescript
// greeting.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {
  sayHi() { return 'Hi!'; }
}
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
// 컴포넌트에서 사용할 서비스를 임포트
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
  `
})
export class AppComponent {
  greeting: string;
  // 서비스의 인스턴스를 담을 프로퍼티
  greetingService: GreetingService;

  constructor() { // 1
    // 서비스의 인스턴스의 명시적 생성
    this.greetingService = new GreetingService();
  }

  sayHi() {
    // 서비스의 사용
    this.greeting = this.greetingService.sayHi();
  }
}
```

여기서 1번을 자세히 보면

```typescript
constructor() {
  // 서비스의 인스턴스의 명시적 생성
  this.greetingService = new GreetingService();
}
```

> 이때 `Component`는 `GreetingService` 의존 관계에 있으며 `Component`는 `GreetingService`에 의존하고 있으며 이때 컴포넌트의 관점에서 `GreetingService`를 의존성이라 함

![dependency](http://poiemaweb.com/img/dependency.png)

의존성을 생성하는 코드와 사용하는 코드가 컴포넌트 내에 같이 존재하면 이는 컴포넌트와 의존성이 `긴밀히 결합` 되어 있다고 함

## 2. 의존성 주입(Dependency Injection)

구성 요소 간의 의존 관계를 코드 내부가 아닌 외부의 설정파일 등을 통해 정의하는 디자인 패턴 중 하나로써 구성 요소 간 결합도를 낮추고 재사용성을 높임

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
  `,
  providers: [GreetingService]
})
export class AppComponent {
  greeting: string;

  constructor(private greetingService: GreetingService) {}

  sayHi() {
    this.greeting = this.greetingService.sayHi();
  }
}
```

설정 정보에 의해 인스턴스를 생성하여 컴포넌트에게 전달해주는데 이러한 현상은 **의존성 주입(Dependency Injection)**이라함

```typescript
providers: [{
  // 의존성으로 주입될 객체의 타입(토큰, Token)
  provide: GreetingService,
  // 의존성으로 주입될 객체의 인스턴스를 생성할 클래스
  useClass: GreetingService
}]
```

**providers 프로퍼티는 의존성으로 주입될 객체의 인스턴스를 어떻게 생성하는지 Angular에 설명**

```typescript
// 의존성 주입
constructor(private greetingService: GreetingService) {}
```

## 3. 인젝터(Injector)

컴포넌트가 생성될 때, Angular는 컴포넌트에 필요한 인스턴스를 인젝터에 요청하고 인젝터는 이전에 이미 생성한 인스턴스를 담고 있는 컨테이너를 관리하고 있는데 요청된 인스턴스가 컨테이너에 존재하지 않으면 인스턴스를 생성하고 컨테이너에 추가

> 요청된 인스턴스를 컴포넌트 생성자의 인자로 주입

![Injector](http://poiemaweb.com/img/injector.png)

## 3. 인젝터 트리(Injector tree)

- 컴포넌트는 트리 구조로 구성되어있으며 인젝터도 마찬가지로 트리 구조로 만들어짐
- 인스턴스를 생성하며 상위 인젝터가 생성한 인스턴스는 하위 컴포넌트에서 사용할 수 있음

## 4. 프로바이더(Provider)

- 인젝터가 인스턴스를 생성할 때 생성 정보를 Angular에게 알려줘야하는데 인스턴스 생성 정보는 providers 프로퍼티에 등록함

  > **providers 프로퍼티는 모듈의 @NgModule 또는 컴포넌트의 @Component 어노테이션에 등록**

```typescript
// @NgModule 프로바이더
@NgModule({
  ...
  providers: [GreetingService],
})

// @Component 프로바이더
@Component({
  ...
  providers: [GreetingService]
})
```

> **모듈 레벨에 등록한 서비스는 하나의 인스턴스를 공유하지만 컴포넌트 레벨로 등록한 서비스는 컴포넌트가 생성될 때마다 새로운 인스턴스를 취득**

