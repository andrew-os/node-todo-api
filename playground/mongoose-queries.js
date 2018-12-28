const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose')
const {Todo} = require ('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '5c261d3fc58cf77f2ab4628e';

// if(!ObjectID.isValid(id)) {
//     console.log( 'Id not valid')
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found')
//     }
//     console.log('By ID', todo);
// }).catch((e) => console.log(e));

//user id
var userId = '5c20ce4c81a1124b0b1d0872'
//load user model {User}
//user.findById 
User.findById(userId).then((user) => {
    if(!user){
        return console.log('user not found');
    }
    console.log('User', user)
}).catch((e) => console.log(e));
//3 cases, not found, user found and catch error