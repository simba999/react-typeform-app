import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import {  getQuestions } from '../../actions/index';
import policy_descriptions from '../../actions/policy_descriptions';

import industry_list from '../Common/industry_list';
import digits_4_codes from '../Common/four_digit_industry_code';
import sub_industry_list from '../Common/sub_industry_list';
import {Button} from 'react-bootstrap'

// import '../Forms/form.css';
import select_form from '../Forms/select_form';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.state = { policy_title: 'General Liability' };
  }

  change(e) {
    this.setState({
      policy_title: e.target.value
    });
  }

  render() {
    const digits_2_options = industry_list.map(industry => {
      return (
        <option key={industry.value} value={industry.value}>
          {industry.title}
        </option>
      );
    });

    let digits_4_options = null;

    if (this.props.digits_2 != null) {
      let digits_4_values = digits_4_codes.filter(code => {
        return code.digits_2 == this.props.digits_2;
      });

      digits_4_options = digits_4_values.map(value => {
        return (
          <option key={value.digits_4} value={value.digits_4}>
            {value.title}
          </option>
        );
      });
    }

    const policy_questions = select_form(this.state.policy_title);

    let naic_code_options = null;
    let selected_sub_industry_title = '';

    if (this.props.digits_4 != null) {
      const sub_industries_selected_list = sub_industry_list.filter(industry => {
        return industry.digits_2 == this.props.digits_2;
      });

      let digits_4_str = this.props.digits_4.toString();

      if (sub_industries_selected_list[0] != undefined) {
        naic_code_options = sub_industries_selected_list[0].sub_industries.map(sub_industry => {
          if (sub_industry.value.toString().slice(0, 4) == digits_4_str) {
            selected_sub_industry_title = sub_industry.title;
            return (
              <option key={sub_industry.value} value={sub_industry.value}>
                {sub_industry.title}
              </option>
            );
          }
        });
      }
    }

    let policies = [
      'Business Owners Policy',
      'Commercial Vehicle',
      'Cyber Liability',
      'Directors and Officer',
      'Errors and Omission',
      'General Liability',
      'Workers Compensation'
    ];

    const policy_options = policies.map(policy => {
      return (
        <option key={policy} value={policy}>
          {policy}
        </option>
      );
    });

    return (
      <div style={{ display: 'block', width: '45%', margin: '5em auto', paddingBottom: '5em' }}>
        <form id="QuoteForm">
          <div style={{ textAlign: 'center' }}>Fields with aestrik are required</div>
          <div>
            <label>Sales*</label>
            <div>
              <Field name="quote_sales" component="input" type="text" />
            </div>
          </div>
          <div>
            <label>Industry*</label>
            <div>
              <Field name="digits_2" component="select" validate={required} style={{ maxWidth: '406px' }}>
                <option />
                {digits_2_options}
              </Field>
            </div>
          </div>
          <div>
            <label>Field*</label>
            <div>
              <Field name="digits_4" component="select" validate={required}>
                <option />
                {digits_4_options}
              </Field>
            </div>
          </div>
          <div>
            <label>Sub Industry*</label>
            <div>
              <Field name="naic_code" component="select" validate={required}>
                <option />
                {naic_code_options}
              </Field>
            </div>
          </div>
          <div style={{ marginTop: '3em' }}>
            <label>Policy*</label>
            <div>
              <Field name="policy" component="select" onChange={this.change} validate={required}>
                <option />
                {policy_options}
              </Field>
            </div>
          </div>
          {policy_questions}

          <div style={{ marginTop: '3em' }}>
            <label>Email*</label>
            <div>
              <Field name="email" component="input" type="email" placeholder="Email" validate={email} />
            </div>
          </div>
          <div>
            <label>Current Premium</label>
            <div>
              <Field name="quote_premium" component="input" type="text" />
            </div>
          </div>
          <div>
            <Button type="submit" className="next">
              Get quote
            </Button>
            <Button type="button" className="previous">
              Back
            </Button>
          </div>
          <div />
        </form>
      </div>
    );
  }
}

const required = value => (value ? undefined : 'Required');

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;



const selector = formValueSelector('quoteForm');
const mapStateToProps = state => {
  return {
    description: state.description,
    digits_2: selector(state, 'digits_2'),
    digits_4: selector(state, 'digits_4')
  };
};

// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));
// export default connect(mapStateToProps, mapDispatchToProps)(PriceForm);

export default reduxForm({
  form: 'quoteForm' //Form name is same
})(connect(mapStateToProps)(Quote));
