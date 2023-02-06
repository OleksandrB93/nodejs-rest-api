const { NotFound } = require("http-errors");
const { Contact } = require("../../models/contacts");
const ObjectId = require("mongodb").ObjectId;

const updateStatusContact = async (req, res) => {
  const owner = req.user._id;
  const id = ObjectId(req.params.contactId);
  const { favorite } = req.body;

  const result = await Contact.findOneAndUpdate(
    { owner, id },
    { $set: { favorite } },
    { new: true }
  );

  if (!result) {
    throw new NotFound(`message": "missing field favorite`);
  }
  res.json(result);
};

module.exports = updateStatusContact;
