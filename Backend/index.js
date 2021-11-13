const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

const dbU =require('./src/db/crudUser.js');

app.use(express.json());

app.get('/get-users', function(req, res){
    dbU.getUsers(function(arrayUser){
        res.send(arrayUser);
    })
});

app.get('/get-user/:id', (req, res)=>{
    const uid = req.params.id;
    dbU.getUser(uid, function(user){
        res.json(user);
    })
})

app.post('/add-user', (req, res)=>{
    const user = req.body;
    dbU.addUser(user, function(response){
        res.send(response);
    })
})

app.put('/update-user-totally/:id',(req, res)=> {
    const uid = req.params.id;
    const user = req.body;
    dbU.updateUserTotally(uid, user, function(response){
        res.send(response);
    })
})

app.patch('/update-user-partial/:id', (req, res)=>{
    const uid = req.params.id;
    const user = req.body;
    dbU.updateUserPartial(uid, user, function(response){
        res.send(response);
    })
})

app.delete('/delete-user/:id', (req, res)=>{
    const uid = req.params.id;
    dbU.deleteUser(uid, function(response){
        res.send(response);
    })
})



app.listen(port, ()=>{
    console.log('My port ' + port);
});