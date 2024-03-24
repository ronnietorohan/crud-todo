import React from "react";

const TodoList = ({ todoLists, setTodoLists, setEditTodo }) => {
  const deleteListTodo = (todo) => {
    let deletedtodo = todoLists.filter((item) => item.id !== todo.id);
    setTodoLists(deletedtodo);
  };

  const handleComplete = (todo) => {
    setTodoLists(
      todoLists.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    let newEditedTodo = todoLists.find((todo) => todo.id === id)
    setEditTodo(newEditedTodo)
  };

  return (
    <div>
      {todoLists.map((todo) => (
        <li className="list-item" key={todo.id}>
          <span className={`${todo.completed ? "complete" : ""}`}>
            {todo.title}
          </span>

          <span className="icons">
            <i
              className="fa-solid fa-trash-can"
              onClick={() => {
                deleteListTodo(todo)
              }}
            ></i>
            <i
              className="fa fa-check-circle"
              onClick={() => {
                handleComplete(todo)
              }}
            ></i>
            <i
              className="fa fa-edit"
              onClick={() => handleEdit(todo) }
            ></i>
          </span>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
