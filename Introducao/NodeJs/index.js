const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = {"name":"Diego"}
server.use(express.json());
// CRUD - Create, Read, Update, Delete

const users = ['Diego', 'Claudio', 'Victor'];

server.use((req, res, next) => {

  console.time('Req');
  next();
  console.timeEnd('Req');
});

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', checkUserInArray, (req, res) => {
  return res.json(req.use);
});

server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;
  console.log(name);
  users.push(name);
  return res.json(users);
})

server.put('users/:index', checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
})

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
})

function checkUserInArray(req, res, next) {
  const use = users[req.params.index];

  if (!use) {
    return res.status(400).json({ error: 'User not find is required' });
  }
  req.use = use;
  return next();
}

function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'User name is required' });
  }
  return next();
}

server.listen(3000);