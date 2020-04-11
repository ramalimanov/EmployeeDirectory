import React from "react";
import "./Header.css";

const styles = {
  headerStyle: {
    background: "#3106f5"
  },
  headingStyle: {
    fontSize: 50
  }
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Employee Directory</h1>
    </header>
  );
}

export default Header;
