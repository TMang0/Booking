const APIRoutes = require('./routes');
const { request } = require('express');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

APIRoutes(app);

app.listen(port, ()=>{
    console.log('My port ' + port);
});