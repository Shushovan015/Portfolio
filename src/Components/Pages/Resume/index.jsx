import React, { useEffect } from "react";
import { resumeData } from "../../../Constants/resumeData";
import EduCard from "../../common/EduCard";
import Skills from "../../common/Skills";
const Index = () => {
  return (
    <main className="resume-page">
      <div className="page_title mb-30">
        <h3 className="is-capitalize">{resumeData.resumeTitle}</h3>
      </div>
      <div className="resume-page_body">
        <div className="education ">
          <h4 className="mb-15">{resumeData.eduTitle}</h4>
          <div className="grid-cols_3">
            {resumeData.eduCards.map((items) => (
              <EduCard
                key={items.id}
                startTime={items.startTime}
                endTime={items.endTime}
                name={items.name}
                organization={items.organization}
              />
            ))}
          </div>
        </div>

        <div className="experience mt-40">
          <h4 className="mb-15">{resumeData.exTitle}</h4>
          <div className="grid-cols_3">
            {resumeData.exCards.map((items) => (
              <EduCard
                key={items.id}
                startTime={items.startTime}
                endTime={items.endTime}
                name={items.name}
                organization={items.organization}
              />
            ))}
          </div>
        </div>
        <div className="mt-40">
          <h4 className="mb-20">Skills</h4>
          <Skills />
        </div>
      </div>
    </main>
  );
};

export default Index;
