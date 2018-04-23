import { SET_CHARACTERS } from '../constants';

export default (state = [], action = {}) => {
  switch(action.type) {
    case SET_CHARACTERS:
      const { characters } = action;
      return characters;
    default:
      return state;
  }
};