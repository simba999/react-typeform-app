import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

let CY_Form = (props,{ required }) => {

  const deductibles = [1000,2500,5000,10000,25000];
  const deductible_options = deductibles.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const supplemental_limits = [500000,1000000];
  const data_breach_expense_limit__3rd_party_options = supplemental_limits .map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const limits = [25000,100000,500000];
  const limit_options = limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });




  const data_breach_expense_limits = [10000,25000,50000,100000,250000,500000];
  const data_breach_expense_limit_options = data_breach_expense_limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const {
   hasThirdLiabilityValue
 } = props

  return (
    <React.Fragment>
      <div className="d-block">
        <label>Your (desired) deductible?*</label>
        <Field name="deductible" component="select" >
          {deductible_options}
        </Field>
      </div>



      <div className="d-block">
        <label>Your (desired) coverage limit per occurrence (double for aggregate limit)?*</label>
        <Field name="limit" component="select" >
          {limit_options}
        </Field>
      </div>


      <div className="d-block">
        <label>Your (desired) coverage sublimit for a Data Breach?*</label>
        <Field name="data_breach_expense_limit" component="select" >
          {data_breach_expense_limit_options}
        </Field>
      </div>


      <div>
        <label htmlFor="hasThirdLiability">Do you want 3rd party liability coverage (e.g. lawsuits from a exposed victims) in case of a Data Breach?*</label>
        <div>
          <Field name="hasThirdLiability" id="hasThirdLiability" component="input" type="checkbox"/>
        </div>
      </div>
      {hasThirdLiabilityValue && <div>
        <label>Your (desired) coverage limit for the 3rd Party liability?*</label>
        <Field name="data_breach_expense_limit_3rd_party" component="select" >
          {data_breach_expense_limit__3rd_party_options}
        </Field>
      </div>}




    </React.Fragment>
  );
}


// Decorate with redux-form
CY_Form = reduxForm({
  form: 'Cyber Liability'  // a unique identifier for this form
})(CY_Form)


// Decorate with connect to read form values
const selector = formValueSelector('Cyber Liability') // <-- same as form name
CY_Form = connect(
  state => {
    // can select values individually
    const hasThirdLiabilityValue = selector(state, 'hasThirdLiability')

    return {
      hasThirdLiabilityValue,

    }
  }
)(CY_Form)

export default CY_Form
