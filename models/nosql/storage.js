const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    fileName: {
      type: String,
    },
  },
  {
    timestamp: true, //adds createdAt and updatedAt fields
    versionKey: false,
  }
);

//se define el modelo de datos para la coleccion de usuarios
module.exports = mongoose.model("storages", StorageScheme);
