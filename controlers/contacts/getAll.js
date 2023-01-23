const contactsOperations = require("../../models/constantsModel");

const getAll = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
  res.json(contacts);
};

module.exports = getAll;


