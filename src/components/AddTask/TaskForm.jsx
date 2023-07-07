import React, { useRef } from "react";

function TaskForm(props){

    const task = useRef('');

    const submitTask = (event) => {
        event.preventDefault();
        
        const enteredTask = task.current.value;

        if(enteredTask.trim().length > 0){
            props.onAddTask(enteredTask);
            task.current.value = '';
        }
    }

    return(
        <form onSubmit={submitTask} >
            <input type="text" ref={task} />
            <button>{props.isLoading ? 'Sending...' : 'Add Task'}</button>
        </form>
    );
};

export default TaskForm;