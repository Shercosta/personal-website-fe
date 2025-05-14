import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";

const CarouselSection = ({ contents }) => {
  const getTheme = useSelector((state) => state.themeSlice);
  const buttonVariant = (theme) => {
    return theme === "light" ? "dark" : "light";
  };

  return (
    <>
      <Carousel
        fade
        controls={false}
        pause={'hover'}
        indicators={true}
        variant="dark"
        touch
        className="carousel-dark"
      >
        {contents.map((val) => {
          return (
            <Carousel.Item>
              <div className="carousel-parent" title="hover to pause">
                <div className="carousel-text">
                  <h3>{val.label}</h3>
                  <p>{val.caption}</p>
                  {!!val.link && (
                    <a href={val.link} target="_blank" className="btn-explore">
                      <Button variant={buttonVariant(getTheme)}>Explore</Button>
                    </a>
                  )}
                </div>
                <div className="carousel-image">
                  {!!val.image && (
                    <img src={val.image} className="image-carousel" />
                  )}
                  {!val.image && (
                    <img
                      src="https://i.imgur.com/IRjB7hq.png"
                      className="image-carousel"
                    />
                  )}
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
