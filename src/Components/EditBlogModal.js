import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Styles from "./EditBlogModal.module.css";
import Style from "./BackDrop.module.css";

// back drop
const BackDrop = (props) => {
  const onBackdropClick = () => {
    // hide modal
    props.onConfirm();
  };
  return <div className={Style.overlay} onClick={onBackdropClick}></div>;
};

// modal form component
const ModalOverlay = (props) => {
  const [editedBlog, setEditedBlog] = useState(props.blogData);
  const navigateTo = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();

    // get the id of blog to be updated
    const { id } = editedBlog;

    // make update request to server
    fetch(`http://localhost:8000/blogs/${id} `, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(editedBlog),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    // redirect to previous page
    navigateTo(-1);
  };

  const handleCancel = (event) => {
    event.preventDefault();

    // hide modal
    props.onConfirm();
  };

  const handleTitleChange = (event) => {
    // make a copybof the blog object {and update the copied object }
    setEditedBlog((prevBlog) => {
      return { ...prevBlog, title: event.target.value };
    });
  };

  const handleBodyChange = (event) => {
    setEditedBlog((prevBlog) => {
      return { ...prevBlog, body: event.target.value };
    });
  };

  return (
    <>
      <div className={Styles["blog-modal"]}>
        <form>
          <div className={Styles["form-group"]}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={editedBlog.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className={Styles["form-group"]}>
            <label htmlFor="">Author</label>
            <select name="author  " id="author">
              <option value={editedBlog.author}>{editedBlog.author}</option>
            </select>
          </div>
          <div className={Styles["form-group"]}>
            <label htmlFor="body  ">Body</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              value={editedBlog.body}
              onChange={handleBodyChange}
            ></textarea>
          </div>
          <button onClick={handleUpdate}>Update</button>
          <button
            onClick={handleCancel}
            style={{ backgroundColor: "#ff6560", marginLeft: "1rem" }}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

const EditBlogModal = (props) => {
  const closeModal = () => {
    props.closeModal(false);
  };
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={closeModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={closeModal} blogData={props.blog} />,
        document.getElementById("blog-modal")
      )}
    </>
  );
};
export default EditBlogModal;
