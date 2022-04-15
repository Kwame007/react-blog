import React from "react";
import Styles from "./Blogs.module.css";

const Blogs = ({ blog: { title, author } }) => {
  return (
    <div className={Styles["blog-preview"]}>
      <h2>{title}</h2>
      <p> Published by : {author}</p>
    </div>
  );
};

export default Blogs;
