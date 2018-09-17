import React from 'react';


const Descriptions = props => {
  const { policy_definition_1, policy_definition_2, policy_definition_3, policy_definition_4, policy_definition_5 } = props.props;
  return (
    <div style={{ width: '100%', marginRight: 0 }}>
      <h3>
        Description
      </h3>

      <div style ={{marginLeft:'1em'}}>

        <p>{policy_definition_1 != '' ? policy_definition_1 : ''} </p>
        <p>{policy_definition_2 != '' ? policy_definition_2 : ''} </p>
        <p>{policy_definition_3 != '' ? policy_definition_3 : ''} </p>
        <p>{policy_definition_4 != '' ? policy_definition_4 : ''} </p>
        <p>{policy_definition_5 != '' ? policy_definition_5 : ''} </p>
      </div>

    </div>
  );
};

export default Descriptions;
