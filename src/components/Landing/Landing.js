import React, { Component } from "react";
import { Link } from "react-router";
import Scrollchor from "react-scrollchor";
import "./Landing.css";
// Material UI componenets

import {
  Grid,
  Row,
  Col,
  Image,
  Table,
  Thumbnail,
  Button
} from "react-bootstrap";
import "./Landing.css";
const styles = {
  teamName: {
    letterSpacing: ".5px",
    fontWeight: 700
  },
  root: {
    marginBottom: "4em",
    height: "100%",
    marginTop: "0em"
  }
};

const textArray = [
  "is personal",
  "is transparent",
  "is dynamic",
  "is keeps you rolling"
];

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      textIdx: 0,
      policies: [
        {
          title: "General Liability",
          desc:
            "Shields you from third-party claims such as bodily injury & property damage",
          policy_code: "gl"
        },
        {
          title: "Business Owner",
          desc:
            "General Liability plus commercial property and business interruption",
          policy_code: "bop"
        },
        {
          title: "Directors and Officers",
          desc:
            "Leadership protection in the event of allegations of wrongdoing",
          policy_code: "do"
        },
        {
          title: "Professional Liability",
          desc:
            "Covers damages induced by errors and omissions in services you provide",
          policy_code: "eo"
        },
        {
          title: "Workers Compensation",
          desc:
            "Insurance for you & your employees against work related accidents",
          policy_code: "wc"
        },
        {
          title: "Cyber Liability",
          desc: "Response cost and claims arising out of a data breach",
          policy_code: "cy"
        },
        {
          title: "Commercial Vehicle",
          desc: "Covers cars & trucks, used in conducting your business",
          policy_code: "cv"
        },
        {
          title: "Ask Robin",
          desc: "Our roboadvisor providing you with coverage recommendations",
          policy_code: "coach"
        }
      ]
    };
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    const policyCards = this.state.policies.map((policy, index) => {
      return (
        <div
          class="card text-center bg-light mb-3 col-lg-3 col-md-6 col-sm-6 col-11"
          href={"/policy/" + policy.policy_code}
          style={{
            padding: "0em 1em"
          }}
        >
          <a
            href={"/policy/" + policy.policy_code}
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            <img
              class="card-img-top"
              src={`/images/icons/${policy.policy_code}.png`}
              style={{ width: "50%" }}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{policy.title}</h5>
              <p class="card-text">{policy.desc}</p>
            </div>
          </a>
        </div>
      );
    });

    return (
      <div>
        <section id="section1">
          <div class="jumbotron section1 text-center ">
            <div class="container">
              <h1 class="display-4">Hey!</h1>

              <p>
                I’m Robin, your personal commercial insurance advisor.
                <br />
                We know that insurance is not your all-star task, that’s why we
                did the heavy lifting for you, so that you can go after your
                goals. <br />
              </p>
              <hr className="my-4" />
              <p>What can I show you today?</p>

              {/*
              <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                <div class="p-2 bd-highlight">
                  <Link to="/quote">
                    <button type="button" class="btn btn-secondary">
                      My Premium Estimate
                    </button>
                  </Link>
                </div>
                <div class="p-2 bd-highlight">
                  <Link to="/coach">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      href={"/coach"}
                    >
                      My Coverage Options
                    </button>
                  </Link>
                </div>
              </div>
*/}

              <div>
                <div
                  class="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  <Link to="/quote">
                    <button type="button" class="btn btn-secondary">
                      My Premium Estimate
                    </button>
                  </Link>
                </div>
                <div
                  class="btn-group mr-2"
                  role="group"
                  aria-label="Second group"
                >
                  <Link to="/coach">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      href={"/coach"}
                    >
                      My Coverage Options
                    </button>
                  </Link>
                </div>
              </div>

              <div style={{ padding: "1rem 0" }}>
                <i>
                  Our mission is to provide affordable, comprehensive and plain
                  business insurance for everyone who is unique
                  <br /> Commercial Insurance that keeps you rolling
                </i>
              </div>
              <div>
                <Scrollchor
                  to="#section2"
                  animate={{ offset: -80, duration: 600 }}
                >
                  <i
                    class="fa fa-arrow-circle-down"
                    style={{ fontSize: "48px", color: "gray" }}
                  />
                </Scrollchor>
              </div>
            </div>
          </div>
        </section>

        <section id="section2" className="container text-center">
          <div>
            <h3> See how each policy protects your business</h3>
          </div>
          <div class="row" style={{ position: "relative" }}>
            {policyCards}
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
