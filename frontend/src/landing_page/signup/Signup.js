import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import server from "../../environment";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

 const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (loading) return; // Prevent double submissions
  setLoading(true);

  try {
    const { data } = await axios.post(
      `${server}/login`, // Use `${server}/signup` in Signup.js
      { ...inputValue },
      { withCredentials: true }
    );
    const { success, message } = data;
    if (success) {
      handleSuccess(message);
      setInputValue({ email: "", password: "" }); // Reset only on success
      setTimeout(() => {
        navigate("/user");
      }, 1000);
    } else {
      handleError(message);
    }
  } catch (error) {
    console.error(error);
    handleError(
      error.response?.data?.message || "Server is waking up or unreachable. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" disabled={loading}>
            {loading ? "Please wait..." : "Submit"}
        </button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Signup;