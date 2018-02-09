# Database (데이터가 모여있는 곳)

## Data

- 컴퓨터가 처리할 수 있는 문자, 숫자, 소리 ,그림의 형태로 된 정보

## Database

- 체계화된 데이터의 모임



## Database Management System

### 최초의 DBMS

`dBASE`

- 1979년 Ashton이 개발

- 마이크로컴퓨터용 최초의 DBMS

- SQL이 아닌 독자 스크립트 언어로 실행

  > dbf 파일 생성



## SQL(Structured Query Language)

데이터 관리를 위해 설계된 특수 목적의 프로그래밍 언어

### 1. 정의언어

- `CREATE` : DB 개체 정의 
- `DROP` : DB 개체 삭제 
- `ALTER` : DB 개체 정의 변경

### 2. 조작언어

- `INSERT` : 행, 테이블 데이터 삽입
- `UPDATE` : 테이블 업데이트
- `DELETE` : 특정 행 삭제
- `SELECT` : 테이블 검색

### 3. 제어언어

- `GRANT` : 작업 수행권한 부여
- `REVOKE` : 권한 박탈



## RDBMS vs NoSQL

| 구분   | RDBMS                      | NoSQL                              |
| ---- | -------------------------- | ---------------------------------- |
| 형태   | Table                      | Key-value, Document, Column        |
| 데이터  | 정형 데이터                     | 비정형 데이터                            |
| 성능   | 대용량 처리시 저하                 | 잦은 수정시 저하                          |
| 스키마  | 고정                         | Schemeless                         |
| 장점   | 안정적                        | 확장성, 높은 성능                         |
| 유명   | Mysql, MariaDB, PostgreSQL | MongoDB, CouchDB, Redis, Cassandra |

## Schema

- Blueprint
- 구조와 제약조건에 대한 전반적인 명세 기술

> 외부(서브)스키마, 개념스키마, 내부스키마로 구성

### 1. 외부(서브) Schema

- 프로그램 사용자가 필요로 하는 데이터베이스의 논리적인 구조를 정의

### 2. 개념 Schema

- 조직 전체의 관점에서의 구조와 관계를 정의
- 외부 스키마의 합과 그 사이의 데이터의 관계 등등
- 일반적인 스키마의 정의

### 3. 내부 Schema

- 저장장치의 입장에서 데이터베이스가 저장되는 방법을 기술

![schema이미지](https://www.relationaldbdesign.com/relational-database-design/module3/images/three_schema_architecture.jpg)





