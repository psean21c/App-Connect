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

### F/E and B/E : Javascript
* F/E(Front End) - React JS (refer to buildClient.md)
* B/E(Back End) - Node JS (refer to buildBackendService.md)

## Project Structure
- connect-service : main REST API for CIS Service
- connect-client
- connect-database : template to connect postgres DB
- database
  - mongo
  - mysql
  - postgres
- document
    - architectureConnect.md
    - scriptClient.md
    - scriptService.md

## Serverless web site: AWS S3
https://medium.com/@_bryan/building-a-serverless-website-with-s3-1c22ee3a962c

## Main Items to be delivered
1) DB schema - Postgres
2) Build REST API for CIS - Node JS  
3) Front End - React JS
4) Business requirement for POC - Document
5) How to go to Clouding (Infrastructure) - Future


## Reference
[1] Node for postgres
- https://node-postgres.com/

## Terminology
- boiler plate : 
- retrofit :
- Syntatic sugar :
- Triage : 