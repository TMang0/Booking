const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

const dbU =require('./src/db/crudUser.js');
const dbC =require('./src/db/crudClient.js');

app.use(express.json());

app.get('/users/:id', (req, res)=>{
    const uid = req.params.id;
    dbU.getUser(uid, function(user){
        res.json(user);
    })
})

app.post('/users', (req, res)=>{
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

app.delete('/users/:id', (req, res)=>{
    const uid = req.params.id;
    dbU.deleteUser(uid, function(response){
        res.send(response);
    })
})

app.get('/get-clients', (req, res)=>{
    dbC.addClients(function(arrayClients){
        res.send(arrayClients);
    })
});

app.get('/clients/:id', (req, res)=>{
    const cid = req.params.id;
    dbC.getClient(cid, function(client){
        res.json(client);
    })
})

app.post('/clients', (req, res)=>{
    const client = req.body;
    dbC.addClients(client, function(response){
        res.send(response);
    })
})

app.put('/update-client-totally/:id',(req, res)=> {
    const cid = req.params.id;
    const client = req.body;
    dbC.updateClientTotally(cid, client, function(response){
        res.send(response);
    })
})

app.patch('/update-client-partial/:id', (req, res)=>{
    const cid = req.params.id;
    const client = req.body;
    dbC.updateClientPartial(cid, client, function(response){
        res.send(response);
    })
})

app.delete('/clients/:id', (req, res)=>{
    const cid = req.params.id;
    dbC.deleteClient(cid, function(response){
        res.send(response);
    })
})


app.listen(port, ()=>{
    console.log('My port ' + port);
});