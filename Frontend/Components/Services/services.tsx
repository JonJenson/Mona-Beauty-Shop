import React from "react";
import { ServicesData } from "../../../Data/services-data";
import ServicesCard from "./services-card";
import "./services.css";
import { Link } from "react-router-dom";

const Services = () => {


  return (
    <section id="services">
      <div className="services-cont">
        
        <h2 className="services-title">Step into a World of Beauty!</h2>
        <div className="card-cont">
          {ServicesData.map((item, index) => (
            <ServicesCard
              key={index}
              image={item.image}
              heading={item.heading}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className="bridal-cont">
        <Link to="" className="bridal">
          <img src="./bridal-text.png" alt="BRIDAL" className="bridal-image" />
          <span className="mona-text">By MONA</span>
        </Link>
      </div>
    </section>
  );
};

export default Services;
