var express = require('express')
var bodyParser = require('body-parser')
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

// GET /todos - will get all todos
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e)
    })
})

//GET /todos/make dynamic byId
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    //validate id using is valid
    //if not valid send back empty send (404).send(
    if(!ObjectID.isValid(id)) {
       return res.status(404).send()
    }
    

    //findById
    Todo.findById(id).then((todo) => {
         //success 
            //if todo send it back
            //if no todo - send back 404 with empty
        if(!todo){
            return res.status(404).send()
        }
        res.send({todo})
    }).catch((e) => {
         //error
        //400 - send empty body back
        res.status(400).send()
    })
       
       
    
})


app.listen(port, () => {
    console.log(`Started on port ${port}`)
})

module.exports = {app};