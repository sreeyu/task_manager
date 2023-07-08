import React from "react";
import TaskItem from "./TaskItem";
import Section from "../UI/Section";
import styles from './Tasks.module.css'

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

    if(props.isError){
        content = <button onClick={props.onFetch} >Try again</button>
    }

    if(props.isLoading){
        content = 'Loading tasks...'
    }

    return(
        <Section>
            <div className={styles.container} >{content}</div>
        </Section>
    )
};

export default Tasks;