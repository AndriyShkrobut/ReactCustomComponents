import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/navbar/NavBar';
import ToDoList from './components/todolist/ToDoList';
import Form from './components/form/Form';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavBar logoSRC={require("./components/navbar/logo.svg")}/>, document.getElementById('topBar'));
ReactDOM.render(<ToDoList />, document.getElementById('toDoList'));
ReactDOM.render(<Form />, document.getElementById('form'));
serviceWorker.unregister();