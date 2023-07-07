import React from "react";

function TaskItem(props){

    return(
        <li>{props.children}</li>
    );
};

export default TaskItem;