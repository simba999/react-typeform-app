import policy_descriptions from "./policy_descriptions";
import policy_questions from "./policy_questions";
import axios from "axios";
import {
  GET_POLICY_DESC,
  GET_POLICY_QUESTIONS,
  SET_INDUSTRY,
  SET_POLICY,
  GET_STARTING_INFO,
  GET_POLICY_DETAILS,
  // for coach form
  SET_NAIC_2_CODES,
  SET_NAIC_4_CODES,
  GET_SUB_INDUSTRY,
  CREATE,
  SET_POLICY_CODE,
  GET_GL_CODE,
  SET_FORM_INDUSTRY_INPUT
} from "./types";

// Initial loading data,
// gets naic 2 and 4 digits codes,
// look at http://localhost:8000/insurance/
export const getStartingInfo = () => async dispatch => {
  const res = await axios.get(
    "http://ec2-18-210-61-158.compute-1.amazonaws.com/insurance/"
  );
  dispatch(setNaic2Codes(res.data.NAIC_Industry_Code));
  dispatch(setNaic4Codes(res.data.NAIC_4_Digit_Industry_Code));
};

const setNaic2Codes = codes => {
  console.log("setNaic2Codes");
  console.log(codes);
  return {
    type: SET_NAIC_2_CODES,
    payload: codes
  };
};

const setNaic4Codes = codes => {
  return {
    type: SET_NAIC_4_CODES,
    payload: codes
  };
};

// Select Sub Industry and 2 and 4 digits selected
export const get_sub_industry = code => async dispatch => {
  const res = await axios.get(
    `http://ec2-18-210-61-158.compute-1.amazonaws.com/insurance/policy/${code}/sub_industry`
  );
  dispatch({
    type: GET_SUB_INDUSTRY,
    payload: res.data.sub_industry_list
  });
};

export const getPolicyDetails = (policyCode, naiccode) => async dispatch => {
  const res = await axios.get(
    `http://ec2-18-210-61-158.compute-1.amazonaws.com/insurance/policy/${policyCode}/${naiccode}/details`
  );
  dispatch({
    type: GET_POLICY_DETAILS,
    payload: res.data
  });
};

export const getGLCode = digit2_code => async dispatch => {
  const res = await axios.get(
    `http://ec2-18-210-61-158.compute-1.amazonaws.com/insurance/policy/${digit2_code}/gl_code`
  );
  dispatch({
    type: GET_GL_CODE,
    payload: res.data["gl_code_last_letter"]
  });
};

/*
export const getPolicy = code => {
  const policy = policy_descriptions.filter(function(policy) {
    return policy.code == code;
  });
  return {
    type: GET_POLICY_DESC,
    payload: policy[0]
  };
};
*/

export const getPolicyDesc = policy_code => async dispatch => {
  const res = await axios.get(
    `http://ec2-18-210-61-158.compute-1.amazonaws.com/insurance/policy/${policy_code}/description`
  );
  dispatch({
    type: GET_POLICY_DESC,
    payload: res.data["description"]
  });
};

/*
export const getQuestions = code => {
  const policy = policy_questions.filter(function(policy) {
    return policy.code == code;
  });
  return {
    type: GET_POLICY_QUESTIONS,
    payload: policy[0].questions
  };
};
*/
export const setIndustry = industry => {
  return {
    type: SET_INDUSTRY,
    payload: industry
  };
};

/*export const setPolicy = title => {
  const policy = policy_descriptions.filter(function(policy) {
    return policy.title == title;
  });

  return {
    type: SET_POLICY,
    payload: policy
  };
};
*/

export const setPolicy = policy => {
  return {
    type: SET_POLICY,
    payload: policy
  };
};

export const setPolicyCode = code => {
  return {
    type: SET_POLICY_CODE,
    payload: code
  };
};

export const setFormIndustryInput = form => {
  return {
    type: SET_FORM_INDUSTRY_INPUT,
    payload: form
  };
};

// Select Sub Industry and 2 and 4 digits selected
export const create = data => async dispatch => {
  const res = await axios.post(
    `http://ec2-18-210-61-158.compute-1.amazonaws.com/insurance/policy/get_premium`,
    data
  );
  dispatch({
    type: CREATE,
    payload: res.data
  });
};

export function create2(data) {
  const user = {
    ann_revenue: "10000"
  };
  axios
    .post(
      `http://ec2-18-210-61-158.compute-1.amazonaws.com/insurance/policy/get_premium`,
      data
    )
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
}

{
  /*
export function create (values) {

  return (dispatch) => {
     dispatch({type: CREATE_ORGANIZATION});
     axios.post(`http://localhost:8000/insurance/policy/`, values)
        .then((res) =>{
            dispatch({type: CREATE_ORGANIZATION_SUCCESS, payload: res});
        })
        .catch((error)=> {
            dispatch({type: CREATE_ORGANIZATION_FAILURE, payload: error});
        })
  }

}

*/
}
