const { Contact } = require("../../models/contacts");
const ObjectId = require("mongodb").ObjectId;

const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  ObjectId(contactId);

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound(`Product with id=${contactId} not found`);
  }
  res.json(result);
};

module.exports = updateById;
