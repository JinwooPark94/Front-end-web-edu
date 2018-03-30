# Software Engineering - gulp

## 1. 개발자가 오프라인에서 살아가는 법

- How를 생각하기 전 What과 Why를 먼저 생각하자

예) 404` 보단 ` 404 - Not Found`

> `안되요` 보단 `시스템에 악영향을 줄 가능성이 있어 다른 방법을 고려하는 것이 좋음`

## 2. 개발자가 관리해야 할 것

- github
- linkedin
- blog

## 3. 개발자가 갖춰야 할 덕목

### 1. Geekiness

[![img](https://camo.githubusercontent.com/473c0933701fff8bfafc5927a39815695fba80fa/687474703a2f2f7777772e61726768696e6b2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031352f30362f6765656b5f77616c6c70617065725f5f5f5f62795f6269677465646479726177722d6435757339396f2e706e67)](https://camo.githubusercontent.com/473c0933701fff8bfafc5927a39815695fba80fa/687474703a2f2f7777772e61726768696e6b2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031352f30362f6765656b5f77616c6c70617065725f5f5f5f62795f6269677465646479726177722d6435757339396f2e706e67)

### 2. Curiosity

[![img](https://camo.githubusercontent.com/84ad4f195a25d945decc7fbc7f1b7da5290e544d/68747470733a2f2f63312e737461746963666c69636b722e636f6d2f392f383230352f383136323330353233375f376335666535616138615f622e6a7067)](https://camo.githubusercontent.com/84ad4f195a25d945decc7fbc7f1b7da5290e544d/68747470733a2f2f63312e737461746963666c69636b722e636f6d2f392f383230352f383136323330353233375f376335666535616138615f622e6a7067)

### 3. Computational Thinking

[![img](https://camo.githubusercontent.com/4e95fb0634e4518edcf8a21b76134aa49264655d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f312f31372f4172746966696369616c46696374696f6e427261696e2e706e67)](https://camo.githubusercontent.com/4e95fb0634e4518edcf8a21b76134aa49264655d/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f312f31372f4172746966696369616c46696374696f6e427261696e2e706e67)

## 4. Queue 란?

a queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order.

**FIFO (First In First Out)**

### 4.1 Queue 종류

### Enqueue & Dequeue

- Enqueue: addition of entities to the rear terminal position
- Dequeue: removal of entities from the front terminal position

------

[![img](https://camo.githubusercontent.com/8369eef468bf55f4477d1e01265b6a272ded4867/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f352f35322f446174615f51756575652e7376672f36303070782d446174615f51756575652e7376672e706e67)](https://camo.githubusercontent.com/8369eef468bf55f4477d1e01265b6a272ded4867/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f352f35322f446174615f51756575652e7376672f36303070782d446174615f51756575652e7376672e706e67)

### 4.2 Queue 실습

- Queue 생성

```
function Queue() {
	//properties, methods
	var items = [];
}
```

- Enqueue & Dequeue

```
function Queue() {
	//properties, methods
	this.enqueue = function(element) {
		items.push(element);
	};
	this.dequeue = function() {
		return items.shift();
	};
}
```

- front & isEmpty

```
function Queue() {
	//underneath Enqueue & Dequeue
    
...    
    
	this.front = function() {
		return items[0];
	};
	this.isEmpty = function() {
		return items.length == 0;
	};
}
```

- clear & size & print

```
function Queue() {
	//underneath front & isEmpty

...

	this.clear = function() {
		items = [];
	};
	this.size = function() {
		return items.length;
	};
	this.print = function() {
		console.log(items.toString());
	};

}
```

- Let's Enqueue with Queue class

```
> var queue = new Queue();
> console.log(queue.isEmpty());

> queue.enqueue("Fast");
> queue.enqueue("Campus");
> queue.enqueue("School");

> queue.print();
> console.log(queue.size());
> console.log(queue.isEmpty());
```

- Let's Dequeue with Queue class

```
> queue.dequeue();
> queue.dequeue();

> queue.print();
```

## 5. collaborate with git flow

#### 5.1 continuous pull

`$ git remote add upstream https://github.com/anotheruser/original-repo.git`

`$ git fetch upstream` `$ git merge upstream/master`

#### 5.2 use git flow easily!

[Link](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

[![img](https://camo.githubusercontent.com/075a231fca71d6a23491041230f3a265671e3a36/68747470733a2f2f64616e69656c6b756d6d65722e6769746875622e696f2f6769742d666c6f772d636865617473686565742f696d672f6769742d666c6f772d636f6d6d616e64732e706e67)](https://camo.githubusercontent.com/075a231fca71d6a23491041230f3a265671e3a36/68747470733a2f2f64616e69656c6b756d6d65722e6769746875622e696f2f6769742d666c6f772d636865617473686565742f696d672f6769742d666c6f772d636f6d6d616e64732e706e67)

#### 5.3 Git flow practice

master -> develop -> features -> develop -> release -> master

## 6. Gulp

[![img](https://camo.githubusercontent.com/2d78b03f66a6ba65037abc89f403b1058c3c49e4/687474703a2f2f692e696d6775722e636f6d2f5270744a4d35512e706e67)](https://camo.githubusercontent.com/2d78b03f66a6ba65037abc89f403b1058c3c49e4/687474703a2f2f692e696d6775722e636f6d2f5270744a4d35512e706e67)

### 6.1 Task runner

- 매우 귀찮은 루틴한 작업들을 자동화 할 수 있는 툴
- 현재 2735 + a 개의 패키지가 존재
  - 따라서 필요한 기능을 골라 설치할 필요

### 6.2 task flow

`코드작성 - JS test(jshint) - JS Minify - JS Merge(concat) - CSS Minify - CSS Merge - 결과물`

```
$ npm install gulp --global
$ npm install gulp --save-dev
```

```
$ touch gulpfile.js

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
	return console.log("hello gulpworld");
});

$ gulp hello
```

### 6.3 gulp 기본 문법

- `gulp.task` : gulp의 작업단위
- `gulp.src` : gulp 실행의 대상
- `gulp.dest` : gulp 실행 후 목적지
- `gulp.watch` : 변화 감지 후 자동 실행

### 6.4 기본값 설정하기

```
$ gulpfile.js

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
	return console.log("hello gulpworld");
});

gulp.task("default", ["hello"]);

$ gulp
```

### 6.5 우선순위 설정하기

```
$touch gulpfile.js

var gulp = require("gulp");

//hello라는 gulp task를 등록
gulp.task("hello", function () {
	return console.log("hello");
});

gulp.task("gulpworld", ["hello"], function () {
	return console.log("gulpworld");
});

gulp.task("default", ["gulpworld"]);

$ gulp
```

### 6.6 자주쓰는 목적지 설정하기

```
var publicPath = {
	src  : './public/src/',
	dest : './public/dist/'
};
```

