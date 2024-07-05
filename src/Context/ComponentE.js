import React, { useContext } from "react";
import { UserContext, phoneContext } from "../App";

function ComponentE() {
  const user = useContext(UserContext);
  const phone = useContext(phoneContext);
  return (
    <h1>
      {user} is using {phone} phone.
    </h1>
  );
}

export default ComponentE;
