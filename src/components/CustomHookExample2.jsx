import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      title: task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="my-5">
          <label className="form-label">Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
      <hr />
      {tasks.map((task) => {
        return <h4 key={uuidv4()}>{task.title}</h4>;
      })}
    </>
  );
}

export default CustomHookExample2;
