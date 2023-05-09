const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const path = require('path');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

// const whitelist = ['http://127.0.0.1:5500', 'https://myapp.com'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('no permitido'));
//     }
//   },
// };
// app.use(cors(options));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public/'))); // using static files with express
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}/api/v1`);
});
