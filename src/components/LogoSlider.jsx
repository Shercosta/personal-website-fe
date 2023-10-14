import React from "react";
import Slider from "react-infinite-logo-slider";
import { useSelector } from "react-redux";

const LogoSlider = () => {
  const theme = useSelector((state) => state.themeSlice);
  const light = "#FFFAFB";
  const dark = "#131515";
  const blurBorderColor = () => {
    return theme === "light" ? light : dark;
  };

  return (
    <Slider
      width="300px"
      duration={50}
      pauseOnHover={false}
      blurBorders={true}
      blurBoderColor={blurBorderColor()}
    >
      <Slider.Slide>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ejs_icon_130626.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://cdn.worldvectorlogo.com/logos/redux.svg"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png"
          className="img-slider"
        />
      </Slider.Slide>
      <Slider.Slide>
        <img
          src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
          className="img-slider"
        />
      </Slider.Slide>
    </Slider>
  );
};

export default LogoSlider;
