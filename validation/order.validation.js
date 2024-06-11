const Joi = require("joi");

const updateAddOrderScheme = {
  body: Joi.object({
    userId: Joi.string().required(),
    bookIds: Joi.array().items(Joi.string()).required(),
    total: Joi.number().required(),
    shippingAddress: Joi.string().required(),
  }),
};

const changeStatusScheme = {
  body: Joi.object({
    status: Joi.string().required(),
  }),
};

module.exports = {
  updateAddOrderScheme,
  changeStatusScheme,
};
