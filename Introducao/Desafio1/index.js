const express = require('express');

const server = express();

server.use(express.json());

const projectsBD = [];

server.get('/projects', (req, res) => {
  return res.send(projectsBD);
});

server.post('/projects', (req, res) => {
  const { id, title, tasks } = req.body;
  projectsBD.push({ id, title, tasks });
  return res.send(projectsBD);
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  console.time('Put');
  const project_att = projectsBD.map(project => {
    if (project.id === id) {
      project.title = title;
    }
  });
  console.timeEnd('Put');

  console.log('/n');

  console.time('Put');
  const project = projectsBD.find(p => p.id === id);

  project.title = title + 'rocketseat';
  console.timeEnd('Put');

  return res.send(projectsBD);
})

server.listen(3000);