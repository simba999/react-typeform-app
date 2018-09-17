import { SET_POLICY } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case SET_POLICY:
      return action.payload;
    default:
      return state;
  }
}
