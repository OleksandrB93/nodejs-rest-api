const contactsOperations = require("../../models/constantsModel");
const { NotFound } = require("http-errors");

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
  if (!result) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }
  res.json(result);
};

module.exports = deleteById;




