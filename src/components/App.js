import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <p data-ns-test="project-name">Project Name: Kanban Task Manager</p>
      <p data-ns-test="project-description">Description: A task management web app based on kanban methodologies,
        in which user can create multiple kanban boards with each board having its separate set of tasks and subtasks,
        categorised into three columns named "ToDo", "Doing" and "Done.
      </p>
    </div>
  )
}


export default App;
