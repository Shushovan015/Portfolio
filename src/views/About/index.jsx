import React from "react";
import shushovan from "../../assests/img/shushovan.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div>
        <h1>About</h1>
        <p className="title">
          From the time since I got to understand things, I had a dream of going
          ahead in the field of computer science. I like to explore technology,
          seeking to learn new stuff. So, I followed my dreams, and now here I
          stand.
        </p>
      </div>
      <div className="topic">
        <div>
          <img
            src={shushovan}
            alt="shushovan"
            style={{
              height: "20rem",
              borderRadius: "20%",
              marginLeft: "12rem",
              display: "flex",
              marginTop: " 2rem",
              marginRight: "0",
              border: "1px solid black",
            }}
          />
        </div>
        <div className="description">
          <h2>Frontend Developer</h2>
          <p>Currently I am working as a Frontend Developer at NAXA.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
