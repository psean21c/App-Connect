# start mongo DB

1) start deamon
```
$ cd ~/Documents/dev/mongodb-4.0/bin
$ ./mongod
```
2) start mongo
```
$ ./mongo
> show dbs                     # 
> use {db_name}                # 
> show collections             # 
> db.{collection_name}.find()  #

```

 3) Create User
 ```sql
 db.createUser({
 user:"simon",
 pwd:"1234",
  roles: [ "readWrite", "dbAdmin" ]
 });

```

4) MongoDB Compass

```
mongodb://localhost:27017
```

# reference
[mongo DB manual](https://docs.mongodb.com/manual/reference/method/db.createUser/)

[mongoose](https://mongoosejs.com/)

[Tutorial Point](https://www.tutorialspoint.com/mongodb/mongodb_delete_document.htm)