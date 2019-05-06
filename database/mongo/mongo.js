// https://www.tutorialspoint.com/mongodb/

// 1) Show DB Systems
//show dbs

// admin                              0.000GB
// config                             0.000GB
// local                              0.000GB
// node-mongo-registration-login-api  0.000GB

// 2) Switch to the DB
//use mycustomers

// switched to db mycustomers
 db
// mycustomers

// 3) Create User
// db.createUser({
// ... user:"simon",
// ... pwd:"1234",
// ...  roles: [ "readWrite", "dbAdmin" ]
// ... });
// https://docs.mongodb.com/manual/reference/method/db.createUser/

// Successfully added user: { "user" : "simon", "roles" : [ "readWrite", "dbAdmin" ] }

// 4) Create Collection
db.createCollection('customers');
// { "ok" : 1 }

// 5) Show Collections
// show collections

// customers

db.customers.insert({first_name:"John",last_name:"Doe"});
// WriteResult({ "nInserted" : 1 })

db.customers.find();
// { "_id" : ObjectId("5c06ec2a49f099d2326ecad1"), "first_name" : "John", "last_name" : "Doe" }

db.customers.find();
// { "_id" : ObjectId("5c06ec2a49f099d2326ecad1"), "first_name" : "John", "last_name" : "Doe" }

//show collections
// customers
// people
db.people.find();
// { "_id" : ObjectId("5c06ec582a88942510eb20ae"), "firstname" : "John", "lastname" : "Doe", "address" : "330 Bay St. Toronto", "__v" : 0 }
// { "_id" : ObjectId("5c06ec582a88942510eb20af"), "firstname" : "Jane", "lastname" : "Doe", "address" : "555 Main St.", "__v" : 0 }
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
db.customers.find();
// { "_id" : ObjectId("5c06ec2a49f099d2326ecad1"), "first_name" : "John", "last_name" : "Doe" }
// { "_id" : ObjectId("5c06ed5749f099d2326ecad2"), "first_name" : "Steve", "last_name" : "Simth" }
// { "_id" : ObjectId("5c06ed5749f099d2326ecad3"), "first_name" : "John", "last_name" : "Johnson", "gender" : "female" }
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


