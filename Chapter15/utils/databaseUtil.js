const mongodb = require("mongodb");



const MongoClient = mongodb.MongoClient;

const MONGO_URL = "mongodb+srv://Admin123:Admin123@cluster0.dhhn9me.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoConnect = callback => {
  MongoClient.connect(MONGO_URL)
    .then(client => {
      callback(client);
    })
    .catch(err => {
      console.error("Failed to connect to MongoDB", err);
    });
}
module.exports = mongoConnect;