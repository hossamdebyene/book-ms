const Joi = require("joi");

const partialUpdateBookScheme = {
  body: Joi.object({
    userId: Joi.string().optional(),
    title: Joi.string().optional(),
    author: Joi.string().optional(),
    price: Joi.number().optional(),
    genre: Joi.string().optional(),
  }),
};

const updateBookScheme = {
  body: Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string().required(),
    price: Joi.number().required(),
    genre: Joi.string().required(),
    deleted: Joi.boolean().required(),
  }),
};

const addBookScheme = {
  body: Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().required(),
    author: Joi.string(),
    genre: Joi.string(),
    price: Joi.number().required(),
  }),
};

module.exports = {
  addBookScheme,
  partialUpdateBookScheme,
  updateBookScheme,
};
