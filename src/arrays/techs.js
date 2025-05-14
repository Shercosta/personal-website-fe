const logos = [
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    logoName: "JavaScript",
    used: 5,
    level: 5,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    logoName: "Python",
    used: 2,
    level: 2,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
    logoName: "C++",
    used: 3,
    level: 2,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    logoName: "React.js",
    used: 4,
    level: 5,
  },
  {
    logoUrl:
      "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
    logoName: "Node.js",
    used: 5,
    level: 5,
  },
  {
    logoUrl:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ejs_icon_130626.png",
    logoName: "EJS",
    used: 5,
    level: 5,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
    logoName: "HTML5",
    used: 5,
    level: 5,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    logoName: "CSS3",
    used: 5,
    level: 5,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    logoName: "Bootstrap",
    used: 5,
    level: 5,
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    logoName: "Redux",
    used: 2,
    level: 5,
  },
  {
    logoUrl:
      "https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma",
    logoName: "Figma",
    used: 4,
    level: 3,
  },
  {
    logoUrl:
      "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png",
    logoName: "MySQL",
    used: 1,
    level: 3,
  },
  {
    logoUrl:
      "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    logoName: "MongoDB",
    used: 4,
    level: 4,
  },
  {
    logoUrl:
      "https://images.sftcdn.net/images/t_app-icon-m/p/d61d2782-b12f-4919-b266-11705619e2c9/2739762855/balsamiq-mockups-logo.png",
    logoName: "Balsamiq",
    used: 5,
    level: 4,
  },
  {
    logoUrl: "https://1000logos.net/wp-content/uploads/2020/08/Django-Logo.png",
    logoName: "Django",
    used: 1,
    level: 1,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Htmx_Logo.png",
    logoName: "HTMX",
    used: 1,
    level: 3,
  },
  {
    logoUrl: "https://sass-lang.com/assets/img/styleguide/seal-color.png",
    logoName: "SASS",
    used: 1,
    level: 3,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    logoName: "PostgreSQL",
    used: 5,
    level: 5,
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    logoName: "Next.js",
    used: 1,
    level: 3,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    logoName: "Vue.js",
    used: 3,
    level: 3,
  },
  {
    logoUrl: "https://avatars.githubusercontent.com/u/7552965?s=280&v=4",
    logoName: "Mongoose js",
    used: 3,
    level: 4,
  },
  {
    logoUrl:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/jquery_vertical_logo_icon_169489.png",
    logoName: "JQuery",
    used: 3,
    level: 3,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png",
    logoName: "PHP",
    used: 5,
    level: 5,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    logoName: "TypeScript",
    used: 5,
    level: 4,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    logoName: "Laravel",
    used: 5,
    level: 5,
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png",
    logoName: "Go",
    used: 5,
    level: 4,
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    logoName: "Tailwind CSS",
    used: 5,
    level: 4,
  },
  {
    logoUrl: "https://www.docker.com/favicon.ico",
    logoName: "Docker",
    used: 5,
    level: 2,
  },
];

export default logos;
