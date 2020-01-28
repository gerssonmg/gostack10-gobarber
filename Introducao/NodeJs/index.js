const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.send({ message: 'Hello World' });
})

server.listen(3000);

//oi

//h