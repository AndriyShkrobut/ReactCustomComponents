import React from 'react';
import './ToDoItem.css';

function ToDoItem(props) {
    return(
        <div className="todo_item">
            <input onChange={() => props.handleChange(props.item.id)} type="checkbox" checked={props.item.completed}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem;