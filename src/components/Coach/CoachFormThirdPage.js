import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import SideList from "../Common/Recomendation";
//import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { create } from "../../actions/index";
import policy_descriptions from "../../actions/policy_descriptions";
//import Paper from '@material-ui/core/Paper';
import "../Forms/form.css";
import select_form from "../Forms/select_form";
import { compose } from "redux";

class CoachFormThirdPage extends Component {
  constructor(props) {
    super(props);
    // this.state = { policy: 'General Liability' };
  }

  componentWillMount() {
    //this.props.getQuestions(1114);
    //this.props.getGLCode(this.props.industry2codes);
    //this.props.getPolicy(1114);
    console.log(this.props.policy_details);
  }
  componentDidMount() {
    this.props.initialize({
      current_premium: 0
    });
  }

  mySubmit = form => {
    // print the form values to the console
    console.log(form);
    console.log(this.props.policy_code);
    this.props.create({
      form_industry_input: this.props.form_industry_input,
      form_policy_input: form,
      policy_code: this.props.policy_code,
      gl_code_last_letter: this.props.gl_code_last_letter
    });
    console.log(this.props.premium);
  };

  render() {
    console.log(this.props.gl_code_last_letter);
    const { handleSubmit, previousPage } = this.props;
    const {
      recomendations,
      enhancements,
      description,
      examples,
      exclusions
    } = this.props.policy_details;

    return (
      <div style={{ display: "flex", flexDirection: "row", fexWrap: "wrap" }}>
        <div
          style={{
            flex: 1,
            position: "sticky",
            alignSelf: "flex-start",
            top: "5em",
            textAlign: "center"
          }}
        >
          <div>Want to select a different policy?</div>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.props.previousPage}
            style={{ marginTop: "1em" }}
          >
            Go Back
          </button>
        </div>
        <div
          style={{
            flex: 4,
            marginLeft: "2em",
            borderLeft: "1px solid grey",
            borderRight: "1px solid grey"
          }}
        >
          <div elevation={1} style={{ padding: "2em", marginBottom: "5em" }}>
            <div style={{ maxWidth: "100%" }}>
              <h3>{this.props.selected_policy} </h3>
              for
              <h3>{this.props.selected_industry}</h3>
              <h5>Description</h5>
              <div gutterBottom>{description.policy_definition_1}</div>
              <br />
            </div>

            <form onSubmit={handleSubmit(this.mySubmit)}>
              {select_form(this.props.selected_policy)}
              <div>
                <label>Current Premium</label>
                <div>
                  <Field
                    name="current_premium"
                    component="input"
                    type="number"
                    placeholder="Current Premium"
                    min="0"
                  />
                </div>
              </div>
              <br />
              <div>
                <button type="submit" class="btn btn-primary">
                  Get quote estimate
                </button>
              </div>
            </form>
          </div>
        </div>

        {/*} result of the caluculation: premium */}
        <div
          style={{
            flex: 1.25,
            position: "sticky",
            alignSelf: "flex-start",
            top: "5em",
            textAlign: "center",
            padding: "1em"
          }}
        >
          <div>
            <h5>Policy</h5>
          </div>
          <div>
            <h3>{this.props.selected_policy}</h3>
          </div>
          <div>
            <h5>Industry</h5>
          </div>
          <div>
            <h3>{this.props.selected_industry}</h3>
          </div>
          <div>estimate based on your inputs:</div>
          <div>
            <h3>
              <h3 class="badge badge-secondary">
                $ {this.props.premium.Premium}
              </h3>
            </h3>
          </div>
          <br />
          <br />
          <div>
            <p>
              <i>
                Disclaimer: <br /> Depending on individual company risk factors,
                your state and your insurance company, prices may deviate
                significantly. The provided estimate is based on what companies
                similar to yours have paid, and serves only as illustrative
                purposes. We are not a licensed carrier and your quote is no
                commercial proposal.
              </i>
            </p>
          </div>

          {/*<Typography variant="caption" gutterBottom>
            click below to recalculate estimate
          </Typography>
          <Button size="small" variant="outlined" color="primary" style={{ marginTop: '1em' }}>
            Calculate
          </Button>*/}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ create }, dispatch);
}

const mapStateToProps = state => {
  return {
    form: state.selected_policy,
    policy_details: state.policy_details,
    selected_industry: state.selected_industry,
    selected_policy: state.selected_policy,
    industry4codes: state.industry4codes,
    policy_code: state.policy_code,
    premium: state.premium,
    gl_code_last_letter: state.gl_code_last_letter,
    //questions : state.questions,
    form_industry_input: state.form_industry_input
  };
};

// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));

// export default CoachFormSecondPage;

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    //other redux-form options...
  })
)(CoachFormThirdPage);
