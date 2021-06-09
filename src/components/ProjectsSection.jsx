import React from "react";
import "./ProjectsSection.scss";

import OlivaresLogo from "../assets/projects/Olivares.png";
import CurlingLogo from "../assets/projects/Curling.png";

import Project from "./Project";

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

const projects = [
  {
    name: "Olivares Dreams",
    logo: OlivaresLogo,
    description:
      `Olivares Dreams is a handmade craft seller focused on Chocolate Breackable Hearts for Birthdays and Special Events.\n` +
      `\nI Designed the Logo, and Social Media look, and developed the E-Commerce Application for Client.`,
    url: "https://olivaresdreams.com",
  },
  {
    name: "Curling Companion",
    logo: CurlingLogo,
    description:
      `Curling Companion is a React Native Application made for Portland State University as part of the Senior Capstone.`,
    url: "https://gitlab.com/curling-companion/curling-companion",
  },
];
