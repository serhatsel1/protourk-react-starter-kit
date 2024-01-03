import { useReducer, useState } from "react";

function App() {
  const reducer = (state, action) => {
    // console.log(state, action);
    switch (action.type) {
      case "SET_TODO":
        return {
          ...state,
          todo: action.value,
        };
      case "ADD_TODO":
        return {
          ...state,
          todo: "",
          todos: [...state.todos, action.todo],
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
    // setTodos([...todos, todo]);
    // setTodo("");
  };

  const onChange = (e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  };
  return (
    <>
      <h1 className="font-semibold text-2xl">TODO App </h1>
      <form onSubmit={submitHandle}>
        <input
          className="border bg-gray-100"
          type="text"
          value={state.todo}
          onChange={onChange}
        />
        <button type="submit" disabled={!state.todo}>
          Ekle
        </button>
      </form>
      <ul>
        {state.todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
