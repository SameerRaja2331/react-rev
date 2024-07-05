import React, { useReducer } from "react";

const initialState = { firstCounter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UpdatedCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count.firstCounter}
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default UpdatedCounter;
