const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true, //adds createdAt and updatedAt fields
    versionKey: false,
  }
);


//se define el modelo de datos para la coleccion de usuarios
module.exports = mongoose.model("users", UserScheme);