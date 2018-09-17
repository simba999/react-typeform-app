import { GET_POLICY_QUESTIONS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_POLICY_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}
