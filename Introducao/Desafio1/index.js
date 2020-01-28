const express = require('express');

const server = express();

server.use(express.json());

const projectsBD = [];

/**
 * Middlewares
 */
function projectFind(req, res, next) {
  if (!projectsBD.find(project => project.id === req.params.id)) {

    console.log('AQUI');
    return res.status(400).json({ error: 'Project not found' });
  }
  next();
}

function printLogCount(req, res, next) {
  console.count('Numero de requisicoes');
  next();
}

/**
 * Routes
 */
server.get('/projects', printLogCount, (req, res) => {
  return res.json(projectsBD);
});

server.get('/projects/:id', printLogCount, projectFind, (req, res) => {
  console.log(req.params.id);
  return res.json(projectsBD.find(project => project.id === req.params.id));
});

server.post('/projects', printLogCount, (req, res) => {
  const { id, title, tasks } = req.body;
  projectsBD.push({ id, title, tasks });
  return res.json(projectsBD);
});

server.post('/projects/:id/tasks', printLogCount, projectFind, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projectsBD.find(project => project.id === id);

  project.tasks.push(title);

  return res.json(project);
})

server.put('/projects/:id', printLogCount, projectFind, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projectsBD.map(project => {
    if (project.id === id) {
      project.title = title;
    }
  });

  return res.json(projectsBD);
})

server.delete('/projects/:id', printLogCount, projectFind, (req, res) => {

  const { id } = req.params;

  const projectIndex = projectsBD.findIndex(project => project.id === id);

  if (projectIndex !== -1) {
    projectsBD.splice(projectIndex, 1);
  }

  return res.send(projectsBD);
})



server.listen(3000);