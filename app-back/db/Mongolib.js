const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = process.env.REACT_APP_MONGOURL;

const dbName = "Job";

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
  client.connect(function (err) {
    assert.strictEqual(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    callback(db, client);
  });
};

const findDocuments = function (db, callback) {
  const collection = db.collection("Job");
  collection.find({}).toArray(function (err, docs) {
    assert.strictEqual(err, null);
    callback(docs);
  });
};

const insertOne = function (db, body, callback) {
  const collection = db.collection("Job");
  collection
    .insertOne(body)
    .then((ans) => {
      callback(null);
    })
    .catch((e) => {
      console.error(e);
      callback(e);
    });
};

exports.getDatabase = getDatabase;
exports.findDocuments = findDocuments;
exports.insertOne = insertOne;
