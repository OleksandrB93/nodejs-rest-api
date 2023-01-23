const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string(),
  email: Joi.string()
});

module.exports = contactSchema;
