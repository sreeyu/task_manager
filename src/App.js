import React, { useState } from "react";
import AddTask from "./components/AddTask/AddTask";

function App() {

  const [tasks, setTasks] = useState([]);

  const getNewTask = (newTask) =>{
    setTasks((prevTasks) => prevTasks.concat(newTask));
  }
  
  return (
    <div className="App">
      <AddTask onAdd={getNewTask} />
    </div>
  );
}

export default App;
