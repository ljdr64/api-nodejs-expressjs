const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hola mi server en express</h1>');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('<h1>Hola, soy una nueva ruta</h1>');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
