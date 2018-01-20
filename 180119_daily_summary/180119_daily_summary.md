# **Animation**

## **애니메이션 및 시나리오 설계**
### **1. 애니메이션 이름 text-ani**
### **2. 텍스트 이동효과 (왼쪽상단 > 오른쪽 하단 / 속도조절 / 1회 / 시작점-종료점)**
  >**position, float, margin, padding** 
### **3. 글자크기 변화 (font-size)**
### **4. 투명도 (color-rgba) opacity- 상자투명도 : Transform :translate(x y) scale() skew() rotate() - 2D 함수**   


## **@keyframes**
**CSS 문법 중 하나로 애니메이션이 만들어지는 부분**

    @keyframes testAnimation{ /* keyframes 이름은 testAnimation으로 지정*/
      0% { /* 스테이지 설정 0% (from과 같음) */
        opacity: 1;
      }
      100% { /* 스테이지 설정 0% (to와 같음) */
        opacity: 0;
      }
    }

## **animation**
**위치, 크기, 색 및 불투명도를 변경하고 회전, 크기 조정, 변환 등을 진행하면서 요소에 애니메이션 효과를 설정**

## **animation-name**
@keyframes 이름을 설정

    .animation-test {
      animation-name : testAnimation;
    }

## **animation-duration**
timeframe 길이 (애니메이션 시작부터 마지막까지 총 지속시간)

    .animation-test {
      animation-duration : 4s;
    }

## **animation-timing-function**
애니메이션 속도 조절 

    .animation-test {
      animation-duration : linear;
    }

1. linear : 처음부터 끝까지 부드럽게(기본값)
1. ease : 등속운동
1. ease-in : 처음을 느리게
1. ease-out : 마지막을 느리게
1. ease-in-out : 처음과 마지막을 느리게
   


## **animation-iteration-count**
애니메이션 반복 횟수

    .animation-test {
      animation-iteration-count : infinite;
    }

## **animation-direction**
애니메이션 루프 방향 (정방향, 역방향, 번갈아가며 반복할지를 설정)

    .animation-test {
      animation-direction : normal;
    }

1. normal : 정방향으로 재생
2. reverse : 역방향으로 재생
3. alternate : 매 사이클마다 각 주기의 방향을 뒤집으며 첫 번째 반복은 정방향으로 재생
4. alternate-reverse : 매 사이클마다 각 주기의 방향을 뒤집으며 첫 번째 반복은 정방향으로 재생

## **animation-fill-mode**
애니메이션 시작/끝 

    .animation-test {
      animation-direction : normal;
    }

1. none : 애니메이션은 실행되지 않을 때 대상에 스타일을 적용하지 않음
2. forwards : 대상은 실행 된 애니메이션의 마지막 keyframe에 의해 설정된 계산 된 값
3. backwards : 애니메이션은 대상에 적용되는 즉시 첫 번째 관련 keyframe 에 정의 된 값을 적용하고  animation-delay 기간 동안 이 값
4. both : 애니메이션은 앞뒤 양쪽 모두의 규칙을 따르므로 애니메이션 속성이 양방향

## **여러가지 animation**
    .animation-test {
      animation: testAnimation 4s 1s infinite linear alternate;
    }

- 입력순서   
  name > duration > timing-function > delay > count > direction > fill-mode > play-state > 이름 > 실행속도 > 속도곡선타입 > 딜레이시간 > 반복횟수 >  진행방향 > 끝난후위치 > 실행or정지

# **HTML form 요소**
공식적으로 폼을 정의하는 요소로 이 요소의 속성으로 폼의 작동하는 방식을 정의

    <form>
      <fieldset>
        <legend>form Test</legend>
        <p>
          <input type="radio" name="number" id="number_1" value="one" />
          <label for="number_1">one</label>
        </p>
        <p>
          <input type="radio" name="number" id="number_2" value="two" />
          <label for="number_2">two</label>
        </p>
        <p>
          <input type="radio" name="number" id="number_3" value="three" />
          <label for="number_3">three</label>
        </p>
      </fieldset>
    </form>

## **1. fieldset**
같은 목적을 가진 위젯들을 편리하게 그룹화 하는 방법
## **2. legend**
공식적으로 "fieldset" 요소를 설명하는데 사용
## **3. label**
HTML 폼 위젯을 정의하는 공식적인 방법 (접근성 있는 폼을 만드는데 가장 중요한 요소)
