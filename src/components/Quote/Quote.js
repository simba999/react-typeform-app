import React, { Component } from 'react';
import CoachForm from '../Coach/CoachForm';
import CoachFormSecondPage from '../Coach/CoachFormSecondPage';
import CoachFormThirdPage from '../Coach/CoachFormThirdPage';

import { reduxForm, Field } from 'redux-form';
// import MaterialUiForm from './MaterialForm';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFormIndustryInput } from '../../actions/index';

class Coach extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      page: 1
    };
  }

  nextPage(form) {
    this.setState({ page: this.state.page + 1 });

      // print the form values to the console
      console.log(form);
      console.log('submitting page 1 form');
      this.props.setFormIndustryInput(form);


  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  componentWillMount() {}

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;

    return (
      <div style= {{marginTop: '5em'}}>
        {page === 1 && <CoachForm myPremiumEstimate = {true} onSubmit={this.nextPage} />}
        {page === 2 && <CoachFormThirdPage previousPage={this.previousPage}  />}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFormIndustryInput  }, dispatch);
}

function mapStateToProps({ description, questions }) {
  return { description, questions };
}

// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));

export default connect(mapStateToProps, mapDispatchToProps)(Coach);
