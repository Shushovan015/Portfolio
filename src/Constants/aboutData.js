import aboutImg from "../assets/images/about-cv.jpg";
import {
  IoPhonePortraitOutline,
  IoLocationOutline,
  IoMailUnreadOutline,
  IoCalendarOutline,
} from "react-icons/io5";

export const aboutData = {
  id: 4,
  name: "about me",
  img: aboutImg,
  title: "who am I?",
  infoTitle: "Personal Info",
  skillsTitle: "Skills",
  desc: [
    {
      id: 1,
      content:
        "Hi! I am a Frontend React Js. Developer  with more than 1.5 years of experience creating web apps in React. Building state-of-the-art , easy to use , user-friendly webapps are truly a passion of mine .  I enjoy turning complex problems into simple, beautiful and intuitive designs.",
    },
    {
      id: 2,
      content:
        "My aim is to bring across your message and identity in the most creative way. I created web design and develovement for many famous brand companies.",
    },
  ],
  contactCard: [
    {
      id: 1,
      icon: <IoPhonePortraitOutline />,
      iconName: "phone",
      contactText: "9856055360",
    },
    {
      id: 2,
      icon: <IoLocationOutline />,
      iconName: "location",
      contactText: "Syangja, Nepal",
    },
    {
      id: 3,
      icon: <IoMailUnreadOutline />,
      iconName: "Email",
      contactText: "khnl.prem@gmail.com",
    },
    {
      id: 4,
      icon: <IoCalendarOutline />,
      iconName: "Birth Day",
      contactText: "Feb 14, 2090",
    },
  ],
};
