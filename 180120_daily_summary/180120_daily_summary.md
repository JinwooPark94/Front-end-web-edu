# **HTML5 dl, dt, dd 태그**

## **dl(definition list) 태그**
**용어를 설명하는 목록을 만들때 사용**
## **dt 태그(definition term)**
**용어의 제목을 넣을때 사용**
## **dd 태그(definition description)**
**용어를 설명하는데 사용**

    <dl> <!-- 용어 설명하는 목록 -->
      <dt>용어의 제목</dt>
      <dd>용어의 설명</dd>
    </dl>

**중요!!**   
**dl 태그 안에 div 태그를 쓰고 싶다면 dt와 dd를 감싸놓은 상태로 사용해야한다. div는 dt, dd은 형제 노드 관계로 dt나 dd 안에 사용할 수 없다.**

    <dl> 
      <div>
        <dt>test</dt>
        <dd>dl</dd>
      </div>
    </dl>

# **CSS background 속성**
## **background-image**
**배경에 이미지를 넣는 속성**

    .css-background-test{
      background-image: url("이미지 경로");
    }

## **background-repeat**
**배경 이미지를 반복 설정 하는 속성**

    .css-background-test{
      background-repeat: no-repeat / repeat / repeat-x / repeat-y
    }

1. no-repeat : 반복하지 않음
2. repeat : 반복(기본값)
3. repeat-x : x축 기준으로 반복
4. repeat-y : y축 기준으로 반복

## **background-attachment**
**배경 이미지를 고정시키거나 스크롤 할때 움직이게 할 수 있는 속성**

    .css-background-test{
      background-attachment: scroll (기본값) / fixed;
    }

1. scroll : 스크롤바가 움직일때 배경도 움직임(기본값)
2. fix : 스크롤바가 움직여도 배경은 고정

## **background-size**
**배경 이미지를 고정시키거나 스크롤 할때 움직이게 할 수 있는 속성**

    .css-background-test{
      background-size: auto (기본값) / 100px 100px;
    }

1. auto : 기본 크기(기본값)
2. 00px 00px : 가로 세로 크기

## **background-position**
**배경 이미지의 위치를 조절할 수 있는 속성**

    .css-background-test{
      background-position: left top / 100px 100px;
    }

1. left top : 왼쪽 상단에 위치
2. 00px 00px : 가로 세로 위치

## **background-color**
**배경에 색깔을 넣는 속성**

    .css-background-test{
      background-color: #fff / red / rgb(0,0,0);
    }


## **background**
**배경 관련 속성들을 한꺼번에 표현하는 속성**

    .css-background-test{
      background: url('./jinwoo.png') no-repeat left top fixed;
    }
