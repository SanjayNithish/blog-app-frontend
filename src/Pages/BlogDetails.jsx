import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;

  const [inputs, setInputs] = useState({});

  const getBlog = async () => {
    try {
      const { data } = await api.get(`/blog/getBlog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data.blog.title,
          description: data.blog.description,
          image: data.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog();
  }, [id]);
  console.log(blog);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.put(`/blog/updateBlog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        alert("Blog Updated");
        navigate("/myblogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={inputs.image}
          onChange={handleChange}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default BlogDetails;
