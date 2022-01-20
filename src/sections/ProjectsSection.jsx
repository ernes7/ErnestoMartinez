import React from "react";
import "./ProjectsSection.scss";
import Project from "../components/Project";

export default function ProjectsSection() {
  return (
    <div className="projectsSectionContainer">
      <h2 className="projectSectionTitle">Projects</h2>
      <div className="projectsContainer">
        {projects.map((project) => {
          return (
            <Project
              logo={project.logo}
              description={project.description || null}
              name={project.name}
              url={project.url || null}
            />
          );
        })}
      </div>

    </div>
  );
}

const projects = [];
