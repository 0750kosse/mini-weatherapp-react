import React from "react";

function Header({ title }) {
  return (
    <header className="header">
      <h1>
        {title}
        <p>Meteor</p>
        <p>polis</p>
      </h1>
    </header>
  );
}

export default Header;
