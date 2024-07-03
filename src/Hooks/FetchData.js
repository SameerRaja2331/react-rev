import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  }, []);

  return (
    <>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  );
}

export default FetchData;
