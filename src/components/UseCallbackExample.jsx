import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "New Task"]);
  }, [setTasks]);

  return (
    <div className="mt-5">
      <Button addTask={addTask} />
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("button rendered");
  //Each time I click the button the button will be re-render. Wrapping the whole component function with React.memo and using the useCallback hooke we can prevent the re-render.

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={addTask}>
        Add task
      </button>
    </div>
  );
});

export default UseCallbackExample;
