import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ todoLists, setTodoLists, editTodo, setEditTodo }) => {
  const [inputText, setInputText] = useState("");

  const updateTodo = (title, id, completed) => {
    let editingTodo = todoLists.map((todo) =>todo.id === id ? { title, id, completed } : todo );
    setTodoLists(editingTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInputText(editTodo.title);
    } else {
      setInputText("");
    }
  }, [setInputText, editTodo]);

  const addTodo = (inputText) => {
    if (!editTodo) {
      setTodoLists([...todoLists,{ id: uuidv4(), title: inputText, completed: false },]);
      setInputText("");
    } else {
      updateTodo(inputText, editTodo.id, editTodo.completed);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 ) {
       if(inputText !== ''){
      setTodoLists([...todoLists,{ id: uuidv4(), title: inputText, completed: false },]);
    }
      setInputText("");
    }
  };

  return (
    <div className="input-container">
      <input
        className="input-box-todo"
        type="text"
        value={inputText}
        placeholder="wooow..."
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="add-btn"
        onClick={() => {
          if (inputText !== "") {
            addTodo(inputText);
          }
        }}
      >
        
        add
      </button>
    </div>
  );
};

export default TodoInput;
