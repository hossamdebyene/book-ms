const Joi = require("joi");

const updateAddCartScheme = {
  body: Joi.object({
    userId: Joi.string().required(),
    bookIds: Joi.array().items(Joi.string()).required(),
    total: Joi.number().required(),
  }),
};

module.exports = {
  updateAddCartScheme,
};
