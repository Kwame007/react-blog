import { useRef } from "react";
import Styles from "./CreateBlog.module.css";

const CreateBlog = () => {
  const enteredTitle = useRef();
  const enteredBody = useRef();
  const enteredAuthor = useRef();

  // submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = enteredTitle.current.value;
    const body = enteredBody.current.value;
    const author = enteredAuthor.current.value;

    // new blog
    const newBlog = { title, author, body };
    console.log(newBlog);

    // post request
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <div className={Styles.create}>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" ref={enteredTitle} />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <select name="author " id="author" ref={enteredAuthor}>
              <option>mario 🧙🏼</option>
              <option>yoshi 🍄</option>
              <option>yamen 🐙</option>
            </select>
          </div>
          <div>
            <label htmlFor="body ">Body</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              ref={enteredBody}
            ></textarea>
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
};
export default CreateBlog;
