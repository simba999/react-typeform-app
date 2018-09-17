import { GET_GL_CODE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_GL_CODE:
      return action.payload;
    default:
      return state;
  }
}
