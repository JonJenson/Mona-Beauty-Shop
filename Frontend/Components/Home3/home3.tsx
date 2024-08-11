import React from "react";
import "./home3.css";
import { Link } from "react-router-dom";

const Home3: React.FC = () => {
  return (
    <section id="home3">
      <div className="home3-cont">
        <div className="home3-overlay"> </div>
        <div className="home3-text">
          Save money & enjoy your monthly
          <br />
          beauty benefits on <br />
          <span className="membership">Membership</span>
        </div>
      </div>
    </section>
  );
};

export default Home3;
