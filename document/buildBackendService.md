# Run Script for Service

## Abstract
- This scripts explain the best practice for REST API

## Node JS
#### Steps to run CIS REST API Service 
- How to Run the CIS Service
    - Step 1 : Clean up the directory / Install NPM package
        - delete package-lock.json
        - $ npm install
    - Step 2 : Check configuation - db_query.js
        - port needs to be updated according to your env. (port:'5433')
    - Step 3: Run the Service
        - $ nodemon cis_service.js


#### How to run REST API using Postman 
- How to test CRUD (Create/Retrieve/Update/Delete)
    - 1) GET (Retrive)
        - http://localhost:3000/students/
    - 2) POST (Create)
        - http://localhost:3000/addStudent
        - Check configuration : Headers + Body
            - Headers : Key = Content-Type , Value = application/json
            - Body : select [raw] and provide context to be inserted
        - {"id": 3, "firstname": "Cindy","lastname": "Kwon","country": "Korea"}
            * check with screenshot [postman-post.jpg]
    - 3) PUT (Update)
        - http://localhost:3000/updateStudent/19
        - Header / Body are the same as POST
    - 4) DELETE (Delete)
         http://localhost:3000/delStudent/26

- It's good to check the file [db_query.js] for Service API


#### How to run Unit TEST using mocha 
    - Create folder and locate it
    $ mkdir {app} && cd {app}
    $ npm install -g mocha
    - Initialize the project
    $ npm init
    $ npm install chai --save-dev
    - Run the mocha
    $ mocha .\cart-summary-test.js

    $ mocha tests --recursive --watch 

## AWS Cloud S3

https://aws.amazon.com/premiumsupport/knowledge-center/s3-troubleshoot-403/


## Reference
[1] Node for postgres
- https://node-postgres.com/

[2] Unit Test for Node
- https://sinonjs.org/ (A)
- https://developer.ibm.com/tutorials/learn-nodejs-unit-testing-in-nodejs/ (A)
- https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877 (B : subtotal)
- https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71 (B)
- https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/ (B)

[3]
- https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
