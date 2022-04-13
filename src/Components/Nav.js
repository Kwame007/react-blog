import React from "react";
import Styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={Styles.navbar}>
      <h1>The React Blog 📚</h1>
      <div className={Styles.links}>
        <a href="/">Home 🏠</a>
        <a href="/create">New Blog ➕</a>
      </div>
    </nav>
  );
};
export default Nav;
