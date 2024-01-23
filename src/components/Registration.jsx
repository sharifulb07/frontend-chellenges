import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [successMessage, SetSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = {
      username: "",
      password: "",
      email: "",
    };

    if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      valid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters ";
      valid = false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please Write a valid email address";
      valid = false;
    }

    if (valid) {
      setTimeout(() => {
        SetSuccessMessage("Registration Successful Now ");
      }, 2000);
    } else {
      SetSuccessMessage("");
    }

    setErrors(newErrors);
  };

  return (
    <div>
      <h1>Registration Form </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            placeholder="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="email"
            onChange={handleChange}
          />
        </div>
        {errors.username && <div className="errors">{errors.username}</div>}
        {errors.password && <div className="errors">{errors.password}</div>}
        {errors.email && <div className="errors">{errors.email}</div>}
        <button type="submit">Register</button>
        {successMessage && <div className="success">{successMessage}</div>}
      </form>
    </div>
  );
};

export default Registration;
