import { useState, useEffect, useRef } from "react";

function UseRefExample2() {
  const [name, setName] = useState("");
  const renders = useRef(1);
  const prevName = useRef("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h3 className="mt-5">Renders:{renders.current} </h3>
      <h4>Prev Name State: {prevName.current}</h4>
      <input
        type="text"
        className="form-control mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseRefExample2;
