## 문제 1.  이상한 문자만들기

toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라. 

예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.  

주의) 문자열 전체의 짝 / 홀수 인덱스가 아니라 단어(공백을 기준)별로 짝 / 홀수 인덱스를 판단한다. 

```javascript
function toWeirdCase(s) {
  var objStr = s.toUpperCase().split('');

  // 변수 UpperArea의 값이 0이면 대문자, 1이면 소문자
  var UpperArea = 0;

  for (var i = 0; i < objStr.length; i++ ){

    // 값이 빈 공백이라면 UpperArea를 0으로 수정
    if (objStr[i] === ' '){
      UpperArea = 0;
      continue;
    }

    // 대문자 구간
    if (UpperArea === 0){
      UpperArea++;
    }
    // 소문자 구간
    else {
      objStr[i] = objStr[i].toLowerCase();
      UpperArea--;
    }

  }
  return objStr.join('');
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
```



## 문제 2. 핸드폰번호 가리기 

핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 *으로 바꿔야 한다. 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라 

예를들어 s가 '01033334444'면 *******4444를 리턴하고, '027778888'인 경우는 *****8888을 리턴한다. 

```javascript
// 핸드폰번호를 값으로 받으면 맨 뒷자리 4자리를 제외한 나머지를 *으로 바꾸어줌
function hideNumbers(str){
  var star = '';
  //맨 뒷자리 길이 선언
  var lastLength = str.length - 4;

  for (var i = 0; i < lastLength; i++){
    star += '*';
  }

  return str.replace(str.substring(0, lastLength), star);

}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888
```



## 문제 3. 문자열을 숫자로 바꾸기

strToInt 메소드는 문자열 str을 매개변수로 받는다. str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라.

예를들어 str이 '1234'이면 1234를 반환하고, '-1234'이면 -1234를 반환한다.

str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.

```javascript
function strToInt(str){
  // 방법 1
  var num = +str;

  // 방법 2
  //var num = parseInt(str);

  // 방법 3
  //var num = Number(str);

  // 방법 4
  //var num = str * 1;

  return num;
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234
```



## 문제 4. 수박수박수박수박수박수?

waterMelon 함수는 정수 n을 매개변수로 입력받는다.

길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴한다. 

```javascript
function waterMelon(n){
  var str = '';
  for (var i = 0; i < n; i++){
    (i % 2 === 1) ? str += '박' : str += '수';
  }
  return str;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));
```