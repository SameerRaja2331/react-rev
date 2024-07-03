import React from "react";

function ListRendering() {
  const persons = [
    { id: 1, name: "John", age: 21, skill: "Research" },
    { id: 2, name: "wick", age: 25, skill: "search" },
    { id: 3, name: "Tony", age: 31, skill: "lab" },
    { id: 4, name: "One", age: 41, skill: "phone" },
    { id: 5, name: "Don", age: 25, skill: "guns" },
  ];

  const personsList = persons.map((person) => (
    <h1 key={person.id}>
      I am {person.name}, my age is {person.age}
    </h1>
  ));
  return <div>{personsList}</div>;
}

export default ListRendering;
