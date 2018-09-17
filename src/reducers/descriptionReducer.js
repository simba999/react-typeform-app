import { GET_POLICY_DESC, SET_POLICY } from '../actions/types';

const policy_default = {
  code: 1116,
  title: 'General Liability',
  desc: `The essential business protection covering customer injuries on your property, damage you cause to someone else?s property as well as libel & slander. Everyday activities, negligent services or faulty products can cr{ate a devastating liability putting your business at risk. This policy pays for things such as medical expenses, lawsuits & indemnity.`,
  limits: '$1mn occurance/$2mn aggregateGL',
  dummy: 'DummyGL'
};

export default function(state = '', action) {
  switch (action.type) {
    case GET_POLICY_DESC:
      return action.payload;
    case SET_POLICY:
      return action.payload;
    default:
      return state;
  }
}
