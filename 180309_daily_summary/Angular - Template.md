# Angular - Template

## 1. 템플릿이란?

- HTML과 Angular 고유의 템플릿 문법(Template Syntax)을 사용하여 UI의 최소 단위인 컴포넌트의 뷰를 정의
- 동적으로 변하는 데이터는 컴포넌트 클래스가 관리하며 템플릿 문법의 데이터 바인딩에 의해 정적 HTML에 포함

![template](http://poiemaweb.com/img/template.png)



> Angular는 컴포넌트 기반 개발 프레임워크이며 MVC, MVVM 패턴과 일치하지 않지만 템플릿은 뷰를 나타내고 컴포넌트 클래스는 Controller와 ViewModel의 일부를 담당함 

1. 모델(Model)

- 애플리케이션에서 사용되는 데이터의 형식
- 비즈니스 로직, 유효성 검사 로직 및 그 외의 다양한 기능을 포함할 수도 있음

2. 뷰(View)

- 사용자에게 모델(데이터)을 표시하는 것
- 같은 모델을 다양한 방식으로 표현 가능

3. 컨트롤러(Controller)

- 모델과 뷰의 상호 작용을 감시하고 업데이트

4. 뷰모델(ViewModel)

- MVC 패턴에서는 컨트롤러가 모델과 뷰 간의 상호 작용을 담당하였지만 MVVM 패턴에서는 해당 뷰가 데이터 바인딩을 통해 컨트롤러의 역할을 담당

### 1.1 데이터 바인딩

DOM의 상태가 변화하면 템플릿은 변화를 감지하고 변화된 상태를 컴포넌트 클래스로 전달

> 뷰와 모델은 분리되어 있지만 상태는 공유

![angular-view-model](http://poiemaweb.com/img/angular-view-model.png)

Angular는 변화 감지(Change detection) 메커니즘 위에서 동작하는 데이터 바인딩(Data binding)을 통해 템플릿과 컴포넌트 클래스를 긴밀히 연결하고 동기화를 유지

![databinding & change detection](http://poiemaweb.com/img/databinding-changedetection.png)



```html
<!-- 인터플레이션 -->
{{ title }}
<!-- 프로퍼티 바인딩 -->
[ title ]
<!-- 이벤트 바인딩 -->
( title )
<!-- 양방향 바인딩 -->
[{ title }]
```

## 2. 템플릿 문법(Template Syntax)

- 템플릿을 작성하기 위한 Angular 고유의 확장 표기법으로 템플릿과 컴포넌트 클래스 간 데이터 공유를 위한 데이터 바인딩과 동적으로 DOM 구조, 스타일 등을 변경할 수 있는 빌트인 디렉티브 등을 지원
- 정적인 뷰는 HTML만으로 정의할 수 있지만 컴포넌트와 연계하여 동적으로 변화하는 뷰를 정의하기 위해서 템플릿 문법을 사용

- 데이터 바인딩
  - 인터폴레이션(Interpolation)
  - 프로퍼티 바인딩(Property binding)
  - 어트리뷰트 바인딩(Attribute binding)
  - 클래스 바인딩(Class binding)
  - 스타일 바인딩(Style binding)
  - 이벤트 바인딩(Event binding)
  - 양방향 데이터 바인딩(Two-way binding)
- 빌트인 디렉티브(Built-in directive)
  - 빌트인 어트리뷰트 디렉티브(Built-in attribute directive)
    - ngClass
    - ngStyle
  - 빌트인 구조 디렉티브(Built-in structural directive)
    - ngIf
    - ngFor
    - ngSwitch
- 템플릿 참조 변수(Template reference variable)
- 템플릿 표현식 연산자(Template expression operator)

> html, body, base 요소는 템플릿 내 사용 금지 항목은 아니지만 사용하면 안됨
>
> 설명: 최상위 컴포넌트인 루트 컴포넌트는 html, body 요소의 자식 요소이고 모든 컴포넌트는 루트 컴포넌트의 자식 컴포넌트이기 때문에 컴포넌트의 뷰는 언제나 html, body 요소의 자식 요소이다. 따라서 컴포넌트 템플릿에서 html, body 요소를 사용하면 html, body 요소는 중복된다. base 요소는 head 요소 내에 포함되는 요소로서 상대경로의 루트를 정의한다. Angular는 src/index.html에 base 요소를 사용하여 상대경로 루트를 정의해 두었기 때문에 컴포넌트에서 base 요소를 사용할 이유는 없다.