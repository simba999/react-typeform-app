import React from "react";

const Examples = props => {
  const {
    example_1,
    example_2,
    example_3,
    example_4,
    example_5,
    policy_necessity
  } = props.props;
  return (
    <div style={{ width: "100%", marginRight: 0 }}>
      <div style={{ marginLeft: "1em" }}>{policy_necessity}</div>
      <br />
      <h3>Examples</h3>

      <div style={{ marginLeft: "1em" }}>
        <p>{example_1 != "" ? example_1 : ""} </p>
        <p>{example_2 != "" ? example_2 : ""} </p>
        <p>{example_3 != "" ? example_3 : ""} </p>
        <p>{example_4 != "" ? example_4 : ""} </p>
        <p>{example_5 != "" ? example_5 : ""} </p>
      </div>
    </div>
  );
};

export default Examples;
