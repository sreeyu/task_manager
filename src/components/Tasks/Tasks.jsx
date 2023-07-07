import React from "react";
import TaskItem from "./TaskItem";

function Tasks(props){

    let taskList = <h2>No tasks found. Start adding something</h2>

    if(props.items.length > 0){
        taskList =(
        <ul>
            {props.items.map((task) => (
                <TaskItem key={task.id}>{task.text}</TaskItem>
            ))}
        </ul>)
    }

    let content = taskList;

    if(props.isLoading){
        content = 'Loading tasks...'
    }

    return(
        <div>{content}</div>
    )
};

export default Tasks;