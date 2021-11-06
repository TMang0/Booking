const admin = require('firebase-admin');

const serviceAccount = require('./elbooking-4b4c4-6daf5f5eb69d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Creacion de un Usuario
/*db.collection("User").add({
    Name:"Juan Lopez",
    DNI: 12345,
    Cel: 300345777,
    ContactLink: "Juanlopez@gmail.com",
    Photo: "www.photosface.com",
    Tables: [{},{}]
})
.then(() => {
    console.log("Documento creado correctamente!");
})
.catch((error) => {
    console.error("Error al crear documento: ", error);
}); */

// Leer un Usuario
/*db.collection("User").doc("sjXBy3qomk1aBofKbUh5").get()
.then((doc) => {
    if(doc.exists){
        console.log(doc.data());
    } else{
        console.log("Documento no existe");
    }
})
.catch((error) => {
    console.error("Error al leer documento: ", error);
}); */

//Actualizar un Usuario
/*db.collection("User").doc("sjXBy3qomk1aBofKbUh5").update({
    Name:"Juan Camilo Lopez",
    DNI: 12345,
    Cel: 300345777,
    ContactLink: "JuanClopez@gmail.com",
    Photo: "www.photosface.com",
    Tables: [{},{}]
})
.then(() => {
    console.log("Documento Actualizado Correctamente!");
})
.catch((error) => {
    console.error("Error al Actualizar documento: ", error);
}); */

//Para eliminar un Usuario por id
/*db.collection("User").doc("sjXBy3qomk1aBofKbUh5").delete().then(() => {
    console.log("Document successfully deleted!");
}).catch((error) => {
    console.error("Error removing document: ", error);
}); */