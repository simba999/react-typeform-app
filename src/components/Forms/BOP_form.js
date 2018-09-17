import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

let BOP_Form = (props,{ required }) => {

  const deductible_Limits = ['select',1000,2500,5000,10000,25000,50000,75000];
  const deductible_Limit_options = deductible_Limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const expediting_limits = ['select',50000,75000,100000,250000,500000,1000000];
  const expediting_limit_options = expediting_limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const spoilage_limits = ['select',50000,75000,100000,250000,500000,1000000];
  const spoilage_limit_options = spoilage_limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const DICC_limits = ['select',50000,75000,100000,250000,500000,1000000];
  const DICC_limit_options = DICC_limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const hazardous_substance_limits = ['select',50000,75000,100000,250000,500000,1000000];
  const hazardous_substance_limit_options = hazardous_substance_limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const computer_equipment_limits = ['select',50000,75000,100000,250000,500000,1000000];
  const computer_equipment_limit_options = computer_equipment_limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const CFC_limits = ['select',50000,75000,100000,250000,500000,1000000];
  const CFC_limit_options = CFC_limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });

  const data_restoration_limits = ['select',50000,75000,100000,250000,500000,1000000];
  const data_restoration_limit_options = data_restoration_limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const limits = ['select',50000,100000,300000,500000,1000000,2000000];
  const limit_options = limits.map(limit => {
    return (
      <option key={limit} value={limit}>
        {limit}
      </option>
    );
  });


  const {
   hasExpeditingLimitValue,
   hasSpoilageLimitValue,
   hasDICC_limitValue,
   hasHazardousSubstanceLimitValue,
   hasComputerEquipmentLimitValue,
   hasCFClimitValue,
   hasDataRestorationLimitValue,
   hasIncreaseLimitValue,
   gl_code_last_letter
 } = props


  return (
    <React.Fragment>
      <div className="d-block">
        <label>Value of your business property (e.g. Computer, equipment, furniture)?*</label>
        <div>
          <Field name="value" component="input" type="text" />
        </div>
      </div>

      <div className="d-block">
        <label>Your (desired) deductible limit?*</label>
        <Field name="deductible_Limit" component="select" >
          {deductible_Limit_options}
        </Field>
      </div>

      <div className="d-block">
        <label>What is the total number of locations for your business?*</label>
        <div>
          <Field name="no_of_locations" component="input" type="text" />
        </div>
      </div>

{/*
      <div>
        <label htmlFor="hasIncreaseLimit">Do you want to increase the ("choice") limit?</label>
        <div>
          <Field name="hasIncreaseLimit" id="hasIncreaseLimit" component="input" type="checkbox"/>
        </div>
      </div>
      {hasIncreaseLimitValue && <div className="d-block">
              <div>
                <label htmlFor="hasExpeditingLimit" >Do you want additional coverage?</label>
                <div style = {{borderStyle:"none"}}>
                  <Field name="hasExpeditingLimit" id="hasExpeditingLimit" component="input" type="checkbox"/>
                </div>
              </div>
              {hasExpeditingLimitValue && <div>
                <label>Enter the expediting expense limit</label>
                <Field name="expediting_limit" component="select" >
                  {expediting_limit_options}
                </Field>
              </div>}



              <div>
                <label htmlFor="hasSpoilageLimit">Do you want spoilage limit?</label>
                <div style = {{borderStyle:"none"}}>
                  <Field name="hasSpoilageLimit" id="hasSpoilageLimit" component="input" type="checkbox"/>
                </div>
              </div>
              {hasSpoilageLimitValue && <div>
                <label>Enter the spoilage limit</label>
                <Field name="spoilage_limit" component="select" >
                  {spoilage_limit_options}
                </Field>
              </div>}



              <div>
                <label htmlFor="hasDICC_limit">Demolition and Increased Cost of Construction(DICC)?*</label>
                <div style = {{borderStyle:"none"}}>
                  <Field name="hasDICC_limit" id="hasDICC_limit" component="input" type="checkbox"/>
                </div>
              </div>
              {hasDICC_limitValue && <div>
                <label>Enter the DICC limit</label>
                <Field name="DICC_limit" component="select" >
                  {DICC_limit_options}
                </Field>
              </div>}


              <div>
                <label htmlFor="hasHazardousSubstanceLimit">Hazardous Substance?*</label>
                <div style = {{borderStyle:"none"}}>
                  <Field name="hasHazardousSubstanceLimit" id="hasHazardousSubstanceLimit" component="input" type="checkbox"/>
                </div>
              </div>
              {hasHazardousSubstanceLimitValue && <div>
                <label>Enter the Hazardous Substance limit</label>
                <Field name="hazardous_substance_limit" component="select" >
                  {hazardous_substance_limit_options}
                </Field>
              </div>}

              <div>
                <label htmlFor="hasComputerEquipmentLimit">Computer Equipment Choice?*</label>
                <div style = {{borderStyle:"none"}}>
                  <Field name="hasComputerEquipmentLimit" id="hasComputerEquipmentLimit" component="input" type="checkbox"/>
                </div>
              </div>
              {hasComputerEquipmentLimitValue && <div>
                <label>Enter the computer equipment limit</label>
                <Field name="computer_equipment_limit" component="select" >
                  {computer_equipment_limit_options}
                </Field>
              </div>}

              <div>
                <label htmlFor="hasCFClimit">Chlorofluorocarbon?*</label>
                <div style = {{borderStyle:"none"}}>
                  <Field name="hasCFClimit" id="hasCFClimit" component="input" type="checkbox"/>
                </div>
              </div>
              {hasCFClimitValue && <div>
                <label>Enter the CFC limit</label>
                <Field name="CFC_limit" component="select" >
                  {CFC_limit_options}
                </Field>
              </div>}



              <div>
                <label htmlFor="hasDataRestorationLimit">Data Restoration?*</label>
                <div style = {{borderStyle:"none"}}>
                  <Field name="hasDataRestorationLimit" id="hasDataRestorationLimit" component="input" type="checkbox"/>
                </div>
              </div>
              {hasDataRestorationLimitValue && <div>
                <label>Enter the data restoration limit</label>
                <Field name="data_restoration_limit" component="select" >
                  {data_restoration_limit_options}
                </Field>
              </div>}

   </div>}
*/}

       <div className="d-block">
           <label>Your projected annual net income?*</label>
           <div>
             <Field name="income" component="input" type="text" />
           </div>
       </div>

       <div className="d-block">
           <label>Desired number of days you are covered in case of a business interruption?*</label>
           <div>
             <Field name="deductible_days" component="input" type="text" />
           </div>
       </div>


      { (gl_code_last_letter == 'A') &&
        <div className="d-block">
            <label>What is the square footage area of your property?*</label>
            <div>
              <Field name="Gl_input" component="input" type="text" />
            </div>
        </div>

      }

      {(gl_code_last_letter == 'H') &&
        <div className="d-block">
          <label>How many total number of students do you have?*</label>
          <div>
            <Field name="Gl_input" component="input" type="text" />
          </div>
        </div>
      }

      {(gl_code_last_letter == 'P') &&
        <div className="d-block">
          <label>What is total paryoll of the company?*</label>
          <div>
            <Field name="Gl_input" component="input" type="text" />
          </div>
        </div>
      }

      {(gl_code_last_letter == 'R') &&
        <div className="d-block">
          <label>What is the annual revenue of the company?*</label>
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
        <label>What is the coverage limit you want to choose?*</label>
        <div>
        <Field name="limit" component="select" >
          {limit_options}
        </Field>
        </div>
      </div>



    </React.Fragment>
  );
};



