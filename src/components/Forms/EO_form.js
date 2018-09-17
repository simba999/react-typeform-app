import React from 'react';
import { Field } from 'redux-form';

const EO_Form = ({ required }) => {

  const limits = [100000, 250000, 500000, 1000000];
  const limit_options = limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const deductibles = [5000, 10000, 25000];
  const deductible_options = deductibles.map(deductible => {
    return (
      <option key={deductible} value={deductible}>
        {deductible}
      </option>
    );
  });

  return (
    <React.Fragment>

      <div className="d-block">
        <label>Your projected annual revenue?*</label>
        <div>
          <Field name="ann_revenue" component="input" placeholder = '100000' type="text" defaultValue = '' />
        </div>
      </div>


      <div style={{ display: 'inline-block' }}>
        <label>Your (desired) deductible limit?*</label>
        <div>
          <Field name="coverage" component="select" >
            {limit_options}
          </Field>
        </div>
      </div>


      <div style={{ display: 'inline-block' }}>
        <label>Your (desired) coverage limit per occurrence (double for aggregate limit)?*</label>
        <div>
          <Field name="deductible" component="select" >
            {deductible_options}
          </Field>
        </div>
      </div>

    </React.Fragment>
  );
};

export default EO_Form;
