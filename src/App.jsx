import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  const submitHandle = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("")

  };
  return (
    <>
      <h1 className="font-semibold text-2xl">TODO App </h1>
      <form onSubmit={submitHandle}>
        <input
          className="border bg-gray-100"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit"
        disabled={!todo}>Ekle</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
