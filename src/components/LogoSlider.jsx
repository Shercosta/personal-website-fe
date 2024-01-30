import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";
import logos from "../arrays/techs";

const LogoSlider = () => {
  const theme = useSelector((state) => state.themeSlice);
  const light = "#FFFAFB";
  const dark = "#131515";
  const blurBorderColor = () => {
    return theme === "light" ? light : dark;
  };

  return (
    <Marquee
      gradient={true}
      gradientWidth={100}
      gradientColor={blurBorderColor()}
    >
      {logos.map((logo) => {
        return <img src={logo.logoUrl} className="img-slider" />;
      })}
    </Marquee>
    // <p>Do you think i've gone blind?</p>
  );
};

export default LogoSlider;
