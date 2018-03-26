# Angular Forms - **Template-driven Forms**

## 1. 템플릿 기반 폼의 중심 디렉티브

### 1.1 NgForm 디렉티브

- NgForm 디렉티브는 폼 전체를 가르키는 디렉티브
- FormsModule을 추가하면 NgFrom 디렉티브를 선언하지 않아도 모든 form 요소에 NgFrom 디렉티브가 자동으로 적용

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
	FromsModule
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

위와 같이 설정을 해주면 NgForm이라는 객체가 생성되고 form을 이제 관리하기 시작해서 Angular에서 관리하는 form으로 변형됨

 ```html
<form ngNoForm></form>
 ```

하지만 위와 같이 HTML form 안에 선언하면 자신이 Angular가 관리하지 않게 할 수 있음

```html
<form #f="ngForm" (ngSubmit)="onNgSubmit(f)"></form>
```

> Angular에서 지정해준 ngSubmit 이벤트를 사용하여 html을 완성시킴

```html
<form #f="ngForm" (ngSubmit)="onNgSubmit(f)">
	<input type="text" name="userid" placeholder="userid" ngModel>
      <input type="password" name="password" placeholder="password" ngModel>
</form>
```

관리해야할 input 요소에는 항상 `ngModel`을 넣어 주어야 하며 `ngModel`을 넣어줌으로써 `form group`안에 input 요소를 관리 할 수 있게 객체가 생성됨

### 1.2 NgModel 디렉티브



