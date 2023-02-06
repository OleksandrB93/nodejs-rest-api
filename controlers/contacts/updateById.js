const { Contact } = require("../../models/contacts");
const ObjectId = require("mongodb").ObjectId;

const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const owner = req.user._id;
  const id = ObjectId(req.params.contactId);

  const result = await Contact.findOneAndUpdate(
    { owner, id },
    { $set: req.body },
  );
  if (!result) {
    throw new NotFound(`Product with id=${id} not found`);
  }
  res.json(result);
};

module.exports = updateById;
