//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// import { Link } from 'react-router-dom';
// import CoachField from './CoachField';
// import _ from 'lodash';
// import validateEmails from '../../utils/validateEmails';

// const formFields = [
//   { label: 'Title', name: 'title' },
//   { label: 'Description', name: 'desc' },
//   { label: 'Email', name: 'email' },
//   { label: 'policy', name: 'policy' }
// ];

class Form extends Component {
  // renderFields() {
  //   return _.map(formFields, ({ label, name, meta }) => {
  //     return <Field key={name} component={CoachField} type="text" label={label} name={name} />;
  //   });
  // }

  render(props) {
    // const { handleSubmit, pristine, reset, submitting } = props;

    const questions = this.props.questions.map((question, index) => {
      console.log(question);
      if (question !== '') {
        return (
          <div key={index} style={{ display: 'block' }}>
            <label>{question}</label>
            <div>
              <Field name={`Question${index}`} component="input" type="text" />
            </div>
          </div>
        );
      }
    });

    return (
      <div>
        <form action="">
          {questions}
          <div>
            <button type="submit">Submit</button>
            <button type="button">Clear Values</button>
          </div>
        </form>
      </div>
    );
  }
}

// function validate(values) {
//   const errors = {};

//   errors.recipients = validateEmails(values.recipients || '');

//   _.each(formFields, ({ name }) => {
//     if (!values[name]) {
//       errors[name] = 'You must provide a value';
//     }
//   });

//   return errors;
// }

export default reduxForm({
  form: 'priceForm' // a unique identifier for this form
})(Form);
