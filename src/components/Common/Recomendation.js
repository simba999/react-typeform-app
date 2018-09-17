import React from "react";

function SideList(props) {
  const { selectPolicy, currentPolicyCode, add_ons, essentials } = props;

  const getCode = title => {
    const policies = {
      "Business Owners Policy": "BOP",
      "Commercial Vehicle": "CV",
      "Cyber Liability": "CY",
      "Directors & Officers": "DO",
      "Errors & Omission": "EO",
      "General Liability": "GL",
      "Workers Compensation": "WC",
      "Key Man": "KY"
    };
    return policies[title];
  };

  const essentials_items = essentials.split(",").map((policy, index) => {
    return (
      <button
        onClick={() => selectPolicy(getCode(policy))}
        type="button"
        className={
          "list-group-item list-group-item-action " +
          (currentPolicyCode == getCode(policy) ? "active" : "")
        }
      >
        {policy}
      </button>
    );
  });

  const add_ons_items = add_ons.split(",").map((policy, index) => {
    return (
      <button
        onClick={() => selectPolicy(getCode(policy))}
        type="button"
        className={
          "list-group-item list-group-item-action " +
          (currentPolicyCode == getCode(policy) ? "active" : "")
        }
      >
        {policy}
      </button>
    );
  });

  return (
    <div style={{ background: "#ecedf1", width: "100%" }}>
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <i class="fa fa-inbox" style={{ fontSize: "36px" }} />
        <span style={{ marginLeft: "1rem" }}>Essential</span>
      </div>

      <div class="list-group">{essentials_items}</div>

      <div style={{ padding: "1rem", textAlign: "center" }}>
        <i class="fa fa-envelope-open" style={{ fontSize: "36px" }} />
        <span style={{ marginLeft: "1rem" }}>Add-ons</span>
      </div>

      <div class="list-group">{add_ons_items}</div>
    </div>
  );
}

export default SideList;
