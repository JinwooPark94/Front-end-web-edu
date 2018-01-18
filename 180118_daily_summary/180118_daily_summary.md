# **html lang 속성**
    <html lang="ko">
**lang 속성에 명시된 값을 통해 스크린 리더가 인식**
> 시각장애인을 위한 보조공학 (웹 접근성) 

# **viewport 값**
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
## **meta**
**장치의 화면 너비를 따르도록 페이지 폭을 설정**
## **content="width=device-width"**
페이지가 브라우저에 의해 처음로드 될 때 초기 확대 / 축소 레벨을 설정
## **content="initial-scale=1.0"**
페이지의 크기와 스케일링을 제어하는 방법에 브라우저 지침
# **X-UA-Compatible**
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

  IE 웹 브라우저에서 해당 웹 문서를 읽을 때 자동으로 호환성 보기 기능이 활성화
  - IE=5 : 관용모드(quirks mode)로 지정된 DOCTYPE에 상관없이 IE5 렌더링 방식이 사용
  - IE=7 : IE7 표준모드로 지정된 DOCTYPE에 상관없이 IE7 표준 모드 렌더링 방식이 사용
  - IE=EmulateIE7 : IE7 에뮬레이션 모드로 지정된 DOCTYPE에 따라 IE7 표준모드나 관용모드로 렌더링
  - IE=8 : IE8 표준모드로 지정된 DOCTYPE에 상관없이 IE8 표준모드로 렌더링
  - IE=EmulateIE8 : IE8 에뮬레이션 모드로 지정된 DOCTYPE에 따라 IE8 표준모드나 관용모드로 렌더링
  - IE=edge : 최신모드로 지정된 DOCTYPE에 상관없이 IE8 이상 버전에서 항상 최신 표준 모드로 렌더링

<hr/>

# **span**
특별한 기능을 갖고있지 않고 display 속성이 block이 아닌, inline이
inline 상자

    <span>span 내용</span>

<hr/>

# **float**
텍스트 및 인라인(inline) 요소가 그 주위를 감싸는 자기 컨테이너의 좌우측을 따라 배치되어야 함

    div { 
      float:right;
    }

## **left**
요소가 자신의 포함 블록의 좌측에 부동(float, 떠움직여)해야 함을 나타내는 키워드
## **right**
는 요소가 자신의 포함 블록의 우측에 부동해야 함을 나타내는 키워드
## **none**
요소가 부동하지 않아야 함을 나타내는 키워드
## **inline-start** 
는 요소가 자신의 포함 블록의 시작쪽에 부동해야 함을 나타내는 키워드 즉, ltr(left to right) 스크립트 상에서 왼쪽 그리고 rtl(right to left) 스크립트 상에서는 오른쪽.
## **inline-end**
는 요소가 자신의 포함 블록의 끝쪽에 부동해야 함을 나타내는 키워드입니다. 즉, ltr 스크립트 상에서 오른쪽 그리고 rtl 스크립트 상에서는 왼쪽.

# **clear**
부동 요소의 어느면에 부동 요소가 허용되지 않는지 지정   
(inline 상자에서만 사용 가능)

    img {
      float: left;
    }

    p.clear {
      clear: both;
    }

## **none**
요소가 지난 부동 요소를 해제하기 위해 아래로 이동되지 않음을 나타내는 키워드
## **left**
요소가 지난 left 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드
## **right**
요소가 지난 right 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드
## **both**
요소가 지난 both left 및 right 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드
## **inline-start**
요소가 포함 블록의 시작 쪽 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다, 즉 ltr 스크립트의 left 부동체 및 rtl 스크립트의 right 부동체.
## **inline-end** 
요소가 포함 블록의 끝 쪽 부동체를 해제하기 위해 아래로 이동됨을 나타내는 키워드입니다, 즉 ltr 스크립트의 right 부동체 및 rtl 스크립트의 left 부동체

# **white-space**
어떤 요소(element) 안의 공백(whitespace)이 어떻게 처리될지를 나타내는데 사용

    p{
      white-space: normal;
    }

## **normal**
연속된 공백이 하나로 병합되며 소스 안의 줄바꿈 문자는 다른 공백 문자와 같이 취급. 줄 박스를 채우기 위해 필요에 따라 줄을 끊음
## **nowrap**
normal 과 같이 공백 문자를 병합하지만, 텍스트 줄바꿈을 하지 않음
## **pre**
연속된 공백이 보존. 줄은 오로지 소스의 줄바꿈 문자나 요소에서만 끊어짐
## **pre-wrap**
연속된 공백이 보존. 줄은 줄바꿈 문자, 그리고 줄 박스를 채우기 위해 필요에 따라 끊어짐
## **pre-line**
연속된 공백이 병합. 줄은 줄바꿈 문자, 그리고 줄 박스를 채우기 위해 필요에 따라 끊어짐
