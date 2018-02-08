# 클로저(Closure)란?

내부함수와 외부함수가 있는 관계에서 내부함수가 참조하는 외부함수를 참조할때 내부함수가 외부함수보다 life-cycle이 더 오래 살아있는 현상을 클로저라고 함

## 실행 컨텍스트 관점 클로저

내부함수가 유효한 상태에서 외부함수가 종료하여 외부함수의 실행 컨텍스트가 반환되어도, 외부함수 실행 컨텍스트 내의 **Activation object**(변수, 함수 선언 등의 정보를 가지고 있다)는 유효하여 내부함수가 **스코프 체인**을 통해 참조

## 자유변수란 ?

내부함수가 참조하고 있는 변수

## 클로저의 활용

Javascript안에서의 클로저는 강력한 기능이지만 성능이나 자원적인 면에서 손해를 볼 수 있음

> 경험을 통한 사용방법을 터특해야함

```javascript
<!DOCTYPE html>
<html>
  <body>
  <p>Counting</p>

  <button type="button" onclick="myFunction()">Count!</button>

  <p id="change_value">0</p>

  <script>
    var add = (function () {
      var counter = 0;
      return function () {
        return ++counter;
      };
    }());

    function myFunction() {
      document.getElementById('change_value').innerHTML = add();
    }
  </script>
  </body>
</html>
```

1. 변수 add에는 즉시실행함수(immediately-invoked function expression)가 호출되어 그 결과 무명함수 `function () {return ++counter;}`를 반환
2. 즉시실행함수는 한번만 실행되므로 add에 담겨있는 함수가 호출될 때마다 변수 counter가 재차 초기화될 일은 없음. 이때 중요한 것은 add에 담겨있는 함수 `function () {return ++counter;}`는 외부 함수의 변수 counter에 접근할 수 있고 변수 counter는 자신을 참조하는 함수가 소멸될 때가지 유지된다는 것인데 이러한 현상을 Closure라고 함
3. 변수 counter는 외부에서 직접 접근할 수 없는 `private` 변수이므로 전역 변수를 사용했을 때와 같이 의도되지 않은 변경을 걱정할 필요도 없음

