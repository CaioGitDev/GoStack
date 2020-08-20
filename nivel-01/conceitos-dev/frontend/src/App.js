import React, { useState, useEffect } from "react";
import api from './services/api';
import './App.css';
import Header from "./components/Header";

function App() {
  // use state retorna um array com duas posições
  // na 1º variavel com o seu valor inicial
  // 2º função que atualiza esse valor
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function handleAddProject() {
    // setProjects(
    //   [...projects, `new project ${Date.now()}`]
    // );
    const response = await api.post('projects', {
      title: "faker_data",
      owner: "faker_data"
    });
    const project = response.data;
    setProjects([...projects, project]);
  }
  return (
    <>
      <h1>asdasd</h1>
      <Header title="homepage">
      </Header>

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}> add new project</button>
    </>
  );
}
export default App;
