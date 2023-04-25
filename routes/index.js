const productRouter = require('./products.router');
const categoryRouter = require('./categories.router');
const userRouter = require('./users.router');

function routerApi(app) {
  app.use('/api/products', productRouter);
  app.use('/api/categories', categoryRouter);
  app.use('/api/users', userRouter);
}

module.exports = routerApi;
