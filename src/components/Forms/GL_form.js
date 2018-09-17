import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { compose } from 'redux';

const GL_Form = (props,{ required }) => {
  const limits = ['select', 50000,100000,300000,500000,1000000,2000000];
  const limit_options = limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const {
   gl_code_last_letter
 } = props

  console.log("GL_Form:")
  console.log(gl_code_last_letter)
  return (
    <React.Fragment>

    { (gl_code_last_letter == 'A') &&
      <div className="d-block">
          <label>Square footage area of your property?*</label>
          <div>
            <Field name="Gl_input" component="input" type="text" />
          </div>
      </div>

    }

    {(gl_code_last_letter == 'H') &&
      <div className="d-block">
        <label>Total number of students?*</label>
        <div>
          <Field name="Gl_input" component="input" type="text" />
        </div>
      </div>
    }

    {(gl_code_last_letter == 'P') &&
      <div className="d-block">
        <label>Your projected annual payroll?*</label>
        <div>
          <Field name="Gl_input" component="input" type="text" />
        </div>
      </div>
    }

    {(gl_code_last_letter == 'R') &&
      <div className="d-block">
        <label>Your projected annual revenue?*</label>
        <div>
          <Field name="Gl_input" component="input" type="text" />
        </div>
      </div>
    }

    {(gl_code_last_letter == 'S') &&
      <div className="d-block">
        <label>What is the annual sales of the company?*</label>
        <div>
        <Field name="Gl_input" component="input" type="text" />
        </div>
      </div>
    }



    <div className="d-block">
      <label>Your (desired) coverage limit per occurrence (double for aggregate limit)?*</label>
      <div>
      <Field name="limit" component="select" >
        {limit_options}
      </Field>
      </div>
    </div>
    </React.Fragment>
  );
};




{/*
export default reduxForm({
  form: 'coachForm', //Form name is same
  destroyOnUnmount: false
})(connect(mapStateToProps)(GL_Form));

function mapStateToProps({ gl_code_last_letter}) {
  return { gl_code_last_letter };
}
*/}




const mapStateToProps = state => {
  return {
    form: state.selected_policy,
    gl_code_last_letter: state.gl_code_last_letter,
    selected_industry: state.selected_industry,

  };
};

// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));

// export default CoachFormSecondPage;


export default compose(
    connect(mapStateToProps),
    reduxForm({
        //other redux-form options...

    })
)(GL_Form);
