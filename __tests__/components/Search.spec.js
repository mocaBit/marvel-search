import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConnectedSearch, { Search } from '../../src/app/components/Search';
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

describe('>>>S E A R C H --- render',()=>{
    const initialState = { isSearching: true, query: 'foo' };
    let wrapper;
    beforeEach(()=>{ 
        wrapper = shallow(<Search search={initialState}/>);   
    })

    it('+++ render #search-input - input', () => {
        expect(wrapper.find('.search-input')).toHaveLength(1);
    });

    it('+++ render #search-input - input', () => {
        expect(wrapper.find('.search-input').prop('value')).toBe(initialState.query);
    });
});

describe('>>>S E A R C H --- store',()=>{
    const initialState = {search: { isSearching: true, query: 'foo' }};
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedSearch store={store}/> )  
    })
    it('+++ valid props', () => {
        expect(container.prop('search')).toBe(initialState.search);
    });
});