import {  SET_SEARCH } from '../../src/app/constants';
import searchReducer from '../../src/app/reducers/search';

describe('>>>R E D U C E R --- Test searchReducers',()=>{
    
    it('+++ reducer for SET_SEARCH', () => {
        const search = {isSearching: true, query: 'foo'};
        const state = searchReducer([],{type: SET_SEARCH, search});
        expect(state).toEqual(search);
    });
});