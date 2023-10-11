import React from "react";

const LogoCarousel = () => {
  return (
    <div className="ms-auto">
      <div className="position-relative">
        <div className="position-absolute z-3">
          <img src="/public/Tech-holder.svg" className="logo-picture" />
        </div>
        <div className="position-absolute"></div>
      </div>
    </div>
  );
};

export default LogoCarousel;
