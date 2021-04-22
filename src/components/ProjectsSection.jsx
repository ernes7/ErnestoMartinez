import React from "react";
import "./ProjectsSection.scss";
import Youtube from "./Youtube";

export default function ProjectsSection() {
  return (
    <div className={"projectsSectionContainer"}>
      <h2 className="projectSectionTitle">Projects</h2>
      <div className="projectsContainer">
        <Youtube embedID="851E8-CaYY8" />
        <Youtube embedID="851E8-CaYY8" />
      </div>
    </div>
  );
}
