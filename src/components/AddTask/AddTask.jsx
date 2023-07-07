import React, { useState } from "react";
import TaskForm from "./TaskForm";

function AddTask(props){

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getNewTask = async (task) =>{
        setLoading(true);
        setError(null);

        try{
            const response = await fetch(
                "https://taskmanager-72f8e-default-rtdb.firebaseio.com/tasks.json",
                {
                    method: 'POST',
                    body: JSON.stringify({text: task }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            
            if(!response.ok){
                throw new Error('Request Failed!');
            }

            const data = await response.json();

            const taskId = data.name;
            const createdTask = {id: taskId, text: task};

            props.onAdd(createdTask);
        } catch(err){
            setError(err.message || 'Something went wrong')
        }
        setLoading(false);
    }

    return(
        <div>
            <TaskForm onAddTask={getNewTask} isLoading={loading} />
            {error && <p>{error}</p>}
        </div>
    );
};

export default AddTask;