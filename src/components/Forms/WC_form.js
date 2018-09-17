import React from 'react';
import { Field } from 'redux-form';

const WC_Form = ({ required }) => {
  return (
    <React.Fragment>
      <div className="d-block">
        <label>Number of employees*</label>
        <div>
          <Field name="WC_employees" component="input" type="text" />
        </div>
      </div>
      <div className="d-block">
        <label>Payroll*</label>
        <div>
          <Field name="WC_payroll" component="input" type="text" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WC_Form;
