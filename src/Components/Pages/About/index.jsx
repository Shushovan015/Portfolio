import React from "react";
import { aboutData } from "../../../Constants/aboutData";
import ContactCard from "../../common/ContactCard";
import Skills from "../../common/Skills";

const Index = () => {
  return (
    <main className="about-page">
      <div className="about-page_title mb-30">
        <h3 className="is-capitalize">{aboutData.name}</h3>
      </div>
      <div className="about-page_body">
        <div className="is-flex is-start is-align-start is-gap-30 about-content_wrap">
          <div className="about-figure">
            <img src={aboutData.img} alt="" />
          </div>
          <div className="about-content">
            <h4 className="mb-20 is-capitalize">{aboutData.title}</h4>
            <div className="about-des">
              {aboutData.desc.map((items) => (
                <p>{items.content}</p>
              ))}
            </div>

            <div className="contact-info mt-30">
              <h4 className="mb-20">{aboutData.infoTitle}</h4>

              <ContactCard />
            </div>
            <div className="mt-30">
              <h4 className="mb-20">{aboutData.skillsTitle}</h4>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
