import React, { useContext } from "react";
import { countContext } from "../App";

function ComponentD() {
  const CountContext = useContext(countContext);
  return (
    <div>
      ComponentD - {CountContext.countState}
      <button onClick={() => CountContext.countDispatch("increment")}>
        increment
      </button>
      <button onClick={() => CountContext.countDispatch("decrement")}>
        decrement
      </button>
      <button onClick={() => CountContext.countDispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentD;
