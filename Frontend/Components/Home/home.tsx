import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section id="home">
      <div className="home-cont">
        <div className="home-text-cont">
          “Nothing wrong in being <br />
          <span className="beauty-text">BEAUTY”</span>
          <div className="author-name">~Founder</div>
        </div>
        <Link to="/services">
        <button className="bottom-left-button">
          Explore <i className="bx bx-right-arrow-alt"></i>
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
