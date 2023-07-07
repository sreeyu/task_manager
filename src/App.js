import React, { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";

function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNewTask = (newTask) =>{
    setTasks((prevTasks) => prevTasks.concat(newTask));
  }

  
  return (
    <div className="App">
      <AddTask onAdd={getNewTask} />
      <Tasks items={tasks} isLoading={loading} />
    </div>
  );
}

export default App;
