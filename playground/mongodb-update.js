//start server Mongo server, go into bin, ./mongod, new shell tab ./mongo to test

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//mongo 3 db arg is now client
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')

    }
    console.log('Connected to MongoDB server')

    //find one and update

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c1f824f3505d2d71b55d88c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    //set name to Andrew, inc age to 30
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c0d57b724d4f4c7ccac43be')
    }, {
        $set: {
            name: 'Andrew'
        }
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

   // db.close();
    //mongo 3 = client.close
})