//start server Mongo server, go into bin, ./mongod, new shell tab ./mongo to test

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//mongo 3 db arg is now client
MongoClient.connect( 'mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')

    }
    console.log('Connected to MongoDB server')

//delete many
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
//     console.log(result);
// });
//delete one
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//     console.log(result);
// })
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({
//     completed: false
// }).then((result) => {
//     console.log(result);
// })

//delete many on duplicate user name

db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
})
//find one and delete by id
// db.collection('Users').findOneAndDelete({
//     _id: ObjectID('5c0d578f7e80afc7c79cc96d')
// }).then((result) => {
//     console.log(result);
// })
   // db.close();
    //mongo 3 = client.close
})