const { NotFound } = require("http-errors");
const ObjectId = require('mongodb').ObjectId

const { Contact } = require("../../models/contacts");

const getById = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findById(ObjectId(contactId));

  if (!result) {
    throw NotFound(`Contact with id=${contactId} not found`);
  }
  res.json(result);
};

module.exports = getById;
