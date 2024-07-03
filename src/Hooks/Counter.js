import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const countHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <>
      {counter}
      <div>
        <button onClick={countHandler}>Increment</button>
      </div>
    </>
  );
}

export default Counter;
