import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http";

function App() {

  const [tasks, setTasks] = useState([]);

  
  
  const {loading, error, sendRequest: fetchTask} = useHttp()

  

  useEffect(() => {

    const transformedTask = (taskObj) => {
      const loadedTask = [];
  
        for(const taskKey in taskObj){
          loadedTask.push({id: taskKey, text: taskObj[taskKey].text});
        }
  
        setTasks(loadedTask);
    };

    fetchTask({url: 'https://taskmanager-72f8e-default-rtdb.firebaseio.com/tasks.json'}, transformedTask);
  }, [fetchTask]);

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
