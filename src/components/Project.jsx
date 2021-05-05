import React from "react";
import "./Project.scss";
import { Link } from "react-router-dom";

export default function Project({ logo, name, description, url }) {
  return (
    <div className="projectBlock">
      <div className="projectImage">
        <Link to={{ pathname: url || null }} target="_blank">
          {" "}
          <img src={logo} alt={name} />
        </Link>
        <a href={url}>{url.split("//").pop()}</a>
      </div>
      <div className="projectDesc">
        <p>{description}</p>
      </div>
    </div>
  );
}
