import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //*const sqrt = getSqrt(number);

  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div className="mt-5">
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="form-control w-25"
      />
      <h4 className="mt-2">{sqrt}</h4>
      <button className="btn btn-outline-dark my-2" onClick={onClick}>
        Re render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );

  //*Clicking the re render button to increment the inc value causes a re render and it also fires off the square root function. Now when we when we click that button and we change inc, we're not changing the value of the number. So this is a good opportunity to memorize the value of square root.
}

function getSqrt(n) {
  for (let i = 1; i <= 10000; i++) {
    console.log(i);
  } // This loop is to cal an expensive function (it will take more than a couple of seconds to run)
  console.log("Expensive function called!");

  return Math.sqrt(n);
}

export default UseMemoExample;
