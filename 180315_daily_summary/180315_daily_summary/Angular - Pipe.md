# Angular - Pipe

## 1. Pipe 란?

**데이터 자체를 변경하는 것은 사이드 이펙트가 있으므로 화면에 표시 형식만 변경하고 싶을 때 사용하는 것**

### 1.1 파이프 기본 사용 방법

```html
{{ value | PipeName }}
<!-- parameter -->
{{ value | PipeName : customOption1 : customOption2 }}
<!-- chainning -->
{{ value | PipeName1 | PipeName2 }}
```

### 이전 방식

```javascript
const today = new Date();

console.log(today.toString()); // Sat Sep 23 2017 00:26:55 GMT+0900 (KST)
```

### 파이프 사용

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ today }}</p>
    <p>{{ today | date }}</p>
    <p>{{ today | date: 'y년 MM월 dd일 hh시 mm분 ss초' }}</p>
  `
})
export class AppComponent {
  today = new Date();
}

//결과
/*
	Sat Sep 23 2017 00:26:55 GMT+0900 (KST)
	Sep 23, 2017
	2017년 09월 23일 12시 26분 55초
*/
```

## 2. 파이프 종류

| 파이프                                                   | 의미             |
| -------------------------------------------------------- | ---------------- |
| [date](https://angular.io/api/common/DatePipe)           | 날짜 형식 변환   |
| [JSON](https://angular.io/api/common/JsonPipe)           | JSON 형식 변환   |
| [uppercase](https://angular.io/api/common/UpperCasePipe) | 대문자 변환      |
| [lowercase](https://angular.io/api/common/LowerCasePipe) | 소문자 변환      |
| [currency](https://angular.io/api/common/CurrencyPipe)   | 통화 형식 변환   |
| [percent](https://angular.io/api/common/PercentPipe)     | 퍼센트 형식 변환 |
| [decimal](https://angular.io/api/common/DecimalPipe)     | 자리수 형식 변환 |
| [slice](https://angular.io/api/common/SlicePipe)         | 문자열 추출      |
| [async](https://angular.io/api/common/AsyncPipe)         | 비동기 객체 출력 |

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-root',
  template: `
    <h3>DatePipe</h3>
    <p>{{ today | date: 'y년 MM월 dd일 hh시 mm분 ss초' }}</p>

    <h3>CurrencyPipe</h3>
    <!-- 한국원:통화기호표시:소숫점위 최소 1자리 소숫점아래 1~2 -->
    <p>{{ price | currency: 'KRW':true:'1.1-2' }}</p>

    <h3>SlicePipe : array</h3>
    <!-- slice:start[:end] -->
    <ul>
      <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
    </ul>

    <h3>SlicePipe : string</h3>
    <p>{{ str | slice:0:4 }}</p>

    <h3>JsonPipe</h3>
    <pre>{{ object | json }}</pre>

    <h3>DecimalPipe</h3>
    <p>{{ pi | number:'3.5' }}</p>

    <h3>PercentPipe</h3>
    <p>{{ num | percent:'3.3' }}</p>

    <h3>UpperCasePipe</h3>
    <p>{{ str | uppercase }}</p>

    <h3>LowerCasePipe</h3>
    <p>{{ str | lowercase }}</p>

    <h3>AsyncPipe</h3>
    <p>{{ second$ | async }}</p>
  `
})
export class AppComponent {
  today = new Date();
  price = 0.1234;
  collection: string[] = ['a', 'b', 'c', 'd'];
  str = 'abcdefghij';
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3 } };
  pi = 3.141592;
  num = 1.3495;
  // 1s마다 값을 방출하고 10개를 take한다. (0 ~ 9)
  second$ = Observable.interval(1000).take(10);
}
```

## 3. 체이닝 파이프

여러개의 파이프를 조합하여 결과 출력이 가능

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>SlicePipe + UpperCasePipe</h3>
    <p>{{ name | slice:4 | uppercase }}</p>
  `
})
export class AppComponent {
  name = 'Lee ung-mo';
}
```

## 4. 커스텀 파이프

커스텀을 사용하여 filter 기능을 구현할 수 있음

```bash
$ ng generate pipe reverse
```

```typescript
// reverse.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value = ''): string {
    return value.split('').reverse().join('');
  }
}
```

> 커스텀 파이프는 빌트인 파이프와 동일한 방법으로 탬플릿에서 사용

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="value">
    <p>{{ value | reverse }}</p>
  `
})
export class AppComponent {
  value: string;
}
```

## 5. 파이프와 변화 감지(Change detection)

- 뷰와 모델의 동기화를 유지하기 위해 변화를 감지
- 상태의 변화를 감지하여 뷰에 반영하는 것으로 데이터 바인딩은 변화 감지 매커니즘의 토대 위에서 수행
- 비순수 파이프(impure pipe)를 제공

## 6. 순수 파이프(pure pipe)와 비순수 파이프(impure pipe)

- `@Pipe` 데코레이터의 메타데이터 pure 프로퍼티에 false를 지정하면 비순수 파이프로 변환

```typescript
// limit.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit',
  pure: false
})
export class LimitPipe implements PipeTransform {
  transform(todos: any[], limit: number): any {
    return todos.filter((el, i) => i < limit);
  }
}
```

> **필요한 경우가 아니라면 파이프보다는 컴포넌트의 프로퍼티를 사용하는 편이 유리**

