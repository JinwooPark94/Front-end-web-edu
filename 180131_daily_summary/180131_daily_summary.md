
# **알고리즘 문제 풀기**
1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.   
    ex)
    0
    2
    4
    6
    8

2. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 작은 수부터 문자열로 출력하고, for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.   
    
    ex) 0 2 4 6 8   

    ex)   
    9   
    7   
    5   
    3   
    1

3. while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.   

    ex)
    0
    2
    4
    6
    8

4. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.   

    ex)
    9
    7
    5
    3
    1

5. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오   
    ex) 45

6. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
1, 5, 7, 11, 13, 17, 19 => 73

7. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16,18, 20 => 137

8. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하는 코드를 작성하시오.   
[ 1, 5 ]   
[ 2, 4 ]   
[ 3, 3 ]   
[ 4, 2 ]   
[ 5, 1 ]

9. 삼각형출력하기
다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.   
개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관게없다.

10. 트리 출력하기
다음을 참고하여 *(별)로 트리를 문자열로 완성하라.   
개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계 없다.


### **문제 1 : for문으로 짝수 구하기**
    function evenNumber(){
        for(var i=0;i<10;i++){
            if(i%2 === 0) 
            console.log(i);
        }
    }
    evenNumber();

### **문제 2 : for문으로 홀수 구하기**

    function oddNumber() {
        var strNumber = '';
        for (var i = 10; i > 0; i--) {
            if (i % 2 === 1) strNumber += i;
        }
        console.log(strNumber);
        for (i = 10; i > 0; i--) {
            if (i % 2 === 1) console.log(i);
        }
    }
    oddNumber();

### **문제 3 : while문으로 짝수 구하기**

    function evenNumberwhile() {
        var i = 0;
        while (i < 10) {
            if (i % 2 === 0) console.log(i);
            i++;
        }
    }
    evenNumberwhile();

### **문제 4 : while문으로 홀수 구하기**

    function oddNumberwhile() {
        var i = 10;
        while (i > 0) {
            if (i % 2 === 1) console.log(i);
            i--;
        }
    }
    oddNumberwhile();

### **문제 5 : for문으로 0부터 10미만까지 정수의 합 구하기**

    function sumNumber() {
        var sum = 0;
        for(var i=0;i<10;i++){
            sum += i;
        }
        console.log(sum);
    }
    sumNumber();

### **문제 6 : 1부터 20까지 정수중 2 또는 3의 배수가 아닌 수의 합**

    function sumelseEONumber(number) {
        var sum = 0;
        for (var i = 0; i <= number;i++){
            if(i % 2 === 0 || i % 3 === 0) continue;
            sum += i;
        }
        console.log(sum);
    }
    sumelseEONumber(20);

### **문제 7 : 1부터 20까지 정수중 2 또는 3의 배수의 합**

    function sumEONumber(number) {
        var sum = 0;
        for (var i = 0; i <= number; i++) {
            if (i % 2 === 0 || i % 3 === 0) sum += i;
        }
        console.log(sum);
    }
    sumEONumber(20);

### **문제 8 : 주사위 두 개를 던졌을때 눈의 합이 6이 되는 모든 경우 출력**

    function sumDice() {
        for(var i=1;i<=6;i++){
            for(var j=1;j<=6;j++){
                if( (i + j) === 6) console.log('['+i+','+j+']');
            }
        }
    }
    sumDice();

### **문제 9 : 삼각형 출력**

    // 방법 1 : for문 한번 사용
    function showTriangle(number) {
        var star = '';
        for (var i = 1; i <= number; i++) {
            star += '*';
            console.log(star);
        }
    }
    showTriangle(5);

    // 방법 2 : 이중 for문 사용
    function showTriangle(number) {
        var star = '';
        for (var i = 1; i <= number; i++) {
            for (var j = 1; j <= i; j++) {
                star += '*';
            }
            console.log(star);
        }
        star = '';
    }
    showTriangle(5);

### **10. 문제 10 : 트리 출력** 

    // 방법 1 : 위에 9번에 있는 함수를 2번 호출하여 만든다.
    showTriangle(3);
    showTriangle(5);

    // 방법 2 : for문 한번 사용
    function showTree(number) {
        var fstStar = '';
        var scdStar = '';
        for (var i = 1; i <= number+5; i++) {
            fstStar += '*';
            if(i <= number){
                console.log(fstStar);  
            }else{
                scdStar += '*';
                console.log(scdStar);
            }
        }
    }
    showTree(3);

    // 방법 3 : 2개의 for문 사용
    function showTree(number) {
        var star = '';
        for (var i = 1; i <= number; i++) {
            star += '*';
            console.log(star);
        }
        star = '';
        for (i = 1; i <= number + 2; i++) {
            star += '*';
            console.log(star);
        }
    }
    showTree(3);

# **Sass** (Syntactically Awesome StyleSheets)
## **Sass 란?**
- Hampton Catlin이 설계하고 Nathan Weizenbaum가 개발한 스타일 시트 언어
- 기초 언어(CSS)에 결함을 보정하면서 추가 기능과 유용한 도구를 제공하기 위해 개발됨
- CSS를 확장하는 스크립팅 언어로 컴파일러를 통해 일반 CSS 문법 형태로 변환 (CSS pre-processor)

## **Sass 장점**
- 코드 재활용성 높여줌
- 코드 가독성 높여줌
- 간단한 표기법으로 CSS를 구조화하여 표현 가능
- 여러명이서 작업 시 발생하는 구문의 수준 차이를 평준화

## **Sass 단점**
- Ruby로 만들어짐 
  > 단점을 보완할 Node기반의 Sass가 나옴

## **Scss 란?**
2010년 5월 sass 버전 업데이트로 기존 Sass 문법을 줄이고 CSS문법을 살린 SCSS가 나옴
- CSS가 지원하는 모든 문법과 기능을 사용 가능

### **Sass에 기존 CSS에 없던 추가된 기능**
- 변수, 조건문, 반복문 기능
- import 기능
- Mixin 기능
- Extend / Inheritance 기능
- Nesting 기능

### **SCSS 특징과 Sass 특징 비교**
**SCSS**
- 구문은 CSS와 유사함
- 중괄호 사용 -> {}
- 세미콜론 사용 -> ;
- 변수 기호 -> $
- 지정 표시 -> :
- 확장자명 -> .scss

	  $width: 100px;
      $color: green;

      div {
        width: $width;
        background-color: $color;
      }

**Sass**
- 구문은 Ruby와 유사함
- 중괄호 사용 X
- 엄격한 들여쓰기 X
- 세미콜론 X
- 변수 기호 -> ! $
- 할당 부호 -> =
- 확장자명 -> .sass

      $width: 100px
      $color: green

      div
        width: $width
        background-color: $color


> Sass를 개발한 개발자는 SCSS와 Sass의 큰 차이점은 UI라고 함   
(UI만 다르기 때문에 SCSS, Sass 서로 convert로 변환 가능)
		  
    $ sass-convert style.sass style.scss
    $ scss-convert style.scss style.sass


