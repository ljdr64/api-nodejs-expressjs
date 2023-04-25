const express = require('express');

const productRouter = require('./products.router');
const categoryRouter = require('./categories.router');
const userRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/categories', categoryRouter);
  router.use('/users', userRouter);
}

module.exports = routerApi;
