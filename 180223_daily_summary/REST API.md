# REST API (Representational State Transfer)

HTTP 프로토콜을 의도에 맞게 디자인하도록 유도하여 기본 원칙을 성실히 지킨 서비스 디자인을 `RESTful` 이라고 표현

## 1. REST API 규칙

### 1. URI는 정보의 자원을 표현

```
# bad
GET /getBooks/1
GET /books/show/1

# good
GET /books/1
```

### 2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현

```
# bad
GET /books/delete/1

# good
DELETE /books/1
```

 

## 2. HTTP Method

4가지의 Method(GET, POST, PUT, DELETE)를 사용하여 CRUD를 구현

| Method | Action         | 역할            |
| ------ | -------------- | ------------- |
| GET    | index/retrieve | 모든/특정 리소스를 조회 |
| POST   | create         | 대상을 새롭게 생성    |
| PUT    | update         | 대상을 고치는 역할    |
| DELETE | delete         | 대상을 삭제하는 역할   |

## 3. REST API의 구성

REST API는 자원, 행위, 표현의 3가지 요소로 구성

> 자체 표현 구조(Self-descriptiveness)로 구성되어 REST API만으로 요청만 이해 가능

| 구성 요소           | 내용            | 표현 방법                 |
| --------------- | ------------- | --------------------- |
| Resource        | 자원            | HTTP URI              |
| Verb            | 자원에 대한 행위     | HTTP Method           |
| Representations | 자원에 대한 행위의 내용 | HTTP Message Pay Load |