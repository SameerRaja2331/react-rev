import React, { useState } from "react";
import axios from "axios";

function PostForm() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "userId") {
      setUserId(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "body") {
      setBody(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const payLoad = { userId, title, body };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", payLoad)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={body}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default PostForm;
