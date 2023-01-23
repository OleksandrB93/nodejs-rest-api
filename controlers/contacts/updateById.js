const contactsOperations = require("../../models/constantsModel");
const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateContact(contactId, req.body);
  if (!result) {
    throw new NotFound(`Product with id=${contactId} not found`);
  }
  res.json(result);
};

module.exports = updateById;


