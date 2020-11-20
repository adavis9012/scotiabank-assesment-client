import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../MainPage';

describe('<MainPage />', () => {
    const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn(),
        removeItem: jest.fn(),
    };

    describe('should match snapshot', () => {

        beforeEach(() => {
            Object.defineProperty(window, 'localStorage', {
                value: localStorageMock
            });
        });

        it('when no is not logged', () => {
            const component = shallow(<MainPage />);

            expect(component).toMatchSnapshot();
            expect(component.find('Login')).toHaveLength(1);
            expect(component.find('Logout')).toHaveLength(0);
        });

        it('when is logged', () => {
            localStorageMock.getItem = jest.fn((e) => 'token');

            const component = shallow(<MainPage />);

            expect(component).toMatchSnapshot();
            expect(component.find('Login')).toHaveLength(0);
            expect(component.find('Logout')).toHaveLength(1);
        });
    });

    it('should clear storage when handler is invoked',() => {
        localStorageMock.getItem = jest.fn((e) => 'token');

        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock
        });

        const component = shallow(<MainPage />);
        const LogoutProps:any = component.find('Logout').props();

        LogoutProps.handleLogin();
        expect(localStorageMock.removeItem).toBeCalled();
    });
});
