import React from "react";
import { Link } from "react-router-dom";
import "./CompaniesSection.scss";
import lithicLogo from "../assets/companies/lithiclogo3k.png";
import dmssLogo from "../assets/companies/DMSS-Logo.png";
import thesisLogo from "../assets/companies/thesis.png"

export default function CompaniesSection() {
  return (
    <div className={"companiesSectionContainer"}>
      <h2>Experience</h2>
      <div className="companiesContainer">
        {companies.map((company) => {
          return (
            <div className="company">
              <div className="imageContainer">
              <Link
          to={{ pathname: company.linkedIn || null }}
          target="_blank"
        >                <img src={company.logo} alt={company.name} /></Link>

              </div>
              <div className="companyRole"> {company.position}</div>
              <div>
                <p>{company.time}</p>
                {company.quote && <q className="quote">{company.quote}</q>}
              </div>
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
    time: "June 2020 - Present",
    linkedIn: "https://www.linkedin.com/company/lithictech/",
  },
  {
    name: "Thesis Agency",
    logo: thesisLogo,
    position: "Software Engineer Intern",
    tools: [],
    quote: null,
    time: "June 2019 - August 2019",
    linkedIn: "https://www.linkedin.com/company/thesis-agency/",
  },
  {
    name: "Diversity & Multicultural Student Services",
    logo: dmssLogo,
    position: "Web Developer",
    tools: [],
    quote: null,
    time: "September 2015 - June 2020",
    linkedIn: "https://www.facebook.com/PSU.DMSS",
  },

];
