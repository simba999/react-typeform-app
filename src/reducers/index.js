import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import descriptionReducer from './descriptionReducer';
//import questionsReducer from './questionsReducer';
import industryReducer from './industryReducer';
import industry2CodesReducer from './industry2CodesReducer';
import industry4CodesReducer from './industry4CodesReducer';
import subIndustryReducer from './subIndustryReducer';
import policyDetailsReducer from './policyDetailsReducer';
import policyReducer from './policyReducer';
import createReducer from './createReducer';
import policyCodeReducer from './policyCodeReducer';
import glCodeReducer from './glCodeReducer';
import formIndustryInputReducer from './formIndustryInputReducer';


export default combineReducers({
  // remove description : descriptionReducer, no longer needed, see policy_details
  policy_description: descriptionReducer,
  form: reduxForm,
  policy_details: policyDetailsReducer,
  industry2codes: industry2CodesReducer,
  industry4codes: industry4CodesReducer,
  sub_industry: subIndustryReducer,
  // remove questions : questionsReducer, no longer needed, see policy_details
  //questions: questionsReducer,
  selected_industry: industryReducer,
  selected_policy: policyReducer,
  premium: createReducer,
  policy_code: policyCodeReducer,
  gl_code_last_letter: glCodeReducer,
  form_industry_input: formIndustryInputReducer,

});
