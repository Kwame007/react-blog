import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={Styles.navbar}>
      <h1>The React Blog 📚</h1>
      <div className={Styles.links}>
        <Link to="/">Home 🏠</Link>
        <Link to="/createBlog">New Blog ➕</Link>
      </div>
    </nav>
  );
};
export default Nav;
