const contactsSchema = require("./contacts");
const updateSchema = require("./updateContact");
const statusSchema = require("./statusFavoriteSchema");
const { Contact } = require("../models/contacts");

module.exports = {
  contactsSchema,
  updateSchema,
  statusSchema,
  Contact,
};
