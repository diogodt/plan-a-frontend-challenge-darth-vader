import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormInput from '../components/FormInput';
import './Login.css';
import { loadUser, login } from '../store/actions/authActions';

const Login = ({ login, loadUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          minLength="6"
          required
        />
        <button className="btn" type="submit" disabled={!email || !password}>
          Sign In
        </button>
        <div className="vader-quote">&apos;Obi-Wan has taught you well, but you are not a Jedi yet. Your destiny lies with me! Join me, and together we can rule the galaxy as boss and developer. Come with me. It is the only way.&apos;</div>
      </form>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired
};

export default connect(null, { loadUser, login })(Login);
