const express = require('express');
const dbU =require('../src/db/crudUser.js');
const router = express.Router();

router.get('/:id', (req, res)=>{
    const uid = req.params.id;
    dbU.getUser(uid, function(user){
        res.json(user);
    })
})

router.post('/', (req, res)=>{
    const user = req.body;
    dbU.addUser(user, function(response){
        res.send(response);
    })
})

router.put('/:id',(req, res)=> {
    const uid = req.params.id;
    const user = req.body;
    dbU.updateUserTotally(uid, user, function(response){
        res.send(response);
    })
})

router.patch('/:id', (req, res)=>{
    const uid = req.params.id;
    const user = req.body;
    dbU.updateUserPartial(uid, user, function(response){
        res.send(response);
    })
})

router.delete('/:id', (req, res)=>{
    const uid = req.params.id;
    dbU.deleteUser(uid, function(response){
        res.send(response);
    })
})

module.exports = router;