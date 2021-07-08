
[mong DB manual](https://docs.mongodb.com/manual/reference/method/db.createUser/)

1) Create Collection

```
db.createCollection('customers');
// { "ok" : 1 }
```

2) Show Collections

```
db.customers.insert({first_name:"John",last_name:"Doe"});
// WriteResult({ "nInserted" : 1 })
```

3) search Document
```
db.customers.find();
// { "_id" : ObjectId("5c06ec2a49f099d2326ecad1"), "first_name" : "John", "last_name" : "Doe" }
```

```
db.people.find();
// { "_id" : ObjectId("5c06ec582a88942510eb20ae"), "firstname" : "John", "lastname" : "Doe", "address" : "330 Bay St. Toronto", "__v" : 0 }
// { "_id" : ObjectId("5c06ec582a88942510eb20af"), "firstname" : "Jane", "lastname" : "Doe", "address" : "555 Main St.", "__v" : 0 }
```
4) insert Document
```
db.customers.insert([{first_name:"Steve", last_name:"Simth"},{first_name:"John",last_name:"Johnson",gender:"female"}]);

// BulkWriteResult({
//         "writeErrors" : [ ],
//         "writeConcernErrors" : [ ],
//         "nInserted" : 2,
//         "nUpserted" : 0,
//         "nMatched" : 0,
//         "nModified" : 0,
//         "nRemoved" : 0,
//         "upserted" : [ ]
// })

```

5) Examples
```

db.customers.find();
db.customers.find().pretty();
db.customers.find().sort({last_name:1});  // ascending
db.customers.find().sort({last_name:-1}); // descending
db.customers.find().count();
db.customers.find({gender:"male"}).count();
db.customers.find().limit(4);
db.customers.find().limit(4).sort({last_name:1});
db.customers.find().forEach(function(doc){print("Customer Name:" + doc.first_name)})
// Customer Name:John
// Customer Name:Steve
// Customer Name:John


db.customers.update({first_name:"Steve"},{$set:{age:5}});
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })


db.customers.update({first_name:"Steve"},{$inc:{age:5}});
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

db.customers.update({first_name:"Steve"},{$rename:{"gender":"sex"}});

db.customers.find({first_name:"Steve"});

db.customers.find({$or:[{first_name:"Steve"},{last_name:"Doe"}]});

db.customers.find({"address.city":"Boston"});
```
