import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoHomeOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
  IoCodeWorking,
  IoPersonAddOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoMailUnreadOutline,
  IoCalendarOutline,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoWordpress,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoFigma,
  IoLogoNodejs,
} from "react-icons/io5";
import profileImg from "../assets/images/profile.jpg";

export const data = [
  {
    id: 1,
    name: "home info",
    img: profileImg,
    heading: "Shushovan Shakya",
    desination: "Frontend React Js. Developer",
  },
  {
    id: 2,
    name: "menu",
    menuItems: [
      {
        id: 1,
        name: "home",
        to: "/",
        icon: <IoHomeOutline />,
      },
      {
        id: 2,
        name: "about",
        to: "/about",
        icon: <IoPersonOutline />,
      },
      {
        id: 3,
        name: "resume",
        to: "/resume",
        icon: <IoDocumentTextOutline />,
      },
      {
        id: 4,
        name: "works",
        to: "/works",
        icon: <IoCodeWorking />,
      },

      {
        id: 7,
        name: "contact",
        to: "/contact",
        icon: <IoPersonAddOutline />,
      },
    ],
  },
  {
    id: 3,
    name: "social icons",
    icons: [
      {
        iconUrl: "https://www.facebook.com/khnl.prem",
        icon: <IoLogoFacebook />,
      },
      {
        iconUrl: "https://www.linkedin.com/in/prem-prasad-khanal-6115b115a/",
        icon: <IoLogoTwitter />,
      },
      {
        iconUrl: "https://www.linkedin.com/in/prem-prasad-khanal-6115b115a/",
        icon: <IoLogoLinkedin />,
      },
      {
        iconUrl: "https://www.facebook.com/khnl.prem",
        icon: <IoLogoInstagram />,
      },
    ],
  },
];

export const contactCardData = [
  {
    id: 1,
    icon: <IoPhonePortraitOutline />,
    iconName: "phone",
    contactText: "9867029223",
  },
  {
    id: 2,
    icon: <IoLocationOutline />,
    iconName: "location",
    contactText: "Tansen-5, Palpa",
  },
  {
    id: 3,
    icon: <IoMailUnreadOutline />,
    iconName: "Email",
    contactText: "shushovan015@gmail.com",
  },
  {
    id: 4,
    icon: <IoCalendarOutline />,
    iconName: "Birth Day",
    contactText: "Feb 15, 1997",
  },
];

export const skillsData = [
  {
    id: 1,
    icon: <IoLogoHtml5 />,
    iconName: "HTML",
  },
  {
    id: 2,
    icon: <IoLogoCss3 />,
    iconName: "Css3",
  },
  {
    id: 3,
    icon: <IoLogoSass />,
    iconName: "Sass",
  },
  {
    id: 4,
    icon: <IoLogoNodejs />,
    iconName: "Jquery",
  },
  {
    id: 5,
    icon: <IoLogoJavascript />,
    iconName: "Javascript",
  },
  {
    id: 6,
    icon: <IoLogoReact />,
    iconName: "React",
  },
  {
    id: 7,
    icon: <IoLogoFigma />,
    iconName: "Figma",
  },
  {
    id: 8,
    icon: <IoLogoFigma />,
    iconName: "Adobe XD",
  },
  {
    id: 9,
    icon: <IoLogoWordpress />,
    iconName: "Wordpress",
  },
  {
    id: 10,
    icon: <IoLogoGithub />,
    iconName: "Github",
  },
  {
    id: 11,
    icon: <IoLogoGitlab />,
    iconName: "Gitlab",
  },
];
