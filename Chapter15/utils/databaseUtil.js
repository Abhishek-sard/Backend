const mongodb = require("mongodb");



const MongoClient = mongodb.MongoClient;

const MONGO_URL = "mongodb+srv://Admin123:Admin123@cluster0.dhhn9me.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let_db;

const mongoConnect = callback => {
  MongoClient.connect(MONGO_URL)
    .then(client => {
      let_db = client.db("myFirstDatabase");
      callback();
    })
    .catch(err => {
      console.error("Failed to connect to MongoDB", err);
    });
}

const getDB = () => {
  if(!_db) {
    throw new Error("mongo not connected");
  }
  return _db;
}
module.exports = {
  mongoConnect,
  getDB
};