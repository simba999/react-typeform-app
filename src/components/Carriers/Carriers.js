import React, { Component } from "react";

const textArray = [
  "is personal",
  "is transparent",
  "is dynamic",
  "is keeps you rolling"
];

class Carriers extends Component {
  render() {
    return (
      <div
        class="container-fluid section1"
        style={{ paddingTop: "5rem", textAlign: "center" }}
      >
        <div class="row justify-content-md-center">
          <div class="col-md-6">
            <header>
              <h2>Hey.</h2>
            </header>
            <p>
              Everyone is unique.
              <br />
              Peculiarities should be recognized and valued.
              <br />
              <br />
              Our software does exactly that: Serving you with book of business
              building, monitoring & evaluation.
              <br />
              We analyze a large variety of data sets using Machine Learning,
              helping you to identify profitable accounts for acquisition and
              retention, achieve a high data accuracy through verified inputs
              and initiate active risk mitigation.
              <br />
              By comparing your small businesses premiums to risk-adjusted
              quotes, your organization can better prioritize resources and
              enhance underwriting quality, allowing you to offer tailored &
              fair pricing for small businesses.
              <br />
              <br />
              <span style={{ marginTop: "1em" }}>
                {" "}
                Contact us to learn more at info@linchpin.app
              </span>
              <br />
              <br />
              <i>Know what’s rolling on.</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Carriers;
