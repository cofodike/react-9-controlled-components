import React from "react";

const Footer = ({ count }) => {
  return (
    <footer>
      <p>
        {count} {count === 1 ? "item" : "items"} in list
      </p>
    </footer>
  );
};

export default Footer;
