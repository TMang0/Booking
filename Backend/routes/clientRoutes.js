const express = require('express');
const dbC =require('../src/db/crudClient.js');
const router = express.Router();


router.get('/', (req, res)=>{
    dbC.getClients(function(arrayClients){
        res.send(arrayClients);
    })
});

router.get('/:id', (req, res)=>{
    const cid = req.params.id;
    dbC.getClient(cid, function(client){
        res.json(client);
    })
})

router.post('/', (req, res)=>{
    const client = req.body;
    dbC.addClients(client, function(response){
        res.send(response);
    })
})

router.put('/:id',(req, res)=> {
    const cid = req.params.id;
    const client = req.body;
    dbC.updateClientTotally(cid, client, function(response){
        res.send(response);
    })
})

router.patch('/:id', (req, res)=>{
    const cid = req.params.id;
    const client = req.body;
    dbC.updateClientPartial(cid, client, function(response){
        res.send(response);
    })
})

router.delete('/:id', (req, res)=>{
    const cid = req.params.id;
    dbC.deleteClient(cid, function(response){
        res.send(response);
    })
})

module.exports = router;