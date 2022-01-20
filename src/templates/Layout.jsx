import React from "react";
import "../App.scss";

export default function Layout({ title, children }) {
  return (
    <div>
      <div className="App">
        <div className="fullLayout">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
}
