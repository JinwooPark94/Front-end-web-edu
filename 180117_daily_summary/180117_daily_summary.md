# **CSS 속성**
## **font-family**
텍스트의 폰트를 지정
<pre><code>font-family:"NanumGothic, sans-serif"</code></pre>
OR
<pre><code>font-family:"NanumGothic, serif"</code></pre>
> 코드 해석 : font-family에서 첫번째 "NanumGothic" 폰트가 없을시, "sans-serif" 나 "serif"를 사용 (최근에는 모바일 가독성 때문에 sans-serif를 많이 사용함)

## **nth-child**
### 1. nth-child(8)
 - 해당 요소의 8번째 요소만 변경가능하게 스타일을 줄 수 있음
 ![nth1.png](./nth1.png)
### 2. nth-child(n+6)
 - 해당 요소의 6번째 요소부터 모두 스타일을 줄 수 있음
 ![nth2.png](./nth2.png)
### 3. nth-child(-n+9)
 - 해당 요소의 반대쪽 9번째 요소부터 시작해서 모두 스타일을 줄 수 있음
 ![nth3.png](./nth3.png)
### 4. nth-child(n+4):nth-child(-n+8)
 - 해당 요소의 4번째 요소부터 반대쪽 8번째까지 스타일을 줄 수 있음
 ![nth4.png](./nth4.png)
### 5. nth-child(n+2):nth-child(odd):nth-child(-n+9)
 - 해당 요소의 2번째 부터 반대쪽 9번째 요소까지의 홀수를 구할 수 있음
 ![nth5.png](./nth5.png)
### 6. nth-child(3n+1):nth-child(even)
 - 해당 요소의 첫번째 부터 짝수를 구할 수 있음   (일반적으로 1, 4, 7, 10 이러한 식으로 흘러가지만 짝수만 포함하면 4와 10이 해당됨)   
 ![nth6.png](./nth6.png)
### 7. nth-child(even), nth-child(old)
 - 해당 요소의 짝수(even), 홀수(old)로 구분하여 스타일을 줄 수 있음
 **순서대로 사용한다고 한다면 "old"은 첫번째 스타일(홀수), "even"는 두번째 스타일(짝수)**

## **img(art 속성)**
```<img src="이미지 경로" art="이미지 설명">```   
 - art를 표시하는 이유는 이미지 경로가 안 맞을때 설명해주는 의도로 사용할 수 있는데 더 중요한 것은 장애를 가지신 분들도 정보를 얻을 수 있게 하기 위해 넣는 것이다.


# **Flexbox**
 - flex의 유연성을 뜻하며 요소들을 자유자제로 위치시키는 뜻입니다.
 > 새롭게 CSS3 명세에 반영된 레이아웃 모듈이며, 요소들이 수용된 공간을 어떻게 효과적으로 채워나갈지에 대해 고민하다가 만들어진 새로운 레이아웃 방식 

## **Flex Container - 부모**
##  **display**
그릇에 해당하는 부모 요소 (display: flex 혹은 display: inline-flex로 선언)
<pre><code>.flex-container { display: flex }</code></pre>
##  **flex-direction**
 컨테이너 안에 위치하는 자식 요소에 어떤 방향성을 줄 것인지 결정   

 ![flex_img1.png](./flex_img1.png)
 <pre><code>.flex-container { 
   display: flex;
   flex-direction: row;
  }</code></pre>
  - row : 기본 값. 아이템이 수평방향(행)으로 흐르며, 방향성은 좌에서 우
  - row-reverse : 아이템이 수평방향(행)으로 흐르며, 방향성은 우에서 좌
  - column : 아이템이 수직방향(열)으로 흐르며, 방향성은 상에서 하
  - column-reverse : 아이템이 수직방향(행)으로 흐르며, 방향성은 하에서 상

## **flex-wrap**
줄 넘김 처리

 ![flex_img2.png](./flex_img2.png)
 <pre><code>.flex-container { 
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
  }</code></pre>

 - nowrap : 기본 값. 아이템을 한 줄에 모두 표현
 - wrap : 아이템이 적정 길이 이상으로 길다면, 복수의 줄에 걸쳐 표현
 - wrap-reverse : wrap과 같지만, 방향성이 반전되어 표현. 한마디로, 역방향으로 줄 넘김이 발생

## **justify-content**
수평 방향으로 정렬하는 방식

 ![flex_img4.png](./flex_img4.png)
 <pre><code>.flex-container { 
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   justify-content: flex-start;
  }</code></pre>

 - flex-start : 아이템을 한 덩어리로 묶어, 수평방향의 시작 점에 위치
 - flex-enter : 아이템을 한 덩어리로 묶어, 수평방향의 끝 점에 위치
 - center : 아이템을 한 덩어리로 묶어, 수평방향의 중앙에 위치
 - space-between : 아이템을 컨테이너의 양쪽 끝에 맞춰 정렬
 - space-around : 컨테이너의 양쪽 끝을 기준으로 각 아이템의 전, 후에 일정한 간격의 공간을 만들어 정렬

 ## **align-items**
수직방향으로 정렬하는 방식

 ![flex_img3.png](./flex_img3.png)
 <pre><code>.flex-container { 
   display: flex;
   flex-flow: row nowrap;
   align-items:flex-start;
  }</code></pre>

 - flex-start : 아이템을 한 덩어리로 묶어, 수직방향의 시작 점에 위치
 - flex-enter : 아이템을 한 덩어리로 묶어, 수직방향의 끝 점에 위치
 - center : 아이템을 한 덩어리로 묶어, 수직방향의 중앙에 위치
 - baseline : 아이템을 컨테이너의 baseline에 맞춰 정렬
 - stretch : 컨테이너의 양쪽 끝을 기준으로 각 아이템의 전, 후에 일정한 간격의 공간을 만들어 정렬

## **align-content**
한 줄을 넘기는 아이템들을 수직방향으로 정렬 ("align-itm"과 "justify-content" 속성을 모두 가지고 있음)

 ![flex_img5.png](./flex_img5.png)
 <pre><code>.flex-container { 
   display: flex;
   flex-flow: row nowrap;
   align-items:flex-start;
  }</code></pre>

 - flex-start : 아이템을 한 덩어리로 묶어, 수직방향의 시작 점에 위치
 - flex-enter : 아이템을 한 덩어리로 묶어, 수직방향의 끝 점에 위치
 - center : 아이템을 한 덩어리로 묶어, 수직방향의 중앙에 위치
 - baseline : 아이템을 컨테이너의 baseline에 맞춰 정렬
 - space-between : 컨테이너의 수직방향 기준으로 아이템 사이의 줄(행)을 일정한 간격을 두고 정렬
 - space-around : 컨테이너의 양쪽 끝을 기준으로 각 아이템 줄(행)의 전, 후에 일정한 간격의 공간을 만들어 정렬
 - stretch : 컨테이너의 양쪽 끝을 기준으로 각 아이템의 전, 후에 일정한 간격의 공간을 만들어 정렬

 ### 자료 : beautifulcss님의 블로그 내용 참고