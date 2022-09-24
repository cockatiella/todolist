import React, { useState } from "react";
import Todo from "./Todo";

export default function TodoList({todos, setTodos, text}) {
    const [inputText, setInputText] = useState('');

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
            {todos.map((todo) => (
                <Todo 
                text={todo.text}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                 />
            ))}
        </ul>
      </div>
    </div>
  );
}
