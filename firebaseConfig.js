// firebaseConfig.js
const admin = require('firebase-admin');

// Replace with the path to your service account key
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'chandrakanth-api.appspot.com' // Replace with your bucket name
});

const bucket = admin.storage().bucket();

module.exports = bucket;
 