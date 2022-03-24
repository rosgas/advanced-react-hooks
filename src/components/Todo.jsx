import { useState, useEffect, useRef } from "react";

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(true); // Initial value isMounted = true (we can't use a local variable 'let isMounted = true' here because it will be lost and re-initiated on each update render. useRef : returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            // Check always mounted component
            setTodo(data);
            setLoading(false);
          }
        }, 1000);
      });

    // Runs when component is unmounted (This is a cleanup function)
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return loading ? <h3>Loading...</h3> : <h3>{todo.title}</h3>;
}

export default Todo;
