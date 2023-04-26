const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const stock = Joi.number().integer().min(0).max(100);

const createCategorySchema = Joi.object({
  name: name.required(),
  stock: stock.required(),
});

const updateCategorySchema = Joi.object({
  name: name,
  stock: stock,
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
  getCategorySchema,
};
