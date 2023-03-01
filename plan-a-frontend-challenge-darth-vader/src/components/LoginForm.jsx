import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";
import FormInput from "./FormInput";
import '.LoginForm.css';

const LoginForm = ({ isAuthenticated, loginUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  const isButtonDisabled = !email || password.length < 6;
  
  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
          minLength={6}
        />
        <button
          type="submit"
          className="btn-primary"
          disabled={isButtonDisabled}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
