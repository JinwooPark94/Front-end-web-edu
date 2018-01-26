# 반응형 웹
데스크탑, 태블릿, 모바일에 모든 스크린 사이즈에 적절하게 보이는 웹사이트

## 반응형 웹 형식의 종류
- Responsive
- Flexible 
- Adaptive

# 개발 순서
- Mobile first : 모바일 환경부터 태블릿 데스크탑 순서대로 작업
- Desktop first : 데스크탑 환경부터 태블릿 모바일 순서대로 작업

## 반응형에 사용되는 단위
- **vw** : viewport 넓이
- **vh** : viewport 높이
- **vmin** : viewport 최소 넓이와 높이
- **vmax** : viewport 최대 넓이와 높이
- **em** : 스타일을 지정한 요소의 폰트 크기를 곱한 값
- **rem** : html 폰트의 기준의 폰트 값을 곱한 값

> 넓이 구하는 공식 : target / context = result

## Media query
각 디바이스에 맞는 스타일을 제공할 수 있는 기능

### HTML

	<link href="mobile.css" rel="stylesheet" media="all and (max-width:1024px)">

### CSS

    /* 데스크탑 환경 */
	@media all and (max-width: 1024px) {
      /*사용자 해상도가 1024px 이상일 때 */
    }
    
    /* 태블릿 환경 */
    @media all and (min-width:768px) and (max-width: 1024px) {
      /*사용자 해상도가 768px ~ 1024px 일 때 */
    }
    
    /* 모바일 환경 */
    @media all and (max-width: 468px) {
      /*사용자 해상도가 1024px 이상일 때 */
    }
    
    @import url(mobile.css) all and (max-width:1024px){ 
      /*사용자 해상도가 1024px 이상일 때 */
    }

## 반응형 이미지 처리

    image-test{
	  max-width:100%;
      height: auto;
    }


## 반응형 이미지 문제
1. 이미지 크기로 인한 성능/속도 및 대역폭
2. 고밀집도 디바이스 대응
3. art direction 처리
4. 다양한 이미지 포맷 대응

   - 벡터 형식의 이미지 SVG
   - 구글에서 제안 WEBP
   - 마이크로소프트 JPEG-XR
   - FLAXPIX

## 해결방안
### 1. srcset, sizes 속성
- 화면 크기에 맞춰 적절한 용량 이미지를 불러옴
- 고밀집도 디바이스에 대응가능


	<img src="small.jpg" srcset="large.jpg 1024w, medium.jpg 640w, small.jpg 320w" sizes="(min-width: 36em) 33.3vw, 100vw" alt="A rad wolf">


### 2. picture 엘리먼트
- 다양한 디바이스에 맞는 이미지를 불러옴
- 고밀집도 디바이스에 대응가능


	<picture>
    	<source media="(min-width: 40em)" srcset="big.jpg 1x, big-hd.jpg 2x">
        <source srcset="small.jpg 1x, small-hd.jpg 2x">
        <img src="fallback.jpg" alt="">
    </picture>

## 책 추천
[도서] 만들면서 배우는 모던 웹사이트 디자인 : 웹 디자인을 위한 모던 테크닉 새창

참고자료 : <a href="http://www.usefulparadigm.com/2014/11/03/processing-images-on-responsive-web/" alt="주소 연결">processing-images-on-responsive-web</a>