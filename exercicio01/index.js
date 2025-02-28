const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('ex01'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});