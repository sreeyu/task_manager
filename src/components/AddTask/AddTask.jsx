import React from "react";
import TaskForm from "./TaskForm";
import Section from "../UI/Section";
import useHttp from "../../hooks/use-http";

function AddTask(props){

    const {loading, error, sendRequest} = useHttp();

    const createTask = (task, taskData) => {

        const taskId = taskData.name;
        const createdTask = {id: taskId, text: task};

        props.onAdd(createdTask);
    }

    

    const getNewTask = async (task) =>{

        

        sendRequest({url: "https://taskmanager-72f8e-default-rtdb.firebaseio.com/tasks.json",
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: {text: task }
                    }, createTask.bind(null, task))
    }

    return(
        <Section>
            <TaskForm onAddTask={getNewTask} isLoading={loading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default AddTask;