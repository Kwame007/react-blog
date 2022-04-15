import Blogs from "./Blogs";
import Styles from "./BlogList.module.css";
import { Link } from "react-router-dom";

const BlogList = ({ data }) => {
  return (
    <div className={Styles.content}>
      <h2>All Blogs</h2>
      {/* Dynamic content rendering */}
      {data.map((blog) => {
        return (
          <Link
            to={`/blogs/${blog.id}`}
            key={blog.id}
            style={{ textDecoration: "none" }}
          >
            <Blogs blog={blog} />
          </Link>
        );
      })}{" "}
    </div>
  );
};
export default BlogList;
