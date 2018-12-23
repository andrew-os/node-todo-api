//start server Mongo server, go into bin, ./mongod, new shell tab ./mongo to test

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//mongo 3 db arg is now client
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')

    }
    console.log('Connected to MongoDB server')

//    db.collection('Todos').find({
//        _id: new ObjectID('5c1f79793505d2d71b55d6fa')
//    }).toArray().then((docs) => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('Unable to fetch todos', err);
//    })

// db.collection('Todos').find().count().then((count) => {
//      console.log(`Todos count:${count}`);
    
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// })
db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log(err);
})
   // db.close();
    //mongo 3 = client.close
})