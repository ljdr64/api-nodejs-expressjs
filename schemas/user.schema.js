const Joi = require('joi');

const id = Joi.string().uuid();
const firstName = Joi.string().alphanum().min(3).max(15);
const lastName = Joi.string().alphanum().min(3).max(15);
const job = Joi.string().alphanum().min(3).max(15);

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  job: job.required(),
});

const updateUserSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  job: job,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
