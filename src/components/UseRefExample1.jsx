import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    inputRef.current.value = "Hello";
    //Important: when you change a reference value, it does not render the component as if you were to set a state value.
    inputRef.current.style.backgroundColor = "#F0F3F4";
    // You have all those methods and properties that you can use, just like you would with vanilla JavaScript
    paraRef.current.innerText = "Thank you!";
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name" className="mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          className="form-control mb-3"
          placeholder="Your name"
        />
        <button type="submit" className="btn btn-primary mb-4">
          Submit
        </button>
      </form>
      <p
        ref={paraRef}
        onClick={() => inputRef.current.focus()}
        className="h3"
      ></p>
    </div>
  );
}

export default UseRefExample1;
