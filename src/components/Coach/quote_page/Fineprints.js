import React from 'react';


const Fineprints = props => {
  const { policy_fine_print_1, policy_fine_print_2, policy_fine_print_3, policy_fine_print_4, policy_fine_print_5, pricing } = props.props;
  return (
    <div style={{ width: '100%', marginRight: 0 }}>
      <h3>
        Fine Print
      </h3>

      <div style ={{marginLeft:'1em'}}>

        <p>{policy_fine_print_1 != '' ? policy_fine_print_1 : ''} </p>
        <p>{policy_fine_print_2 != '' ? policy_fine_print_2 : ''} </p>
        <p>{policy_fine_print_3 != '' ? policy_fine_print_3 : ''} </p>
        <p>{policy_fine_print_4 != '' ? policy_fine_print_4 : ''} </p>
        <p>{policy_fine_print_5 != '' ? policy_fine_print_5 : ''} </p>
      </div>

      <h3>
        Pricing
      </h3>


      <div style ={{marginLeft:'1em'}}>
        <p>{pricing != '' ? pricing : ''} </p>
      </div>



    </div>
  );
};

export default Fineprints;
