const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

const dbU =require('./src/db/crudUser.js');

/*app.get('/', function(req, res){
    res.send('Mi primer servidor en Express')
});*/

app.use(express.json());

app.get('/get-users', function(req, res){
    dbU.getUsers(function(arrayUser){
        res.send(arrayUser);
    })
});

app.get('/get-user/:id', function(req, res){
    const uid = req.params.id;
    dbU.getUser(uid, function(user){
        res.json(user);
    })
})

app.post('/add-user', function(req, res){
    const user = req.body;
    dbU.addUser(user, function(response){
        res.send(response);
    })
})



app.listen(port, ()=>{
    console.log('My port ' + port);
});