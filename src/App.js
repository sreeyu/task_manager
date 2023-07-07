import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";

function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTask = async() => {

    setLoading(true);
    setError(null);

    try{
      const response = await fetch(
        'https://taskmanager-72f8e-default-rtdb.firebaseio.com/tasks.json'
      );
  
      if(!response.ok){
        throw new Error('Request failed!');
      }
  
      const data = await response.json();

      const loadedTask = [];

      for(const taskKey in data){
        loadedTask.push({id: taskKey, text: data[taskKey].text});
      }

      setTasks(loadedTask)
    } catch (err){
      setError(err.message || 'Something went wrong!')
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const getNewTask = (newTask) =>{
    setTasks((prevTasks) => prevTasks.concat(newTask));
  }

  
  return (
    <div className="App">
      <AddTask onAdd={getNewTask} />
      <Tasks items={tasks} isLoading={loading} isError={error} onFetch={fetchTask} />
    </div>
  );
}

export default App;
