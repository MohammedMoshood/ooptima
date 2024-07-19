import React, { useState } from "react";
import "../styles/Login.css";
import biglogo from "../assets/biglogo.png";
import { users } from "../data/student";
import { useNavigate } from "react-router";
const Login = ({ setrole, setauth }) => {
  const [formState, setFormState] = useState({
    email: "",
    pwd: "",
  });
  const [error, setError] = useState("");
  const user = users.find((user) => user.email == formState.email);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event?.preventDefault();
    if (user && user.password === formState.pwd) {
      setauth(true);
      setrole(user.role);
      navigate("/");
    } else {
      console.error("invalid credentials");
      setError("Invalid credentials");
      setTimeout(() => setError(""), 3000);
    }
  };
  const handleChange = (event) => {
    setFormState({ ...formState, [event?.target?.name]: event?.target?.value });
  };
  return (
    <main style={{ display: "flex" }}>
      <div className="left-container">
        <img src={biglogo} alt="Ooptima" />
      </div>
      <div className="right-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="top"> Welcome</div>
          <label htmlFor="email">Email</label>
          <input autoFocus type="email" name="email" onChange={handleChange} />
          <label htmlFor="pwd">Password</label>
          <input type="password" name="pwd" onChange={handleChange} />
          <a href="" className="forgot-p">
            Forgot password?
          </a>
          <span className="login-error">{error}</span>
          <button type="submit"> Login</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
