import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  return (
    <div className="main-container">
      <div className='center-container'>
        <TodoInput todoLists= {todoLists} setTodoLists= {setTodoLists} editTodo ={editTodo} setEditTodo ={setEditTodo}/>
        <TodoList todoLists= {todoLists} setTodoLists= {setTodoLists} setEditTodo ={setEditTodo}/>

      </div>
      
    </div>
  );
}

export default App;
