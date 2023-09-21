import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Edd", "Ed", "Eddy"];
    const potentialIndex = Math.floor(Math.random() * names.length);
    return names[potentialIndex];
  };

  const handleClick = () => {
    console.log("You clicked it!");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello, {handleNameChange()}!</p>
      <button onClick={handleClick}>Click it</button>
      <br />

      <p>Click events with functions:</p>
      <button onClick={() => handleClick2(handleNameChange())}>Click it</button>
      <br />

      <p>Click events with events:</p>
      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  );
};

export default Content;
