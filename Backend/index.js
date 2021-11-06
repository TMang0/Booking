const admin = require('firebase-admin');

const serviceAccount = require('./elbooking-4b4c4-6daf5f5eb69d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Creacion de un Usuario
db.collection("User").add({
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
});