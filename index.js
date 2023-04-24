const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hola mi server en express</h1>');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('<h1>Hola, soy una nueva ruta</h1>');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
