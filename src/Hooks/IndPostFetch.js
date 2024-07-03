import React, { useEffect, useState } from "react";
import axios from "axios";

function IndPostFetch() {
  const [data, setData] = useState([]);
  const [inputPid, setInputPid] = useState(1);
  const [pid, setPid] = useState(1);

  const clickHandler = () => {
    setInputPid(pid);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${inputPid}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [inputPid]);

  return (
    <>
      {data.title}
      <input
        type="text"
        value={pid}
        onChange={(e) => {
          setPid(e.target.value);
        }}
      />
      <button type="button" onClick={clickHandler}>
        Fetch
      </button>
    </>
  );
}

export default IndPostFetch;
