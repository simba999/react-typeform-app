import React, { Component } from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-content-end ">
        {/* align nav item right: justify-content-end*/}
        <a class="navbar-brand " href="#">
          <img
            src="/images/linchpin_logo_black2.png"
            width="100"
            height="60"
            alt="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0 align-items-end ">
            {/*align nav item right: ml-auto, align-items-end*/}
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/coach">
                Roboadvisor
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/carriers">
                Services for Carriers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
