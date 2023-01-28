const Joi = require("joi");

const statusSchema = Joi.object({
  favorite: Joi.boolean(),
});

module.exports = statusSchema;
