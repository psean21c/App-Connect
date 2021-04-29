# start mongo DB
```
$ cd ~/Documents/dev/mongodb-4.0/bin
```
1) start deamon
```
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


# reference
[mongo DB manual](https://docs.mongodb.com/manual/reference/method/db.createUser/)
