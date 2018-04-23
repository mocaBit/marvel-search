import { setSearch, navigate } from '../../src/app/actions/menu';
import { SET_SEARCH, NAVIGATE } from '../../src/app/constants';

describe('>>>A C T I O N --- Test calculatorActions',()=>{
    it('+++ actionCreator navigate', () => {
        const page = 'DASHBOARD';
        const action = navigate(page);
        expect(action).toEqual({type: NAVIGATE,  page});
    });

    it('+++ actionCreator setSearch', () => {
        const query = 'foo';
        const action = setSearch(query);
        expect(action).toEqual({type: SET_SEARCH,search: {isSearching: true, query}});
    });
});