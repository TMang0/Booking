const admin = require('firebase-admin');

const serviceAccount = require('./elbooking-4b4c4-6daf5f5eb69d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;