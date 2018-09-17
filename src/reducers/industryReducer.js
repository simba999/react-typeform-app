import { SET_INDUSTRY } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case SET_INDUSTRY:
      return action.payload;
    default:
      return state;
  }
}
