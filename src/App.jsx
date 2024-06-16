import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Blogs from "./Pages/Blogs";
import Login from "./Pages/Login";
import UserBlog from "./Pages/UserBlog";
import Register from "./Pages/Register";
import CreateBlog from "./Pages/CreateBlog";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myblogs" element={<UserBlog />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
