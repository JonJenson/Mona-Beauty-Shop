import React from "react";
import { ServicesData } from "../../../Data/services-data";
import ServicesCard from "./services-card";
import "./services.css";

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
    </section>
  );
};

export default Services;
