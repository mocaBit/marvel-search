import { START_SEARCH, END_SEARCH } from '../constants';
const stateDefault = {
  isSearching: false,
  query: ''
}
export default (state = stateDefault, action = {}) => {
  switch(action.type) {
    case START_SEARCH:
      const { query } = action;
      return {
        isSearching: true,
        query
      };    
    case END_SEARCH:   
      return {
        isSearching: false
      };
    default:
      return state;
  }
};