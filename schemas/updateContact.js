const Joi = require("joi");

const updateSchema = Joi.object({
  name: Joi.string().allow(''),
  phone: Joi.string().allow(''),
  email: Joi.string().allow('')
});

module.exports = updateSchema;
