const express = require('express');
const cors = require('cors');
const faker = require('faker');
const { uuid, isUuid } = require('uuidv4');
const app = express();
app.use(cors());

/**
 * Middleware:
 * 
 * interceptador de requisilões que pode interromper totalmente a requisição ou alterar dados da requisição.
 * 
 */

//indica ao express que ele ira receber json
app.use(express.json());

const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`
  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const { id } = request.params;
  if (!isUuid(id)) {
    return response.status(400).json({ error: 'invalid uuid.' });
  }
  return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/', (request, response) => {
  return response.json({
    message: 'Hello world!'
  });
})

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title ? projects.filter(project => project.title.includes(title)) : projects;

  return response.send(results);
})

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = {
    "id": uuid(),
    "title": faker.name.title(),
    "owner": faker.name.findName(),
  };

  projects.push(project)

  return response.send(project);
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  const projectIndex = projects.findIndex(project => project.id === id);


  if (projectIndex < 0) {
    return response.status(400).json({ error: 'project not found.' });
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project;

  return response.send(project);
})

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;
  const projectIndex = projects.findIndex(project => project.id === id);


  if (projectIndex < 0) {
    return response.status(400).json({ error: 'project not found.' });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
})

app.listen(3333, () => {
  console.log('Its alive!');
})