const logos = [
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png",
    logoName: "JavaScript",
    used: 5,
    level: 5,
    category: "Programming Languages",
  },
  {
    logoUrl:
      "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",
    logoName: "React Js",
    used: 4,
    level: 5,
    category: "Frontend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Angular_gradient_logo.png",
    logoName: "Angular",
    used: 1,
    level: 2,
    category: "Frontend",
  },
  {
    logoUrl:
      "https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png",
    logoName: "Node Js",
    used: 5,
    level: 5,
    category: "Backend",
  },
  {
    logoUrl:
      "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/csharp.png",
    logoName: "C#",
    used: 1,
    level: 1,
    category: "Programming Languages",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/960px-.NET_Core_Logo.svg.png",
    logoName: "ASP.NET Core",
    used: 1,
    level: 1,
    category: "Backend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/500px-Postgresql_elephant.svg.png",
    logoName: "PostgreSQL",
    used: 5,
    level: 5,
    category: "Databases",
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    logoName: "Next Js",
    used: 5,
    level: 5,
    category: "Frontend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/3840px-Vue.js_Logo_2.svg.png",
    logoName: "Vue Js",
    used: 4,
    level: 3,
    category: "Frontend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png",
    logoName: "TypeScript",
    used: 5,
    level: 5,
    category: "Programming Languages",
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    logoName: "Laravel",
    used: 5,
    level: 5,
    category: "Backend",
  },
  {
    logoUrl: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png",
    logoName: "Go",
    used: 5,
    level: 4,
    category: "Programming Languages",
  },
  {
    logoUrl:
      "https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png",
    logoName: "MySQL",
    used: 1,
    level: 3,
    category: "Databases",
  },
  {
    logoUrl:
      "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png",
    logoName: "MongoDB",
    used: 4,
    level: 4,
    category: "Databases",
  },
  {
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
    logoName: "Nest Js",
    used: 4,
    level: 5,
    category: "Backend",
  },
  {
    logoUrl:
      "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/287/square_480/prismaHD.png",
    logoName: "Prisma",
    used: 5,
    level: 5,
    category: "ORM / Data Tools",
  },
  {
    logoUrl:
      "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-svg-download-png-2945099.png?f=webp",
    logoName: "Python",
    used: 3,
    level: 3,
    category: "Programming Languages",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png",
    logoName: "C++",
    used: 3,
    level: 2,
    category: "Programming Languages",
  },
  {
    logoUrl:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_ejs_icon_130626.png",
    logoName: "EJS",
    used: 5,
    level: 5,
    category: "Templating / Rendering",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png",
    logoName: "HTML5",
    used: 5,
    level: 5,
    category: "Frontend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png",
    logoName: "CSS3",
    used: 5,
    level: 5,
    category: "Frontend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/960px-Bootstrap_logo.svg.png",
    logoName: "Bootstrap",
    used: 5,
    level: 5,
    category: "Styling / UI",
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    logoName: "Redux",
    used: 2,
    level: 5,
    category: "State Management",
  },
  {
    logoUrl:
      "https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma",
    logoName: "Figma",
    used: 4,
    level: 3,
    category: "Design Tools",
  },
  {
    logoUrl:
      "https://images.sftcdn.net/images/t_app-icon-m/p/d61d2782-b12f-4919-b266-11705619e2c9/2739762855/balsamiq-mockups-logo.png",
    logoName: "Balsamiq",
    used: 5,
    level: 4,
    category: "Design Tools",
  },
  {
    logoUrl: "https://1000logos.net/wp-content/uploads/2020/08/Django-Logo.png",
    logoName: "Django",
    used: 1,
    level: 1,
    category: "Backend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Htmx_Logo.png",
    logoName: "HTMX",
    used: 1,
    level: 3,
    category: "Frontend",
  },
  {
    logoUrl: "https://sass-lang.com/assets/img/styleguide/seal-color.png",
    logoName: "SASS",
    used: 1,
    level: 3,
    category: "Styling / UI",
  },
  {
    logoUrl: "https://avatars.githubusercontent.com/u/7552965?s=280&v=4",
    logoName: "Mongoose Js",
    used: 3,
    level: 4,
    category: "ORM / Data Tools",
  },
  {
    logoUrl:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/jquery_vertical_logo_icon_169489.png",
    logoName: "JQuery",
    used: 3,
    level: 3,
    category: "Frontend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png",
    logoName: "PHP",
    used: 5,
    level: 5,
    category: "Programming Languages",
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    logoName: "Tailwind CSS",
    used: 5,
    level: 5,
    category: "Styling / UI",
  },
  {
    logoUrl: "https://www.docker.com/favicon.ico",
    logoName: "Docker",
    used: 5,
    level: 3,
    category: "DevOps / Infrastructure",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png",
    logoName: "React Native",
    used: 3,
    level: 4,
    category: "Mobile",
  },
  {
    logoUrl:
      "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/hono-6ge6rolcrcsqnvk7r685s.png/hono-lni310gpnzm7h0sumu9xrk.png?_a=DATAdtAAZAA0",
    logoName: "Hono",
    used: 5,
    level: 5,
    category: "Backend",
  },
  {
    logoUrl:
      "https://cdn.prod.website-files.com/681c8426519d8db8f867c1e8/682dcb06620717ccd769b572_MINIO_Bird.png",
    logoName: "MiniO Storage",
    used: 2,
    level: 1,
    category: "DevOps / Infrastructure",
  },
  {
    logoUrl:
      "https://assets.super.so/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png",
    logoName: "Strapi",
    used: 2,
    level: 3,
    category: "Backend",
  },
  {
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo-redis_%28old%29.svg/3840px-Logo-redis_%28old%29.svg.png",
    logoName: "Redis",
    used: 4,
    level: 4,
    category: "Databases",
  },
  {
    logoUrl:
      "https://blog.stephane-robert.info/_astro/logo-sqlachemy.C2XppnSi_1tWRLX.webp",
    logoName: "SQLAlchemy",
    used: 2,
    level: 2,
    category: "ORM / Data Tools",
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
    logoName: "FastAPI",
    used: 2,
    level: 2,
    category: "Backend",
  },
  {
    logoUrl: "https://cdn.worldvectorlogo.com/logos/expo-go-app.svg",
    logoName: "Expo Go",
    used: 2,
    level: 2,
    category: "Mobile",
  },
];

export default logos;
