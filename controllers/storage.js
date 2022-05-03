const res = require("express/lib/response");
const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  data = await storageModel.find({});
  res.send({ data });
};
const getItem = (req, resp) => {};
const createItem = async (req, res) => {
  const { file } = req;
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileData);
  res.send({ data });
};
const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
