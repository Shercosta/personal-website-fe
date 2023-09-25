import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselSection = ({ contents }) => {
  return (
    <Carousel>
      {contents.map((val) => {
        return (
          <Carousel.Item>
            <div className="carousel-parent">
              <img src={val.image} className="img-carousel" />
            </div>
            <Carousel.Caption>
              <h3>{val.label}</h3>
              <p>{val.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselSection;
