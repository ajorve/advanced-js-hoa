import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';

// import LoginForm and test for all fields entered

describe('loginForm', () => {
    let wrapper;

    beforeEach(() => {
        "use strict";
        wrapper = shallow(<loginForm/>)
    });

    it('renders login input fields correctly...', () => {
        expect(wrapper.find('#username').exists()).toBe(true);
        expect(wrapper.find('#password').exists()).toBe(true);
        expect(wrapper.find('input').length).toBe(2)
    });

    it('renders the submit button correctly...', () => {
        "use strict";
        expect(wrapper.find('#submitLogin').exists()).toBe(true)
    })
});
