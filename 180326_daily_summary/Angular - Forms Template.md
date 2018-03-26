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

- NgModel 디렉티브는 자신이 적용된 폼 컨트롤 요소에 해당하는 FormControl 인스턴스를 생성


- 폼을 구성하는 기본 단위로서 폼 컨트롤 요소의 값이나 유효성 검증 상태를 추적하고 뷰와 폼 모델을 동기화된 상태로 유지

```html
<input type="text" name="userid" ngModel #userid="ngModel">

<!-- 템플릿 참조 변수를 통해 폼 컨트롤 요소의 값을 참조 -->
<p>userid value: {{ userid.value }}</p>
<!-- 템플릿 참조 변수를 통해 폼 컨트롤 요소의 유효성 검증 상태를 참조 -->
<p>userid valid: {{ userid.valid }}</p>
```

### 1.3 NgModelGroup 디렉티브

- NgForm 디렉티브와 유사하게 FormGroup 인스턴스를 생성

```typescript
// user-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'user-form',
  template: `
    <form #userForm="ngForm" (ngSubmit)="onNgSubmit(userForm.value)">
      <input type="text" name="userid" placeholder="id" ngModel>
      <div ngModelGroup="password">
        <input type="password" name="password1" placeholder="password" ngModel>
        <input type="password" name="password2" placeholder="confirm password" ngModel>
      </div>

      <input type="submit" value="submit">
    </form>
  `
})
export class UserFormComponent {
  onNgSubmit(user) {
    console.log(user);
    /*
      { userid: "myid",
        password: { password1: "11", password2: "11" }
      }
    */

    // 패스워드와 확인 패스워드의 일치 여부 확인
    if (user.password.password1 !== user.password.password2) {
      console.log('패스워드가 일치하지 않습니다!');
    }
  }
}
```

## 3. NgModel과 양방향 바인딩

NgModel 디렉티브에 양방향 바인딩 방법인 `[()]` 문법을 사용하여 폼 컨트롤 요소의 상태 값과 컴포넌트 클래스의 상태값을 공유

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="name">
    <p>name: {{ name }}</p>
  `
})
export class AppComponent {
  name = 'Park';
}
```

## 4. 템플릿 기반 폼 유효성 검증

- NgForm, NgModel, NgModelGroup 디렉티브가 폼 컨트롤 요소에 적용되면 FormGroup 또는 FormControl 인스턴스를 생성


- FormGroup과 FormControl는 유효성 검증 기능을 제공

| 유효성 검증 상태 프로퍼티 | 의미                                                         |
| ------------------------- | ------------------------------------------------------------ |
| errors                    | 유효성 검증에 실패한 경우, [ValidationErrors](https://angular.io/api/forms/ValidationErrors) 타입의 에러 객체를 반환한다. 유효성 검증에 성공한 경우, null를 반환한다. |
| valid                     | 유효성 검증에 성공한 상태이면 true                           |
| invalid                   | 유효성 검증에 실패한 상태이면 true                           |
| pristine                  | 값을 한번도 입력하지 않은 상태이면 true                      |
| dirty                     | 값을 한번 이상 입력한 상태이면 true                          |
| touched                   | focus in이 한번 이상 발생한 상태이면 true                    |
| untouched                 | focus in이 한번도 발생하지 않은 상태이면 true                |