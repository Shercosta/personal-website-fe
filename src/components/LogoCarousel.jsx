import React from "react";
import LogoSlider from "./LogoSlider";
import { Link } from "react-router-dom";

const LogoCarousel = () => {
  return (
    <div className="ms-auto">
      <div className="position-relative box-relative">
        <div className="position-absolute box-absolute z-3">
          <Link to={"/skills"} className="text-decoration-none">
            <img
              src="/Tech-holder.svg"
              className="w-100 h-100 glow-when-hovered"
            />
          </Link>
        </div>
        <div className="position-absolute logo-absolute">
          <LogoSlider />
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
