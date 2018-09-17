import { GET_POLICY_DETAILS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_POLICY_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
