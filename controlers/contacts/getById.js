const { NotFound } = require("http-errors");
const ObjectId = require("mongodb").ObjectId;

const { Contact } = require("../../models/contacts");

const getById = async (req, res) => {
  const owner = req.user._id;
  const id = req.params.contactId;
  console.log(id);

  const result = await Contact.findOne({ owner, id });
  console.log(id);
  if (!result) {
    throw NotFound(`Contact with id=${id} not found`);
  }
  res.json(result);
};

module.exports = getById;
