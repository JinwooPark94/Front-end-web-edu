# 수학 상수와 함수를 위함 built-in 객체

- 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체
- 별도의 생성자가 없는 정적(static) 프로퍼티와 메소드

## Math Property

### Math.PI

PI 값(π ≈ 3.141592653589793)을 반환

```javascript
Math.PI; // 3.141592653589793
```



## Math Method

### 1. Math.abs()

반드시 0 또는 양수이어야하는 절댓값(absolute value)을 반환

```javascript
Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('string'); // NaN
Math.abs();         // NaN
```

### 2. Math.round()

숫자를 가장 인접한 정수로 올림/내림

```javascript
ar x;

// Returns the value 20
x = Math.round(20.49);

// Returns the value 21
x = Math.round(20.5);

// Returns the value -20
x = Math.round(-20.5);

// Returns the value -21
x = Math.round(-20.51);
```

### 3. Math.sqrt()

양의 제곱근 반환

```javascript
Math.sqrt(9); // 3
```

### 4. Math.ceil()

지정된 숫자를 자신보다 큰, 가장 가까운 정수로 올림

```javascript
Math.ceil(1.4); // 2
```



### 5. Math.floor()

지정된 숫자를 자신보다 작은, 가장 가까운 정수로 내림

> 소숫점 이하의 값을 제거한 정수

```javascript
Math.floor(1.9); // 1
Math.floor(9.1); // 9
```

### 6. Math.random()

0과 1 사이의 임의의 숫자를 반환

> 0은 포함되지만 1은 포함되지 않음

```javascript
console.log(Math.random()); // 0 ~ 1 미만의 소수 (0.8208720231391746)

// 랜덤 정수 취득
var randomNum = Math.floor((Math.random() * 10) + 1); // 1 ~ 10의 정수
console.log(randomNum);
```

### 7. Math.pow()

첫번째 인수를 밑, 두번째 인수를 지수로하여 거듭제곱함

```javascript
Math.pow(7, 2) // 49
Math.pow(2, 5) // 32
```

### 8. Math.max()

argument 중에서 가장 큰 수를 반환

```javascript
Math.max(1, 2, 3) ;  // 3

var arr = [1, 2, 3];
var max = Math.max.apply(null, arr); // 3
// 여기서 apply의 null은 arr은 this를 어떤 것을 쓸것인지를 나타내고 argument의 리스트를 나타냄
apply도 똑같은 함수이며, apply("this 여부", "배열");
call도 비슷한 함수이며, call("this 여부", 1,2,3);

// ES6
var max = Math.max(...arr); // 3
```

### 9. Math.min()

argument 중에서 가장 작은 수를 반환

```javascript
Math.min(1, 2, 3);  // 1

var arr = [1, 2, 3];
var min = Math.min.apply(null, arr); // 1

// ES6
var min = Math.min(...arr); // 1
```