import React, { useState } from "react";

function ObjectHook() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="firstName"
          value={name.firstName}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="lastName"
          value={name.lastName}
          onChange={changeHandler}
        />
        <h1>FirstName: {name.firstName}</h1>
        <h1>LastName: {name.lastName}</h1>
      </form>
    </>
  );
}

export default ObjectHook;