const mapStateToProps = state => {
  return {
    gl_code_last_letter: state.gl_code_last_letter


  };
};

// Decorate with redux-form


BOP_Form  = reduxForm({
  form: 'Business Owners Policy', //Form name is same
  destroyOnUnmount: false
})(connect(mapStateToProps)(BOP_Form ));

// Decorate with connect to read form values
const selector = formValueSelector('Business Owners Policy') // <-- same as form name
BOP_Form = connect(
  state => {
    // can select values individually
    const hasExpeditingLimitValue = selector(state, 'hasExpeditingLimit')
    const hasSpoilageLimitValue = selector(state, 'hasSpoilageLimit')
    const hasDICC_limitValue = selector(state, 'hasDICC_limit')
    const hasHazardousSubstanceLimitValue = selector(state, 'hasHazardousSubstanceLimit')
    const hasComputerEquipmentLimitValue= selector(state, 'hasComputerEquipmentLimit')
    const hasCFClimitValue= selector(state, 'hasCFClimit')
    const hasDataRestorationLimitValue= selector(state, 'hasDataRestorationLimit')
    const hasIncreaseLimitValue = selector(state, 'hasIncreaseLimit')

    return {
      hasExpeditingLimitValue,
      hasSpoilageLimitValue,
      hasDICC_limitValue,
      hasHazardousSubstanceLimitValue,
      hasComputerEquipmentLimitValue,
      hasCFClimitValue,
      hasDataRestorationLimitValue,
      hasIncreaseLimitValue

    }
  }
)(BOP_Form)

export default BOP_Form
