const Joi = require("joi");

const signInScheme = {
  body: Joi.object({
    email: Joi.string(),
    username: Joi.string(),
    password: Joi.string().strict().required(),
  }),
};

const signUpScheme = {
  body: Joi.object({
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required("REQUIRED"),
    confirmPassword: Joi.ref("password"),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    street: Joi.string(),
    building: Joi.string(),
    floor: Joi.string(),
  }),
};

module.exports = {
  signUpScheme,
  signInScheme,
};
