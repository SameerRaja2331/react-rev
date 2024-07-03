import React from "react";

function Welcome(props) {
  console.log(props);
  return (
    <>
      <h1>
        Welcome {props.name} working as a software {props.role}.
      </h1>
      <p>{props.children}</p>
    </>
  );
}

export default Welcome;
