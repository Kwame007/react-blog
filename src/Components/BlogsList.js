import React, { useEffect } from "react";
import Blogs from "./Blogs";
import Styles from "./BlogList.module.css";
import useFetchData from "./useFetchData";

const BlogList = () => {
  useFetchData("http://localhost:8000/blog");

  return (
    <div className={Styles.content}>
      <h2>All Blogs</h2>
      <Blogs />
      <Blogs />
      <Blogs />
      <Blogs />
    </div>
  );
};
export default BlogList;
