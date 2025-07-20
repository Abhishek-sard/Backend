// Core Modules

const { getDB } = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  save() {
    const db = getDB();
    return db.collection("homes").insertOne(this);

  }

  static fetchAll() {
    const db = getDB();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    const db = getDB();
    return db.collection("homes").findOne({ _id: homeId });
  }

  static deleteById(homeId) {
    const db = getDB();
    return db.collection("homes").deleteOne({ _id: homeId });
  }
};
