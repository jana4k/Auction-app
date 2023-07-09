import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/register/register";
import LoginForm from "./components/login/login";
import Home from "./container/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
