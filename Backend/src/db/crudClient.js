const db = require('./firebase.js');

function getClients(callback){
    return db.collection('Clients').get()
        .then((refDoc) =>{
            var arrayClients = [];
            refDoc.forEach((doc)=>{
            arrayClients.push(doc.data());
           
        })
        callback(arrayClients);
    })
        .catch(err => {
         callback('Error to get Clients ${err}');
    })

}

function getClient(cid, callback){
    return db.collection('Clients').doc(cid).get()
    .then((doc)=>{
        callback(doc.data())
    })
    .catch((err)=>{
        callback('Error to get Client ${err}')
    })
}

function addClients(client, callback){
    return  db.collection('Clients'). add(client)
    .then(()=>{
        callback('Client Create');
    })
    .catch((err)=>{
        callback('Error to add Client');
    })
}

function updateClientTotally(cid, client, callback){
    return db.collection('Clients').doc(cid).set(client)
    .then(()=>{
        callback("Success")
    })
    .catch((err)=>{
        callback('Error to Update Client ${err}');
    })
}

function updateClientPartial(cid, client, callback){
    return db.collection('Clients'). doc(cid). update(client)
    .then(()=>{
        callback("Success")
    })
    .catch((err)=>{
        callback('Error to Update Client ${err}');
    })
}

function deleteClient(cid, callback){
    return db.collection('Clients').doc(cid).delete()
    .then(()=>{
        callback("Success")
    })
    .catch((err)=>{
        callback('Error to Delete Client ${err}');
    })
}

module.exports ={
    getClients,
    getClient,
    addClients,
    updateClientTotally,
    updateClientPartial,
    deleteClient

}