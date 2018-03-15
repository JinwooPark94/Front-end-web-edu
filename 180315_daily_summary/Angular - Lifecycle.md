# Angular - Pipe

## 1. 생명주기(Lifecycle)

- 생명주기는 생성하고 소멸되기까지의 여러 과정을 말하며 Angular에 의해 관리


- 생명주기를 통해 컴포넌트와 디렉티브를 생성하고 렌더링하며 프로퍼티의 변화를 체크하고 DOM에서 제거하는 일련의 과정을 관리

![lifecycle hooks](http://poiemaweb.com/img/hooks-in-sequence.png)

## 2. 생명주기 훅 메소드(Lifecycle hooks)

- OnInit 생명주기에 실행되어야 할 행위를 정의하기 위해서는 훅 메소드 ngOnInit을 구현
- ngoninit은 일반 프로퍼티와 input, output 등 모든 프로퍼티의 초기화가 완료된 시점

```typescript
// child.component.ts
import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>child component</p>
    <p>부모 컴포넌트가 전달한 값: {{ prop }}</p>
  `
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() prop: string;

  constructor() {
    console.log('[construnctor]');
    console.log(`prop: ${this.prop}`); // prop: undefined
    this.prop = 'TEST';
    console.log(`prop: ${this.prop}`); // prop: TEST
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChanges]');
    console.log(`prop: ${this.prop}`); // prop: Hello
    console.log('changes:', changes);
  }

  ngOnInit() {
    console.log('[OnInit]');
    console.log(`prop: ${this.prop}`); // prop: Hello
  }

  ngDoCheck() {
    console.log('[DoCheck]');
  }

  ngAfterContentInit() {
    console.log('[ngAfterContentInit]');
  }

  ngAfterContentChecked() {
    console.log('[ngAfterContentChecked]');
  }

  ngAfterViewInit() {
    console.log('[ngAfterViewInit]');
  }

  ngAfterViewChecked() {
    console.log('[ngAfterViewChecked]');
  }

  ngOnDestroy() {
    console.log('[ngOnDestroy]');
  }
}
```

```code
[construnctor]
prop: undefined
prop: TEST
[OnChanges]
prop: Hello
changes: {prop: SimpleChange}
          prop: SimpleChange {previousValue: undefined, currentValue: "Hello", firstChange: true}
          __proto__: Object
[OnInit]
prop: Hello
[DoCheck]
[ngAfterContentInit]
[ngAfterContentChecked]
[ngAfterViewInit]
[ngAfterViewChecked]
```

### 2.1 ngOnInit

- **모든 프로퍼티와 입력 프로퍼티의 초기화가 완료된 시점에 한번만 호출**
- **컴포넌트 프로퍼티의 참조는 ngOnInit 이후 보장**
- **프로퍼티의 초기화 처리는 constructor가 아닌 ngOnInit에서 수행하는 것이 좋음**

> constructor에서 프로퍼티를 초기화하면 ngOnInit에서 재차 입력 프로퍼티 초기화가 실행되어 constructor에서 실행한 프로퍼티 초기화 값을 덮어씀