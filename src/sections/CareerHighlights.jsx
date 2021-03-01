import React from "react";
import { Link } from "react-router-dom";
import "./CareerHighlights.scss";
import eliPicture from "../assets/images/ELI-2019-intern-networking.jpg";

export default function CareerHighlights() {
  return (
    <div className={"careerHighlightsContainer"}>
      <h2>Career Highlights</h2>
      <div className="highlightContainer">
        <div className="highlight">
          <div className="highlightName">Emerging Leaders Program</div>
          <Link
            to={{ pathname: "https://www.emergingleaderspdx.org/" || null }}
            target="_blank"
          >
            {" "}
            <img src={eliPicture} alt={"ELI 2019 Interns Networking"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
