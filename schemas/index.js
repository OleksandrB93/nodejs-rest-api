const contactsSchema = require("./contacts");
const updateSchema = require("./updateContact");
const { Contact } = require("./mongoSchemaAndModel");
                                    
module.exports = {
  contactsSchema,
  updateSchema,
  Contact,
};
