import React from "react";
import "./home3.css";
import { Link } from "react-router-dom";

const Home3: React.FC = () => {
  return (
    <section id="home3">
      <div className="home3-cont">
        <div className="home3-text-cont">
          “Nothing<br />
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

export default Home3;
