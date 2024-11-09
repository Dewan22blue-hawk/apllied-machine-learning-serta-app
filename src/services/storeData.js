const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
  const db = new Firestore({
    projectId: process.env.GOOGLE_CLOUD_PROJECT || "erudite-fusion-439401-t2",
  });

  const predictCollection = db.collection("prediction");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
