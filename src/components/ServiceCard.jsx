import React, { useState } from "react";

const ServiceCard = ({ imageUrl, title, services }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsHovered(!isHovered);

  return (
    <div
      className="relative w-full h-64 md:h-80 overflow-hidden transition-transform duration-300 hover:scale-105 group rounded-lg shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 bg-black/60 transition-opacity duration-300">
        <h3
          className={`text-2xl font-bold text-center transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          {title}
        </h3>
        <ul
          className={`transition-opacity duration-300 text-lg text-center ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {services.map((service, index) => (
            <li key={index} className="mt-1">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
