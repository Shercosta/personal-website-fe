import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";

const LogoSlider = () => {
  const theme = useSelector((state) => state.themeSlice);
  const light = "#FFFAFB";
  const dark = "#131515";
  const blurBorderColor = () => {
    return theme === "light" ? light : dark;
  };

  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
    "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ejs_icon_130626.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    "https://cdn.worldvectorlogo.com/logos/redux.svg",
    "https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma",
    "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png",
    "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    "https://balsamiq.com/assets/company/brandassets/smileyface-transparent-1080x1080.png",
    "https://1000logos.net/wp-content/uploads/2020/08/Django-Logo.png",
    "https://plugins.jetbrains.com/files/20588/418328/icon/pluginIcon.svg",
  ];

  return (
    <Marquee
      gradient={true}
      gradientWidth={100}
      gradientColor={blurBorderColor()}
    >
      {logos.map((logo) => {
        return <img src={logo} className="img-slider" />;
      })}
    </Marquee>
    // <p>Do you think i've gone blind?</p>
  );
};

export default LogoSlider;
