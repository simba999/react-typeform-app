import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

let DO_Form = (props, { required }) => {

  const ma_activities = ['1-2 deals less than 50% of Assets','More/Otherwise','No Deal'];
  const ma_activity_options = ma_activities.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const ind_confidences = ['Confident','High Concern','Low Concern','Normal','Very Confident'];
  const ind_confidence_options = ind_confidences.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const previous_litigations = ['None','Within 1 year','Within 1-5 years','Within 5-10 years'];
  const previous_litigation_options = previous_litigations.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const ongoing_litigations = ['None','Potential Cost 1-3% of Assets','Potential Cost < 1% of Assets','Potential Cost > 3% of Assets'];
  const ongoing_litigation_options = ongoing_litigations.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const extend_discoveries = ['Not expanding','Plus 1 year','Plus 2 year','Plus 3 year'];
  const extend_discovery_options = extend_discoveries.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const retentions = ['10000','25000','100000'];
  const retention_options = retentions.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const limits = ['500000','1000000','2000000','3000000'];
  const limit_options = limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const {
   isPublicCompanyValue
 } = props


  return (
    <React.Fragment>
      <div className="d-block">
        <label>Your recent Mergers and Acquisitions activities?*</label>
        <div>
          <Field name="ma_activity" component="select" validate={required}>
            {ma_activity_options}
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Your level of business confidence in your Industry?</label>
        <div>
          <Field name="ind_confidence" component="select" validate={required}>
            {ind_confidence_options}
          </Field>
        </div>
      </div>
      <div className="">
        <label>Did you have any SEC offerings in the past?*</label>
        <div>
          <Field name="sec_offering" component="input" type="checkbox" validate={required}/>
        </div>
      </div>
      <div className="d-block">
        <label>Do you have any history of litigations?*</label>
        <div>
          <Field name="previous_litigation" component="select" validate={required}>
             {previous_litigation_options}
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Do you have any ongoing litigations?*</label>
        <div>
          <Field name="ongoing_litigation" component="select" validate={required}>
            {ongoing_litigation_options}
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Do you want to extend your discovery period?*</label>
        <div>
          <Field name="extend_discovery" component="select" validate={required}>
            {extend_discovery_options}
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Your (desired) self-insured retention limit?*</label>
        <div>
          <Field name="retention" component="select" validate={required}>
            {retention_options}
          </Field>
        </div>
      </div>
      <div className="d-block">
        <label>Your projected annual revenue?*</label>
        <div>
          <Field name="revenue" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>What is the total value of the Assets you own?(in $mn)*</label>
        <div>
          <Field name="asset_size" component="input" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="isPublicCompany">Is your company publicly listed?</label>
        <div>
          <Field name="isPublicCompany" id="isPublicCompany" component="input" type="checkbox"/>
        </div>
      </div>
      {isPublicCompanyValue && <div>
        <label>What is the current market cap of your company?(in $mn)</label>
        <Field name="market_cap" component="input" type="text" />
      </div>}

      <div className="d-block">
        <label>Your (desired) coverage limit per occurrence (double for aggregate limit)?*</label>
        <div>
          <Field name="limit" component="select" validate={required}>
            {limit_options}
          </Field>
        </div>
      </div>
    </React.Fragment>
  );
};




// Decorate with redux-form
DO_Form = reduxForm({
  form: 'Directors and Officer'  // a unique identifier for this form
})(DO_Form)


// Decorate with connect to read form values
const selector = formValueSelector('Directors and Officer') // <-- same as form name
DO_Form = connect(
  state => {
    // can select values individually
    const isPublicCompanyValue = selector(state, 'isPublicCompany')

    return {
      isPublicCompanyValue,

    }
  }
)(DO_Form)

export default DO_Form
