import React from "react";
import BlogList from "./BlogsList";
import useFetchData from "./useFetchData";

const Home = () => {
  const { data, isLoading, error } = useFetchData(
    "http://localhost:8000/blogs"
  );

  console.log(data);
  return (
    <React.Fragment>
      <div className="blog-preview">
        {isLoading && <h3 className="loading">Loading... </h3>}
        {!isLoading && <BlogList data={data} />}
      </div>
    </React.Fragment>
  );
};
export default Home;
