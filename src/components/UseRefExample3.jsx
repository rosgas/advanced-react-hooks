import { useState } from "react";
import Todo from "./Todo";

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div className="mt-5">
      {showTodo && <Todo />}
      <button
        className="btn btn-dark mt-3"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
}

export default UseRefExample3;
