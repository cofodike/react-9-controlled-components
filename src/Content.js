import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Edd", "Ed", "Eddy"];
    const potentialIndex = Math.floor(Math.random() * names.length);
    setName(names[potentialIndex]);
  };

  const handleClick = () => { 
    setCount(count + 1);
    console.log(count);
  };

  const handleClick2 = (name) => {
    console.log(count);
  };


  return (
    <main>
      <p onDoubleClick={handleNameChange}>
        Hello, {name}! (double click on "Hello").
      </p>

      <button onClick={handleNameChange}>Change name again!</button>
      <br />

      <p>Understanding hook states using a count variable:</p>
      <button onClick={handleClick}>Click it</button>
      <br />

      <p>More on hook states:</p>
      <button onClick={handleClick2}>Click it</button>
    </main>
  );
};

export default Content;
