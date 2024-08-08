import React from "react";


interface ServicesCardProps {
  image: string;
  heading: string;
  link: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ image, heading, link }) => {
  return (
    <a href={link} className="services-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="service-card-content">
        {heading}
      </div>
    </a>
  );
};

export default ServicesCard;
