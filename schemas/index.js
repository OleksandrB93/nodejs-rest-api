const contactsSchema = require("./contacts");
const updateSchema = require("./updateContact");
const statusSchema = require("./statusFavoriteSchema");
const { Contact } = require("./mongoSchemaAndModel");

module.exports = {
  contactsSchema,
  updateSchema,
  statusSchema,
  Contact,
};
