import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("React");

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function commentsHandler(event) {
    setComments(event.target.value);
  }

  function topicHandler(event) {
    setTopic(event.target.value);
  }

  function submitHandler(event) {
    alert(`${email} ${comments} ${topic}`);
    event.preventDefault(); //prevents default form submission behavior.
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email : </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div>
          <label>Comments : </label>
          <textarea
            name="comments"
            placeholder="Enter your comments"
            value={comments}
            onChange={commentsHandler}
          />
        </div>
        <div>
          <label>Topic</label>
          <select name="topic" value={topic} onChange={topicHandler}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
