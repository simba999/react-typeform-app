//Robin page
//SurveyForm shows a form for a user to add input
import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import sub_industry_list from "../Common/sub_industry_list";
import Descriptions from "./quote_page/Descriptions";

import _ from "lodash";
import { bindActionCreators } from "redux";
import {
  setIndustry,
  get_sub_industry,
  getGLCode,
  setFormIndustryInput,
  setPolicyCode,
  getPolicyDesc,
  getPolicyDetails,
  setPolicy
} from "../../actions/index";

import "./CoachForm.css";

class CoachForm extends Component {
  // MULTIPLE CALLS TO SUB_INDUSTRY ENDPOINT, DEBUG

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !this.equals(nextProps, this.props); // equals() is your implementation
  // }

  // equals(nextProps, currProps) {
  //   return currProps.digits_2 == nextProps.digits_2;
  // }
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);

    //this.props.getPolicyDetails( 'GL', '111110');

    //this.state = { policy_title: 'General Liability' };
  }

  componentDidUpdate(preProps, preState) {
    if (this.props.digits_2 !== preProps.digits_2) {
      this.props.getGLCode(this.props.digits_2);
      this.props.get_sub_industry(this.props.digits_2);
    }
  }

  change(e) {
    console.log("this.getCode(e.target.value)");
    console.log(this.getCode(e.target.value));
    this.props.setPolicyCode(this.getCode(e.target.value));
    this.props.getPolicyDesc(this.getCode(e.target.value));
    this.props.setPolicy(e.target.value); // set the policy name
  }

  getCode = title => {
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

  render() {
    console.log("this.props.policy_code");
    console.log(this.props.policy_code);

    // REDUX store

    const {
      handleSubmit,
      industry2codes,
      industry4codes,
      sub_industry
    } = this.props;
    const { touched, pristine, reset, submitting, error } = this.props;
    // 2 digit codes
    console.log(this.props);
    const digits_2_options = industry2codes.map(selection => {
      return (
        <option key={selection.class_code} value={selection.class_code}>
          {selection.industry}
        </option>
      );
    });

    // selected industry title
    let digits_2_values = industry2codes.filter(code => {
      return code.class_code == this.props.digits_2;
    });

    let selected_industry_title = "";
    if (digits_2_values[0] != undefined) {
      selected_industry_title = digits_2_values[0].industry;
    }

    // 4 digit codes
    let digits_4_options = null;
    if (this.props.digits_2 != null) {
      let digits_4_values = industry4codes.filter(code => {
        return code.class_code == this.props.digits_2;
      });
      digits_4_options = digits_4_values.map(value => {
        return (
          <option key={value.class_sub_code} value={value.class_sub_code}>
            {value.industry}
          </option>
        );
      });
    }

    // REDUX call to get sub_industry list
    let naic_code_options = null;

    if (this.props.digits_4 != null) {
      //this.props.get_sub_industry(this.props.digits_2);
      // filter by digits_2
      const sub_industries_selected_list = this.props.sub_industry.filter(
        industry => {
          return industry.class_code == this.props.digits_2;
        }
      );

      let digits_4_str = this.props.digits_4.toString();
      if (sub_industries_selected_list != undefined) {
        // filter by digits_4
        naic_code_options = sub_industries_selected_list.map(sub_industry => {
          if (sub_industry.naic_code.toString().slice(0, 4) == digits_4_str) {
            return (
              <option
                key={sub_industry.naic_code}
                value={sub_industry.naic_code}
              >
                {sub_industry.industry}
              </option>
            );
          }
        });
      }
    }

    // selected sub_industry title
    let sub_industry_values = sub_industry.filter(code => {
      return code.naic_code == this.props.naic_code;
    });

    let selected_sub_industry_title = "";
    if (sub_industry_values[0] != undefined) {
      selected_sub_industry_title = sub_industry_values[0].industry;
    }

    const { digits_2Value, digits_4Value } = this.props;

    let policies = [
      "Business Owners Policy",
      "Commercial Vehicle",
      "Cyber Liability",
      "Directors and Officer",
      "Errors and Omission",
      "General Liability",
      "Workers Compensation"
    ];

    const policy_options = policies.map(policy => {
      return (
        <option key={policy} value={policy}>
          {policy}
        </option>
      );
    });

    this.props.getPolicyDetails(this.props.policy_code, this.props.naic_code);

    return (
      <div class="container top">
        {(this.props.policy_code == "" ||
          this.props.policy_description.policy_name == null) && (
          <h1 class="text-center">
            Glad that I can help. Tell me something about you
          </h1>
        )}

        {this.props.policy_code != "" &&
          this.props.policy_description.policy_name != null && (
            <div>
              <div
                style={{
                  display: "block",
                  verticalAlign: "top",
                  margin: "0 auto",
                  width: "700px"
                }}
              >
                <div variant="display1" component="h2">
                  <h3>{this.props.policy_description.policy_name}</h3>
                </div>
                <div variant="headline" component="h3">
                  <h3>Description</h3>
                </div>
                <div>{this.props.policy_description.policy_definition_1}</div>
                <div variant="headline" component="h3">
                  <h3>Heading Limits</h3>
                </div>
                <div>{this.props.policy_description.policy_limits}</div>
              </div>
            </div>
          )}

        <form
          onSubmit={() => {
            console.log("submitting page 1");
            this.props.setIndustry(selected_sub_industry_title); // set the indystry name
            //handleSubmit(this.mySubmit);
            console.log(this.props.naic_code);

            handleSubmit();
          }}
        >
          <div class="form-group row justify-content-md-center">
            <div class="col-sm-4 offset-sm-2">
              Fields with asterisk are required
            </div>
          </div>

          {this.props.myPremiumEstimate == true && (
            <div class="form-group row justify-content-md-center">
              <label class="col-sm-2 col-form-label" for="policy">
                Policy*
              </label>
              <div class="col-sm-4 ">
                <Field
                  class="form-control"
                  name="policy"
                  id="policy"
                  component="select"
                  onChange={this.change}
                  validate={required}
                >
                  <option />
                  {policy_options}
                </Field>
              </div>
            </div>
          )}

          <div class="form-group row justify-content-md-center">
            <label class="col-sm-2 col-form-label " for="digits_2">
              Industry*
            </label>
            <div class="col-sm-4">
              <Field
                class="form-control"
                name="digits_2"
                id="digits_2"
                component="select"
                validate={required}
              >
                {digits_2_options}
              </Field>
            </div>
          </div>
          {digits_2Value && (
            <div class="form-group row justify-content-md-center">
              <label class="col-sm-2 col-form-label" for="digits_4">
                Sub Industry*
              </label>
              <div class="col-sm-4">
                <Field
                  class="form-control"
                  name="digits_4"
                  id="digits_4"
                  component="select"
                  validate={required}
                >
                  {digits_4_options}
                </Field>
              </div>
            </div>
          )}

          {digits_4Value && (
            <div class="form-group row justify-content-md-center">
              <label class="col-sm-2 col-form-label" for="naic_code">
                Profession*
              </label>
              <div class="col-sm-4">
                <Field
                  class="form-control"
                  name="naic_code"
                  component="select"
                  id="naic_code"
                  validate={required}
                >
                  {touched && (error && <span>{error}</span>)}
                  {naic_code_options}
                </Field>
              </div>
            </div>
          )}

          <div class="form-group row justify-content-md-center">
            <label class="col-sm-2 col-form-label" for="email">
              Email*
            </label>
            <div class="col-sm-4">
              <Field
                class="form-control"
                id="email"
                name="email"
                component="input"
                type="email"
                placeholder="Email"
                validate={(email, required)}
              />
            </div>
          </div>
          <div class="form-group row justify-content-md-center">
            <label class="col-sm-2 col-form-label" for="zipcode">
              Zip Code*
            </label>
            <div class="col-sm-4">
              <Field
                class="form-control"
                id="zipcode"
                name="zip_code"
                component="input"
                type="text"
                placeholder="Zip Code"
                validate={required}
              />
            </div>
          </div>

          <div class="form-group row justify-content-md-center">
            <div class="col-sm-4 offset-sm-2">
              <button
                type="submit"
                class="btn btn-primary"
                disabled={submitting}
              >
                Submit
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// Redux
// #To-Do why is this code called twice ?
const selector = formValueSelector("coachForm");
const mapStateToProps = state => {
  return {
    industry2codes: state.industry2codes,
    industry4codes: state.industry4codes,
    sub_industry: state.sub_industry,
    policy_description: state.policy_description,
    selected_policy: state.selected_policy,
    policy_code: state.policy_code,
    digits_2: selector(state, "digits_2"),
    digits_4: selector(state, "digits_4"),
    naic_code: selector(state, "naic_code")
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setIndustry,
      get_sub_industry,
      getGLCode,
      setPolicyCode,
      getPolicyDesc,
      getPolicyDetails,
      setPolicy
    },
    dispatch
  );
}

// ReduxForm - validation
const required = value => (value ? undefined : "Required");

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const fields = ["digits_2", "digits_4", "naic_code"];

const validate = values => {
  const errors = {};
  // console.log('validate function called');

  if (!values.digits_2) {
    errors.industry = "Industry is required";
  }

  if (!values.digits_4) {
    errors.field = "Field is required";
  }

  return errors;

  // console.log(error);
};

{
  /*
CoachForm = reduxForm({
  form: 'coachForm', // a unique identifier for this form
  validate,
  destroyOnUnmount: false
})(CoachForm);
// TO-DO create validation function and connect

export default connect(mapStateToProps, mapDispatchToProps)(CoachForm);
*/
}

CoachForm = reduxForm({
  form: "coachForm", //Form name is same
  destroyOnUnmount: false
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CoachForm)
);

// Decorate with connect to read form values
CoachForm = connect(state => {
  // can select values individually
  const digits_2Value = selector(state, "digits_2");
  const digits_4Value = selector(state, "digits_4");

  return {
    digits_2Value,
    digits_4Value
  };
})(CoachForm);

export default CoachForm;
