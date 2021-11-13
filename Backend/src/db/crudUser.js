const db = require('./firebase.js');

function getUsers(callback){
    return db.collection('User').get()
        .then((refDoc) =>{
            var arrayUser = [];
            refDoc.forEach((doc)=>{
            arrayUser.push(doc.data());
           // console.log(doc.id, '=>', doc.data());
        })
        callback(arrayUser);
    })
        .catch(err => {
        //console.error('Error to get User ${err}');
         callback('Error to get Users ${err}');
    })

}

function getUser(uid, callback){
    return db.collection('User').doc(uid).get()
    .then((doc)=>{
        callback(doc.data)
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

module.exports ={
    getUsers,
    getUser,
    addUser
}