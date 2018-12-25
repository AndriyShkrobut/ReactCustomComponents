import React from 'react';
import './ToDoItem.css';

function ToDoItem(props) {
    const completedStyle = {
        color: "grey",
        textDecoration: "line-through"
    }
    return(
        <label className="todo_item">
            <input onChange={() => props.handleChange(props.item.id)} type="checkbox" checked={props.item.completed}/>
            <p style={props.item.completed ? completedStyle : null }>{props.item.text}</p>
        </label>
    )
}

export default ToDoItem;