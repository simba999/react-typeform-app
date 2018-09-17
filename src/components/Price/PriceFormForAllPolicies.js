// page after clicked icons of policy
import React, { Component } from 'react';
// import SimpleList from './SimpleList';
import Form from './Form';
//import { Field, reduxForm } from 'redux-form';
// import MaterialUiForm from './MaterialForm';
//import Typography from '@material-ui/core/Typography';
import policy_descriptions from '../../actions/policy_descriptions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPolicyDesc, setPolicyCode} from '../../actions/index';
import SideList from '../Common/Recomendation';
import '../Forms/form.css';
import select_form from '../Forms/select_form';
import {Button} from 'react-bootstrap';
import  Coach from '../Coach/Coach';

class PriceFormForAllPolicies extends Component {
  constructor(props) {
    super(props);
  //  this.selectPolicy = this.selectPolicy.bind(this);
    this.state = { policy: 'General Liability' };
  }

  componentWillMount() {
    this.props.getPolicyDesc(this.props.params.policycode);
    this.props.setPolicyCode(this.props.params.policycode);

  }

/*
  selectPolicy(policy_title) {
    const selected_policy = policy_descriptions.filter(policy => {
      return policy.title === policy_title;
    });
    if (selected_policy != undefined) {
      this.props.getPolicy(selected_policy[0].code);
    }
    this.setState({ policy: policy_title });
  }
*/


  render() {
    console.log('this.props.match.params.policycode');
    console.log(this.props.params.policycode);
    console.log(this.props.policy_description);
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

        <Coach/>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPolicyDesc, setPolicyCode}, dispatch);
}

function mapStateToProps({ policy_description, questions }) {
  return { policy_description, questions };
}

// export default connect(mapStateToProps, null)(withStyles(styles)(Schedule));
// export default connect(mapStateToProps, mapDispatchToProps)(PriceForm);


export default connect(mapStateToProps, mapDispatchToProps)(PriceFormForAllPolicies);
