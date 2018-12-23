import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/navbar/NavBar';
import ToDoList from './components/todolist/ToDoList'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NavBar logoSRC={require('./components/navbar/logo.svg')}/>, document.getElementById('topBar'));
ReactDOM.render(<ToDoList />, document.getElementById('toDoList'));
serviceWorker.unregister();