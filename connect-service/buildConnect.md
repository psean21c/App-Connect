# Install Database - Postgres  9.6 version for 32 bits

/***************************************
Windows
**************************************/
C:\Program Files (x86)\PostgreSQL\9.6
password: connect
Port: 5433

/***************************************
Mac
**************************************/
/Library/PostgreSQL/10/data
Password : connect
Port: 5432

# How to run
- delete package-lock.json
- $ npm install
- $ nodemon cis_service.js

# Main Procedure
1) Build REST API for CIS
 $ npm install ..
2) DB schema
3) Front End
4) Business requirement for POC
5) How to go to Clouding

/***************************************
Call REST from postman 
**************************************/

POST : 
- Headers 
 Key : Content-Type 
 Value : application/json
- Body >> raw
 {
        "id": 3,
        "firstname": "Cindy",
        "lastname": "Kwon",
        "country": "Korea"
  }

# React
1) NPM
2) React Developer Tools >> chrome
- React Developer Tools

3) create react project : https://github.com/facebook/create-react-app
4) create react bootstrap: https://reactstrap.github.io/


- Component, component, component




# Create Project 
1) install all NPM package
$ npx create-react-app books-app

$cd books-app
$npm start



## Reference
- boiler plate : 

https://github.com/facebook/create-react-app


 https://node-postgres.com/


