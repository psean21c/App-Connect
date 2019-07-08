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


#### How to test REST API using Postman 
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


## Reference
[1] Node for postgres
- https://node-postgres.com/

