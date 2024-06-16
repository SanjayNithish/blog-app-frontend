import React, { useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
const BlogCard = ({
  title,
  description,
  image,
  username,
  time,
  id,
  isUser,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blogDetails/${id}`);
  };
  const handleDelete = async () => {
    try {
      const { data } = await api.delete(`/blog/deleteBlog/${id}`);
      if (data?.success) {
        alert("blog deleted");
        navigate("/blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={image} alt="Blog Header" />
        </div>
        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="user">
            <img src={image} alt={username} />
            <div className="user-info">
              <h5>{username}</h5>
              <small>{time}</small>
            </div>
          </div>
          {isUser && (
            <div className="card-footer">
              <button className="edit-button" onClick={handleEdit}>
                Edit
              </button>
              <button className="delete-button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
