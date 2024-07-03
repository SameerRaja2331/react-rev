import React, { useState } from "react";
import EffectOnce from "./EffectOnce";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <EffectOnce />}
    </div>
  );
}

export default MouseContainer;
