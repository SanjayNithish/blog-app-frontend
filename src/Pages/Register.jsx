import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { api } from "../api/api";
import "../App.css";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/user/register", {
        username: input.name,
        email: input.email,
        password: input.password,
      });
      if (data.success) {
        alert("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={input.email}
            onChange={handleChange}
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already registered? <Link to="/login">Please login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
