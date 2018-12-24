import React from 'react';
import './ToDoList.css';
import ToDoItem from './sub_components/ToDoItem'
import todoData from './todoData'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(id) {
        this.setState(prevState => {
            const newState = prevState.todos.map(todo => {
                if(todo.id === id )
                {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {
                todos : newState
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>);
        return(
            <div className="todo_block">
                <div className="todo_list">
                    {todoItems}
                </div>
                <input className="sbm_btn" type="submit" value="send" />
            </div>
        )
    }
}

export default ToDoList