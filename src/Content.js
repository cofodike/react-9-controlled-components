import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Edd", "Ed", "Eddy"];
    const potentialIndex = Math.floor(Math.random() * names.length);
    return names[potentialIndex];
  };
  return (
    <main>
      <p>Hello, {handleNameChange()}!</p>
    </main>
  );
};

export default Content;
