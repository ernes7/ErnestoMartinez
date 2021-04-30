import React from "react";
import ParticlesWrapper from "../components/ParticlesWrapper";
import "../App.scss";

export default function Layout({ title, children }) {
  return (
    <div>
      <div className="App">
        <div className="fullLayout">
          <ParticlesWrapper />
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
