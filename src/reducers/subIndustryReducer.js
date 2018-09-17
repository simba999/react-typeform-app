import { GET_SUB_INDUSTRY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_SUB_INDUSTRY:
      return action.payload;
    default:
      return state;
  }
}
