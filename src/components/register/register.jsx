import React, { useState } from "react";
import "./register.css"; // Import custom CSS for styling

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!username || !password) {
      setError("Please enter a username and password");
      return;
    }

    try {
      // Make the registration request to the server
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Registration successful, redirect to the login page
        window.location.href = "/login";
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="registration-form-container">
      <div className="background"></div>
      <div className="content">
        <h2>Registration</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegistration}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
