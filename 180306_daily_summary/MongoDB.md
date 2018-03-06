# MongoDB

## 1. MongoDB란?

- 문서 지향적 NoSQL 데이터 베이스 

> NoSQL (Not Only SQL)이란 ? 
>
> 기존의 RDBMS의 한계를 극복하기 위한 새로운 형태의 DB

- Method를 통한 Database 접근


### 1.1 Document

- JSON objects 형태의 key-value의 쌍으로 이루어진 데이터 구조로 구성


### 1.2 **Collection**

- DMS의 table과 유사한 개념으로 Document들의 집합으로 구성

### 1.3 **Database**

- Collection들의 물리적인 컨테이너
- 0개 이상의 Collection들의 집합으로 구성

## 2. MongoDB vs MySQL

### 2.1 **Terms**

| RDB(MySQL)  | MongoDB                      |
| ----------- | ---------------------------- |
| Database    | Database                     |
| Table       | Collection                   |
| Tuple / Row | Document or BSON document    |
| Column      | Field                        |
| Table Join  | Embedded Documents & Linking |
| Primary Key | Primary Key (_id)            |

### **2.2 Database Server**

| RDB(MySQL) | MongoDB |
| ---------- | ------- |
| mysqld     | mongod  |

### 2.3 **Database Client**

| RDB(MySQL) | MongoDB |
| ---------- | ------- |
| mysql      | mongo   |

###2.4 **SQL**

| RDB(MySQL)                               | MongoDB                                  |
| ---------------------------------------- | ---------------------------------------- |
| Insert                                   |                                          |
| insert into users ("name", "city") values("lee", "seoul") | db.users.insert({ name: "lee", city: "seoul" }) |
| Select                                   |                                          |
| select * from users where name="lee"     | db.users.find({ name: "lee" })           |
| Update                                   |                                          |
| update users set city="busan" where name="lee" | db.users.update({ name: "lee" }, { $set: { city: "busan" }}) |
| Delete                                   |                                          |
| delete from users where name="lee"       | db.users.remove({ name: "lee" })         |

## 3. 특징

- 고정 스키마가 존재하지 않고 Collection 내에 있더라도 **document level의 다른 스키마**를 가질 수 있음
- Mysql과는 다르게 `JOIN`이 없지만 CRUD Query는 고속으로 동작
- **규모 가변성, 확장성이 우수**하며 여러 개의 데이터베이스에 데이터를 분할하는 클래스터 구축 가능

## 해야할 공부

- RDMS(Mysql)