const express = require('express');

const server = express();

server.use(express.json());

const projectsBD = [{}];

server.get('', (req, res) => {
  return res.send({ message: 'HelloDesafio' });
});

server.post('/projects', (req, res) => {
  const { id, title, tasks } = req.body;

});

server.listen(3000);