import React, { useEffect, useState } from "react";

function ConditionalEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating doc title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
}

export default ConditionalEffect;
