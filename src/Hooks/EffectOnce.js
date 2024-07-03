import React, { useEffect, useState } from "react";

function EffectOnce() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event: ");
    setX(e.clientX);
    setY(e.clientY);
  };

  //Here we don't want useEffect to depend on anything, we want to call it only
  //once on initial render only.
  //We achieve this by passing second argument as an empty array. (So basically
  //we are saying that this particular effect doesn't depend on anything)
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    //To remove an event listener, we return that cleanup as a function
    return () => {
      console.log("Component Unmounting Code...");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} : Y - {y}
    </div>
  );
}

export default EffectOnce;
