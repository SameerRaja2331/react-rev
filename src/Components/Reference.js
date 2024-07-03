import React, { useRef, useEffect } from "react";

function Reference() {
  // Create a reference using useRef
  const inputRef = useRef(null);

  // Focus the input when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function submitHandler() {
    alert(`Hello ${inputRef.current.value}`);
  }

  return (
    <div>
      <h1>Focus Input Example</h1>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Reference;
