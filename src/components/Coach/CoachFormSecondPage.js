import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import SideList from "../Common/Recomendation";

//import CircularProgress from '@material-ui/core/CircularProgress';

import Examples from "./quote_page/Examples";
import Exlcusions from "./quote_page/Exclusions";
import Enhancements from "./quote_page/Enhancements";
import Descriptions from "./quote_page/Descriptions";
import Fineprints from "./quote_page/Fineprints";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  getPolicyDetails,
  setPolicy,
  setPolicyCode,
  getQuestions
} from "../../actions/index";
import policy_descriptions from "../../actions/policy_descriptions";

class CoachFormSecondPage extends Component {
  constructor(props) {
    super(props);
    this.selectPolicy = this.selectPolicy.bind(this);
    this.state = { policyCode: this.props.policy_code };
  }

  componentWillMount() {
    if (this.state.policyCode == "") {
      this.setState({ policyCode: "GL" });
      console.log("componentWillMount:");
      console.log(this.setState.policyCode);
    }
  }

  componentDidMount() {
    this.props.getPolicyDetails(this.state.policyCode, this.props.naic_code);
  }

  componentDidUpdate(preProps, preState) {
    if (this.state.policyCode !== preState.policyCode) {
      this.props.getPolicyDetails(this.state.policyCode, this.props.naic_code);
    }
  }

  selectPolicy(policy_code) {
    this.props.getPolicyDetails(policy_code, this.props.naic_code);
    // const selected_policy = policy_descriptions.filter(policy => {
    //   return policy.title === policy_title;
    // });
    // if (selected_policy != undefined) {
    //   this.props.getPolicy(selected_policy[0].code);
    // }
    this.setState({ policyCode: policy_code });
  }

  render() {
    console.log("testing:" + this.props.selected_industry);
    const { handleSubmit, previousPage } = this.props;

    const {
      recomendations,
      enhancements,
      description,
      examples,
      exclusions
    } = this.props.policy_details;
    if ((this.props.policy_details, description == undefined)) {
      return (
        <div class="progress">
          <div
            class="progress-bar w-75"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      );
    }
    const { essentials, add_ons } = recomendations[0];
    return (
      <div
        class="nojs"
        style={{ display: "flex", flexDirection: "row", fexWrap: "wrap" }}
      >
        <div
          style={{
            flex: 1.25,
            position: "sticky",
            alignSelf: "flex-start",
            marginTop: "0em"
          }}
        >
          {/*Where Policy is selected*/}
          <SideList
            selectPolicy={this.selectPolicy}
            currentPolicyCode={this.state.policyCode}
            add_ons={add_ons}
            essentials={essentials}
          />
        </div>
        <div
          style={{
            flex: 6,
            marginLeft: "0em",
            borderLeft: "1px solid grey",
            borderRight: "1px solid grey",
            padding: "1rem"
          }}
        >
          <div style={{ maxWidth: "100%" }}>
            <div variant="headline" component="h2" gutterBottom>
              <h3>{description.policy_name}</h3> for
            </div>
            <div variant="display1" component="h2" gutterBottom>
              <h3>{this.props.selected_industry}</h3>
            </div>
          </div>
          <Descriptions props={description} />
          <Examples props={examples[0]} />
          <Enhancements props={enhancements[0]} />
          <Exlcusions props={exclusions[0]} />
          <Fineprints props={description} />
        </div>
        <div
          style={{
            flex: 1,
            position: "sticky",
            alignSelf: "flex-start",
            padding: "1em"
          }}
        >
          <form
            onSubmit={() => {
              console.log("submitting page 2");
              this.props.setPolicy(description.policy_name); // set the policy name
              this.props.setPolicyCode(this.state.policyCode);
              handleSubmit();
            }}
          >
            <div class="text-center">
              <div variant="subheading" gutterBottom>
                Interested in what you pay for <br /> {description.policy_name}?
              </div>

              <div>
                <button type="submit" class="btn btn-primary ">
                  Get quote estimate
                </button>
              </div>
            </div>

            <br />
            <div class="text-center">
              <div>Want to select a differnt industry?</div>

              <div>
                <button
                  class="btn btn-secondary text-center"
                  onClick={previousPage}
                >
                  Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getPolicyDetails, setPolicy, setPolicyCode },
    dispatch
  );
}

const selector = formValueSelector("coachForm");
const mapStateToProps = state => {
  return {
    policy_details: state.policy_details,
    selected_industry: state.selected_industry,
    selected_policy: state.selected_policy,
    policy_code: state.policy_code,
    naic_code: selector(state, "naic_code")
  };
};

export default reduxForm({
  form: "coachForm", //Form name is same
  destroyOnUnmount: false
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CoachFormSecondPage)
);
// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));

// export default CoachFormSecondPage;
