const db = require('./firebase.js');

function getUser(){
    return db.collection('User').get()
    .then((refDoc) =>{
        refDoc.forEach((doc)=>{
            console.log(doc.id, '=>', doc.data());
        })
    
    })
    .catch(err => {
        console.error('Error to get User ${err}');
    })

}

module.exports ={
    getUser
}