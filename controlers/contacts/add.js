const { Contact } = require("../../models/contacts");
const ObjectId = require('mongodb').ObjectId

const add = async (req, res) => {
  const { _id } = req.user;
  ObjectId(_id);

  const result = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json(result);
};

module.exports = add;
