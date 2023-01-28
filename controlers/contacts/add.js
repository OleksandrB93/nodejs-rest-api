const { Contact } = require("../../schemas/mongoSchemaAndModel");

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
