import React from "react";
import Blogs from "./Blogs";
import Styles from "./BlogList.module.css";
import useFetchData from "./useFetchData";

const BlogList = () => {
  const { data, isLoading, error } = useFetchData(
    "http://localhost:8000/blogs"
  );
  console.log(data);

  return (
    <div className={Styles.content}>
      <h2>All Blogs</h2>
      {/* Dynamic content rendering */}
      {isLoading && <p>Loading</p>}
      {!isLoading && data.map((blog) => <Blogs blog={blog} key={blog.id} />)}
    </div>
  );
};
export default BlogList;
