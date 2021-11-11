const express = require('express');
const app = express();

const db =require('./src/db/crud.js');

app.get('/', function(req, res){
    res.send('Mi primer servidor en Express')
})

app.get('/nueva-ruta',  function(req, res){
    res.send('Mi primera ruta en Express')
})

app.get('/ciudades', function(req, res){
    res.json({
        "City1":"Barranquilla",
        "City2":"Bogotá",
        "City3":"Cali"

    })
})

app.get('/ciudades/:id', function(req, res){
    const cid = req.params.id;
    // consulto la base de datos y trajo a bogota
    res.send(cid + 'Bogotá');
})

app.listen(3000)