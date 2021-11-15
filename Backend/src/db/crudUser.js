const db = require('./firebase.js');


function getUser(uid, callback){
    return db.collection('User').doc(uid).get()
    .then((doc)=>{
        callback(doc.data())
    })
    .catch((err)=>{
        callback('Error to get User ${err}')
    })
}

function addUser(user, callback){
    return  db.collection('User'). add(user)
    .then(()=>{
        callback('User Create');
    })
    .catch((err)=>{
        callback('Error to add User');
    })
}

function updateUserTotally(uid, user, callback){
    return db.collection('User').doc(uid).set(user)
    .then(()=>{
        callback("Success")
    })
    .catch((err)=>{
        callback('Error to Update User ${err}');
    })
}


function deleteUser(uid, callback){
    return db.collection('User').doc(uid).delete()
    .then(()=>{
        callback("Success")
    })
    .catch((err)=>{
        callback('Error to Delete User ${err}');
    })
}

module.exports ={
    getUser,
    addUser,
    updateUserTotally,
    deleteUser

}