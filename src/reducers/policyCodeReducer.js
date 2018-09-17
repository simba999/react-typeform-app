import { SET_POLICY_CODE } from '../actions/types';

const policy_code_default =  ''


export default function(state = policy_code_default , action) {
  switch (action.type) {
    case SET_POLICY_CODE:
      return action.payload;
    default:
      return state;
  }
}
