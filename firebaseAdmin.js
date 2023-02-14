const admin = require('firebase-admin');
const serviceAccount = require('./firebaseAdmin.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<hello-talk>.firebaseio.com'
});

export async function verifyIdToken(token) {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
}
