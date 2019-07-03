# Build Guide for Connect Application

## Abstract
* It's a full stack application with only Javascript technologies
* React <-> Node JS (REST API) <-> Postgres (DB)
* Editor : VSC (Visual Studio Code) : 1.3.5.1
* Source Control : GIT
* POSTMAN : REST API
* React Developer Tools >> chrome
    - React Developer Tools

* The configuration could be different depending on developers' local environment.


## Setup Dev

### Database : Postgres
1)  Windows (example)
* Install Database - Postgres  9.6 version for 32 bits
* C:\Program Files (x86)\PostgreSQL\9.6
* password: connect
* Port: 5433

2) Mac (example)
* /Library/PostgreSQL/10/data
* Password : connect
* Port: 5432

### Node JS
* TBD

### React JS
#### Create Project 
1) install the lastest NPM package and create a project [1]
- $ npx create-react-app books-app

- $cd books-app
- $npm start

## Project Structure
- connect-service
- connect-client
- connect-database
- database
  - mongo
  - mysql
  - postgres
- document

## How to run
- delete package-lock.json
- $ npm install
- $ nodemon cis_service.js
- make sure that port is properly updated based on your env.
  (db_query.js) i.e.      
- port: '5433'

## Main Procedure
1) Build REST API for CIS
 $ npm install ..
2) DB schema
3) Front End
4) Business requirement for POC
5) How to go to Clouding

## Call REST from postman 

### POST : 
*  Headers 
 - Key : Content-Type 
 - Value : application/json
*  Body >> raw
  - {
        "id": 3,
        "firstname": "Cindy",
        "lastname": "Kwon",
        "country": "Korea"
  }

* Test on GET
* http://localhost:3000/students/





## Reference

[1] Create react project
- https://github.com/facebook/create-react-app

[2] ReactStrap practice : Basic CRUD 
- React JS REST API Tutorial - Create a books app in React.js
- https://www.youtube.com/watch?v=9CPmtIeapMw 

[3] ReactStrap (BootStrap) : create react bootstrap: 
- https://reactstrap.github.io/

[4] Node for postgres
- https://node-postgres.com/


## Terminology
- boiler plate : 
- retrofit :
- Syntatic sugar :
- Triage : 


