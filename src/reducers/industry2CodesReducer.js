import { SET_NAIC_2_CODES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SET_NAIC_2_CODES:
      return action.payload;
    default:
      return state;
  }
}
