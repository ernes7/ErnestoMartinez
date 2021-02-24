import React from "react";
import "./CompaniesSection.scss";
import lithicLogo from "../assets/companies/lithic.png";

export default function CompaniesSection() {
  return (
    <div className={"companiesSectionContainer"}>
      <h2>Experience</h2>
      <div className="companiesContainer">
        {companies.map((company) => {
          return (
            <div className="company">
              <div>
                <img src={company.logo} />
              </div>
              <div className="companyRole"> {company.position}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const companies = [
  {
    name: "Lithic Tech",
    logo: lithicLogo,
    position: "Software Engineer",
    tools: [],
    quote: null,
    linkedIn: null,
  },
  {
    name: "Thesis Agency",
    logo: lithicLogo,
    position: "Software Engineer Intern",
    tools: [],
    quote: null,
    linkedIn: null,
  },
  {
    name: "DMSS",
    logo: lithicLogo,
    position: "Web Developer",
    tools: [],
    quote: null,
    linkedIn: null,
  },
];
