import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import axios from "axios";

const userBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`/blog/userBlog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
        console.log(blog);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCard
            id={blog._id}
            isUser={true}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user ? blog.user.username : "No User"}
            time={blog.createdAt}
          />
        ))
      ) : (
        <h1>you dont have any blogs</h1>
      )}
    </div>
  );
};

export default userBlog;
