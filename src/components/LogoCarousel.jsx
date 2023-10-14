import React from "react";

const LogoCarousel = () => {
  return (
    <div className="ms-auto">
      <div className="position-relative box-relative">
        <div className="position-absolute box-absolute z-3">
          <img src="/public/Tech-holder.svg" className="w-100 h-100" />
        </div>
        <div className="position-absolute box-absolute"></div>
      </div>
    </div>
  );
};

export default LogoCarousel;
