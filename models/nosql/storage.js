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
    versionKey: false,
    timestamps: true,
  }
);

//se define el modelo de datos para la coleccion de usuarios
module.exports = mongoose.model("storages", StorageScheme);
