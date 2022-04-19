import useFetchData from "./useFetchData";
import { useParams, useNavigate } from "react-router-dom";

import Styles from "./BlogDetails.module.css";
import { useState } from "react";
import EditBlogModal from "./EditBlogModal";

const BlogDetails = () => {
  const [editState, setEditState] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useFetchData(
    `http://localhost:8000/blogs/${id} `
  );
  const navigate = useNavigate();

  // handle delete function
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id} `, { method: "DELETE" })
      .then(() =>
        // redirect to home after delete {(-1) return to prev page before deletion}
        navigate(-1)
      )
      .catch((err) => console.log(err.message));
  };
  // handle delete function
  const handleEdit = () => {
    console.log("edit clicked");
    setEditState(true);
  };
  return (
    <>
      <div
        className={Styles["blog-details"]}
        style={{ maxWidth: "700px", margin: "100px auto" }}
      >
        {editState && <EditBlogModal closeModal={setEditState} blog={data} />}
        {isLoading && <h4 className="loading">Loading...</h4>}
        {!isLoading && (
          <article>
            <h2>{data.title}</h2>
            <h5>
              Written by : <span className={Styles.author}>{data.author}</span>{" "}
            </h5>
            <div>{data.body}</div>
            <div className={Styles["btn-group"]}>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete blog</button>
            </div>
          </article>
        )}
      </div>
    </>
  );
};
export default BlogDetails;
