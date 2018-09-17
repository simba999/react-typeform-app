import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

let CV_Form = (props,{ required }) => {

  const limits = ['select',25000,100000,1000000,3000000];
  const limit_options = limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const supplemental_limits = ['select',100000,250000,500000];
  const supplemental_limit_options = supplemental_limits .map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const journeys = ['select', 'Within City', 'Across Cities', 'Across States'];
  const journeys_options = journeys.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const vehicles = ['select', 'Bus', 'Hatchback', 'Sedan', 'SUV', 'Truck', 'Van'];
  const v_options = vehicles.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const {
   hasAdditionalCoverageValue
 } = props

  return (
    <React.Fragment>
      <div className="d-block">
        <label>Your (desired) coverage limit per occurrence (double for aggregate limit)?*</label>
        <Field name="limit" component="select" >
          {limit_options}
        </Field>
      </div>

      <div>
        <label htmlFor="hasAdditionalCoverage">Do you want to increase supplemental coverage (e.g. damages to customers, medical cost?</label>
        <div>
          <Field name="hasAdditionalCoverage" id="hasAdditionalCoverage" component="input" type="checkbox"/>
        </div>
      </div>
      {hasAdditionalCoverageValue && <div>
        <label>Your (desired) supplemental coverage limit?</label>
        <Field name="supplemental_limit" component="select" >
          {supplemental_limit_options}
        </Field>
      </div>}

      <div className="d-block">
        <label>You are usually traveling...*</label>
        <Field name="journey_range" component="select" >
          {journeys_options}
        </Field>
      </div>


      <div className="d-block">
        <label>What car type describes your vehicle best?*</label>
        <Field name="vehicle_type" component="select" >
          {v_options}
        </Field>
      </div>

      <div className="d-block">
        <label>Total number of vehicles you own?*</label>
        <Field name="vehicle_number" component="input" tyle= 'number'/>
      </div>




    </React.Fragment>
  );
}


// Decorate with redux-form
CV_Form = reduxForm({
  form: 'Commercial Vehicle'  // a unique identifier for this form
})(CV_Form)


// Decorate with connect to read form values
const selector = formValueSelector('Commercial Vehicle') // <-- same as form name
CV_Form = connect(
  state => {
    // can select values individually
    const hasAdditionalCoverageValue = selector(state, 'hasAdditionalCoverage')

    return {
      hasAdditionalCoverageValue,

    }
  }
)(CV_Form)

export default CV_Form
