const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'folkvizag-b6830',
  });
}

const db = admin.firestore();

module.exports = { admin, db };