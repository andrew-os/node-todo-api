//start server Mongo server, go into bin, ./mongod, new shell tab ./mongo to test

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//mongo 3 db arg is now client
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')

    }
    console.log('Connected to MongoDB server')

    //mongo 3 db becomes const = 

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    //insert new doc into User (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Andrew',
    //     age: 29,
    //     location: 'London'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Couldnt get user')
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
    //mongo 3 = client.close
})