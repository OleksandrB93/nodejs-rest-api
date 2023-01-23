const Joi = require("joi");

const updateSchema = Joi.object({
  name: Joi.string(),
  phone: Joi.string(),
  email: Joi.string(),
});

module.exports = updateSchema;
