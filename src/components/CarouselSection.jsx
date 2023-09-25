import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-parent">
          <img
            src="https://e7.pngegg.com/pngimages/960/556/png-clipart-new-york-city-silhouette-building-cityscape-cool-urban-miscellaneous-city.png"
            className="img-carousel"
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;
