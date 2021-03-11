/* eslint-disable */
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import shakya from "../../assests/img/subodh.jpg";

function Home() {
  return (
    <div
      className="home"
      id="home"
      style={{
        backgroundImage: `url(' ${shakya} ')`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        top: 0,
      }}
    >
      <h1 className="heading">Shushovan Shakya</h1>
      <p>I am a Frontend Developer.</p>
      <a href="https://www.facebook.com/shushovan.s" className="icons">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/shushovan.s/" className="icons">
        <InstagramIcon />
      </a>
      <a href="https://github.com/Shushovan015" className="icons">
        <GitHubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/shushovan-shakya-9089471a0/"
        className="icons"
      >
        <LinkedInIcon />
      </a>
      <br />
      <button type="button" class="btn btn-primary">
        Latest Resume
      </button>
    </div>
  );
}

export default Home;
