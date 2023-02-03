const { NotFound } = require("http-errors");
const ObjectId = require("mongodb").ObjectId;

const { Contact } = require("../../models/contacts");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(ObjectId(contactId));
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json(result);
};

module.exports = deleteById;
