import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/blog/allBlogs");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            isUser={
              localStorage.getItem("userId") === (blog.user && blog.user._id)
            }
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user ? blog.user.username : "No User"}
            time={blog.createdAt}
          />
        ))}
    </div>
  );
};

export default Blogs;
