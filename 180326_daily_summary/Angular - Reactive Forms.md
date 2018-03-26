# Angular Forms - Reactive Forms

## 1. 리액티브 폼(Reactive Forms / 모델 기반 폼)이란?

- 리액티브 폼(모델 기반 폼)은 템플릿이 아닌 컴포넌트 클래스에서 폼 요소의 상태를 관리하는 객체인 폼 모델을 구성하는 방식
- 템플릿 기반 폼보다 비교적 복잡한 경우 사용

모듈 설정

```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 2. 리액티브 폼의 중심 클래스와 디렉티브

### 2.1 FormGroup 클래스와 formGroup/formGroupName 디렉티브

- FormGroup 인스턴스는 자신의 자식인 FormControl 인스턴스 또는 FormArray 인스턴스들을 그룹화하여 관리하기 위한 최상위 컨테이너

```typescript
const myFormGroup = new FormGroup({
  // 자식 폼 모델 인스턴스
});
```

### 2.2 FormControl 클래스와 formControlName 디렉티브

-  폼 컨트롤 요소의 값이나 유효성 검증 상태를 추적하고 뷰와 폼 모델을 동기화된 상태로 유지

```typescript
const myFormControl = new FormControl('initial value');
```

### 2.3 FormArray 클래스와 formArrayName 디렉티브

- 자바스크립트의 배열과 유사하게 FormControl 인스턴스들을 그룹화하여 관리하며 폼 컨트롤 요소가 동적으로 생성되어 그 갯수가 변화할 때 사용

```typescript
const myFormArray = new FormArray([
  new FormControl(''),
  new FormControl('')
]);
```

## 3. 리액티브 폼 유효성 검증

- 템플릿 기반 폼은 유효성 검증이 필요한 템플릿의 폼 컨트롤 요소에 required, pattern과 같은 빌트인 검증기(Built-in validator)를 선언

```typescript
class Validators {
  static min(min: number): ValidatorFn
  static max(max: number): ValidatorFn
  static required(control: AbstractControl): ValidationErrors|null
  static requiredTrue(control: AbstractControl): ValidationErrors|null
  static email(control: AbstractControl): ValidationErrors|null
  static minLength(minLength: number): ValidatorFn
  static maxLength(maxLength: number): ValidatorFn
  static pattern(pattern: string|RegExp): ValidatorFn
  static nullValidator(c: AbstractControl): ValidationErrors|null
  static compose(validators: (ValidatorFn|null|undefined)[]|null): ValidatorFn|null
  static composeAsync(validators: (AsyncValidatorFn|null)[]): AsyncValidatorFn|null
}
```

## 4. 사용자 정의 검증기

- 사용자 정의 검증기를 정의할 수 있으며 템플릿 기반 폼과 리액티브 폼 모두에 사용 가능

```typescript
// 비밀번호 확인
import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

  static match(form: AbstractControl) {
    // 매개변수로 전달받은 검증 대상 폼 모델에서 password와 confirmPassword을 취득
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;

    // password와 confirmPassword의 값을 비교한다.
    if (password !== confirmPassword) {
      // 검증에 실패한 경우, 에러 객체를 반환한다.
      return { match: { password, confirmPassword }};
    } else {
      // 검증에 성공한 경우, null을 반환한다.
      return null;
    }
  }
}
```

## 6. FormBuilder

Angular에서는 더욱 간편한 방법으로 리액티브 폼을 구성할 수 있는 FormBuilder를 제공

```typescript
 // FormBuilder를 주입받는다.
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      userid: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}')
      ]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: PasswordValidator.match }),
      hobbies: this.fb.array(['', ''])
    });
  }
```

