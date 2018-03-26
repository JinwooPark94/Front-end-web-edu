# Angular Forms - Basics

- HTML 표준 폼으로도 어느 정도의 유효성 검증이 가능하고 사용자의 데이터를 서버로 전송할 수 있지만 한계가 있음
- Angular는 HTML 표준 폼의 단점과 한계를 보안한 `템플릿 기반 폼`, `리액티브 폼`을 제공

## HTML 표준 폼

HTML에서 제공하는 표준 폼을 사용하여도 어느 정도의 유효성 검증이 가능하고 폼 데이터를 서버로 전송 가능

```HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Signup</title>
</head>
<body>
  <form action="/signup" method="POST">
    <input type="email" name="email" placeholder="Email"
      pattern="^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
      required>
    <input type="password" id="password1" name="password1"
      placeholder="Password" pattern="^[a-zA-Z0-9]{4,10}$"
      required>
    <input type="password" id="password2" name="password2"
      placeholder="Confirm Password" pattern="^[a-zA-Z0-9]{4,10}$"
      required>
    <input type="submit" name="submit" value="Signup">
  </form>
  <script>
    const pw1 = document.getElementById('password1');
    const pw2 = document.getElementById('password2');

    function validatePassword() {
      if (pw1.value !== pw2.value) {
        pw2.setCustomValidity('패스워드가 일치하지 않습니다');
      } else {
        pw2.setCustomValidity('');
      }
    }

    pw1.addEventListener('change', validatePassword);
    pw2.addEventListener('change', validatePassword);
  </script>
</body>
</html>
```

> 단점
>
> 1. submit 버튼이 클릭되면 서버로 폼 데이터를 전송하고 페이지를 전환
> 2. HTML 표준 폼이 제공하는 required, pattern, max, min, maxlength, minlength, step과 같은 유효성 검증 어트리뷰트를 사용하여 유효성을 검증할 수 있는데 명확한 에러 정보를 제공하지 않음
> 3. 세밀한 유효성 검증을 위해 로직을 추가해야 하며 연관된 필드의 유효성 검증이 필요한 경우, 연관 필드 모두를 검사

## 2. Angular 폼

Angular에서 제공하는 사용자 입력 데이터의 유효성

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" (keyup.enter)="checkValue($event.target.value)">
    <em>{{ checkResult }}</em>
  `
})
export class AppComponent {

  checkResult: string;

  checkValue(value) {
    if (value.length > 3) {
      this.checkResult = '';
    } else {
      this.checkResult = '4자 이상 입력하세요';
    }
  }
}
```

> 위에서 나온 폼은 간단한 폼일 때 유용한 방법이지만 복잡한 폼의 경우 보다 효과적인 