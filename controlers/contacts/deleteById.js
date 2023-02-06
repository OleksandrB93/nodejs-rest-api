const { NotFound } = require("http-errors");
const ObjectId = require("mongodb").ObjectId;

const { Contact } = require("../../models/contacts");

const deleteById = async (req, res) => {
  const owner = req.user._id;
  const id = ObjectId(req.params.contactId);

  const result = await Contact.findOneAndRemove({owner, id });

  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  res.json(result);
};

module.exports = deleteById;
