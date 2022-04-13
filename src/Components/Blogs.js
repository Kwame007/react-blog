import React from "react";
import Styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className={Styles["blog-preview"]}>
      <h2>Blog One</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet
        assumenda quod rem provident necessitatibus magni autem in, nostrum
        porro numquam quis, dignissimos expedita error nesciunt rerum
        repellendus neque fugiat.
      </p>
    </div>
  );
};

export default Blogs;
