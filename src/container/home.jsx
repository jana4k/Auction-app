import React from "react";
import "./home.css"; // Import custom CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-heading">Welcome to the Home Page!</h2>
      <p className="home-content">
        This is the home page content. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean rhoncus, sapien ac cursus euismod, felis neque
        gravida massa, vitae maximus nisi dolor vel leo. Nulla vel tortor lacus.
        Vivamus eu elit vel libero fermentum tincidunt ut id neque. Proin
        rhoncus urna et justo posuere lobortis. Sed id ex at justo dapibus
        congue. Curabitur rutrum dolor eu volutpat dignissim.
      </p>
    </div>
  );
};

export default Home;
