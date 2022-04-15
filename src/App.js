import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import CreateBlog from "./Components/CreateBlog";
import Nav from "./Components/Nav";

import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />

        <Routes>
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
