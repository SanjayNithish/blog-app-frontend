import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Redux/Store";
import logo from "../assets/sn-logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userID");
  console.log(isLogin);

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      alert("Logout successful");
      localStorage.clear();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar">
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-brand">Blog App</div>
        {isLogin && (
          <div className="navbar-center">
            <Link to="/blogs" className="navbar-button">
              Blog
            </Link>
            <Link to="/myblogs" className="navbar-button">
              My Blogs
            </Link>
            <Link to="/createBlog" className="navbar-button">
              Create Blog
            </Link>
          </div>
        )}
      </div>
      <div className="navbar-buttons">
        {!isLogin && (
          <>
            <Link to="/register" className="navbar-button">
              Register
            </Link>
            <Link to="/login" className="navbar-button">
              Login
            </Link>
          </>
        )}
        {isLogin && (
          <button onClick={handleLogout} className="navbar-button">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
