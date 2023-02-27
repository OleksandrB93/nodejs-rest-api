const contactsSchema = require("./contacts");
const updateSchema = require("./updateContact");
const statusSchema = require("./statusFavoriteSchema");
const { Contact } = require("../models/contacts");
const verifyEmailSchema = require("./verifyEmailSchema")

module.exports = {
  contactsSchema,
  updateSchema,
  statusSchema,
  verifyEmailSchema,
  Contact,
};
