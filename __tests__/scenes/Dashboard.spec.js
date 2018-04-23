import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import ConnectedDashboard, { Dashboard } from '../../src/app/scenes/Dashboard/index';
import {Search} from '../../src/app/components/Search';
import { navigate } from '../../src/app/actions/menu';

Enzyme.configure({ adapter: new Adapter() });

describe('>>>D A S H B O A R D --- redux props',()=>{
    let wrapper;
    beforeEach(()=>{ 
        wrapper = shallow(<Dashboard/>);   
    })

    it('+++ render .dashboard__container - div', () => {
        expect(wrapper.find('.dashboard__container')).toHaveLength(1);
    });
    it('+++ render <Search/>', () => {
        expect(wrapper.find(Search)).toHaveLength(1);
    });
});

describe('>>>D A S H B O A R D --- passing the store',()=>{
    const initialState = {page: 'DASHBOARD'};
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedDashboard store={store}/> )  
    })

    it('+++ render the connected(SMART) component', () => {
       expect(container.length).toEqual(1)
    });
});

describe('>>>D A S H B O A R D --- integration tests',()=>{
    const initialState = {page: 'DASHBOARD', search: { isSearching: true, query: 'foo' }};
    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedDashboard store={store}/> )  
    })

    it('+++ valid props', () => {
        expect(container.props()).toMatchObject(initialState);
    });
});

