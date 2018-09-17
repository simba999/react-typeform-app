import { SET_FORM_INDUSTRY_INPUT } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case SET_FORM_INDUSTRY_INPUT:
      return action.payload;
    default:
      return state;
  }
}
