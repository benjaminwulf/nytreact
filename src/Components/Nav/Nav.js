import React from "react";

const Nav = () =>
  <nav className="navbar navbar-inverse bg-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <span to="/" className="navbar-brand">
          NYT React Scaper
        </span>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><span to="/search">Search</span></li>
          <li><span to="/saved">Saved</span></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;