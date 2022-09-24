import React from "react";

export default function Form({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form action="">
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="Add a todo item"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          Submit
        </button>

      </form>
    </div>
  );
}
