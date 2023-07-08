import React from "react";
import styles from './TaskItem.module.css'

function TaskItem(props){

    return(
        <li className={styles.task} >{props.children}</li>
    );
};

export default TaskItem;