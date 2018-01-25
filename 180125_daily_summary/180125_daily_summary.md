# **HTML - blockquote와 q 태그**
인용문을 표현하기 위해 사용하는 태그

## **blockquote 태그**
- 주로 긴 인용문에 사용되며 출처 표시
- block 형식


	<blockquote cite="(출처 url)">
  	  <p>blockquote 테스트</p>
	</blockquote>

> cite 속성을 이용하여 출처 표시 가능

## **q 태그**
- 주로 짧은 인용문에 사용되며 출처 표시
- inline 형식
- 자동으로 태그안에 before, after content로 " " 큰 따옴표가 넣어짐


	<q cite="(출처 url)">
  	  <p>q 테스트</p>
    </q>
   
> cite 속성을 이용하여 출처 표시 가능
 
---

# **HTML - address 태그**
- 주소, 연락처, 메일, 저작권 등 정보를 위한 태그
- address안에 글꼴은 defalut 값으로 이탤릭체


	<address>
      <span>서울시 서초구</span>
      <span>전화: <a href="tel:02-1234-5678">02-1234-5678</a></span>
      <span>E-MAIL: <a href="mailto:wlsdntus2@naver.com">wlsdntus2@naver.com</a></span>
      <span>Copyright by JinwooPark</span>
    </address>

> **위의 a 태그 주소에서 tel과 mailto를 사용하면 모바일 환경에서 클릭시 자동으로 전화를 바로 거는 기능이나 메일 주소로 바로 연결하여 메일 전송이 가능**

---

# **CSS - counter 속성**
CSS를 기반하여 어떠한 값을 증가시키거나 감소시킬때 사용하는 속성

	.counter-test li{
    	counter-reset: number; /* number를 초기화시킴*/
    	counter-increment: number; /* number에 1씩 증가시킴*/
	}

	.counter-test li::before{
    	content: counter(number); /* 값을 1씩 증가시켜서 표시*/
	}

- counter-reset : 속성값 초기화 (css counter를 사용할려면 초기화가 필요함)
- counter-increment : 값을 증가시킴
- counter : counter는 counter(이름)과 counters(이름, 스타일)을 사용할 수 있음
  > **counter나 counters 함수를 사용할때에는 기본 defalut 값으로 decimal으로 설정되어 있음** 

---

# **Grid Layout**
페이지를 구조적으로 나누어 다양한 레이아웃을 구현하는 것

## **Grid Layout 구현하는 방식**
- table 방식
- float 방식
- flex 방식
- grid 방식

---

# **CSS - grid 속성**
2차원 grid 기반이며 열과 행의 라인을 기준으로 gird 설정을 하여 layout 구현

## **grid container 설정**
grid container를 설정을 하면 그 아래 있는 모든 자식 요소는 그리드 아이템   
> display: grid / inline-grid

	<div class="gird-test-div">
      <div>영역1</div>
      <div>영역2</div>
      <div>영역3</div>
      <div>영역4</div>
      <div>영역5</div>
      <div>영역6</div>
      <div>영역7</div>
      <div>영역8</div>
      <div>영역9</div>
    </div>
    
	.gird-test-div{
      display: grid / inline-grid;
    }


## **grid 열과 행 크기 설정**
grid의 열과 행의 크기를 각각 설정 가능   
> grid-template-columns, grid-template-rows

	<div class="gird-test-div">
      <div>영역1</div>
      <div>영역2</div>
      <div>영역3</div>
      <div>영역4</div>
      <div>영역5</div>
      <div>영역6</div>
      <div>영역7</div>
      <div>영역8</div>
      <div>영역9</div>
    </div>
    
	.gird-test-div{
      display: grid;
      /* 200px 200px로 나누고 나머지 공간을 하나의 column으로 나눔*/
      grid-template-columns: 200px 200px 1fr;
      grid-template-rows: 2fr 2fr 1fr;
    }

- fr란? : 컨테이너에 남아 있는 공간의 일정 비율을 나타냄   

   > 만약 grid-template-columns값을 1fr 1fr 1fr로 바꾼 후 실행하면 컨테이너 열 크기에 맞게 3개의 크기가 같은 공간을 생성 

## **grid 반복되는 구간 설정**
grid 설정 중 repeat()를 통해 반복되는 부분을 쉽게 처리 가능
> repeat()
    
	.gird-test-div{
      display: grid;
      
      /* repeat 적용 전*/
      grid-template-columns: 1fr 1fr 1fr;
      
      /* repeat 적용 후*/
      grid-template-columns: repeat(3, 1fr);
    }

## **grid 라인을 이용한 아이템 설정**
grid에서 라인을 기준으로 아이템을 설정하는데 라인은 아래와 그림과 같이 시작하며 명령어는 아래와 같음
> grid-column-start, grid-column-end, grid-row-start, grid-row-end

![grid line을 나타낸 grid 그림 출처:https://www.w3schools.com/css/css_grid.asp](./grid_lines.png)

	.gird-test-div{
        grid-column-start: 1;    /* 열 Line 1부터 시작 */
        grid-column-end: 4;    /*열 Line 4까지 */
        grid-row-start: 1;    /* 행 Line 1부터 시작*/
        grid-row-end: 3;     /* 행 Line 3까지*/
    }

> **간편하게 아래와 같이 합쳐서 사용 가능하다. (※ 처음 사용시 헷갈림 주의)**

	.gird-test-div{
        /* row-start / column-start / row-end / column-end */
        grid-area : 1 / 1 / 3 / 4      
    }

참고 : w3schools -> https://www.w3schools.com/css/css_grid_item.asp