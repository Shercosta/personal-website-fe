import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const CarouselSection = ({ contents }) => {
  const getTheme = useSelector((state) => state.themeSlice);
  const buttonVariant = (theme) => {
    return theme === "light" ? "dark" : "light";
  };

  return (
    <>
      <Carousel fade controls={false} pause="hover" indicators={false}>
        {contents.map((val) => {
          return (
            <Carousel.Item>
              <div className="carousel-parent">
                <div className="carousel-text">
                  <h3>{val.label}</h3>
                  <p>{val.caption}</p>
                  <Button variant={buttonVariant(getTheme)}>Go</Button>
                </div>
                <div className="carousel-image">
                  <img src={val.image} className="image-carousel" />
                  {/* <hr /> */}
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselSection;
