import React from 'react';
import {shallow} from 'enzyme';
import AccountsPage from '../AccountsPage';
import {MockedProvider} from "@apollo/client/testing";

describe('<AccountsPage />', () => {
    it('should match snapshot when no data is available', () => {
        const component = shallow(
            <MockedProvider mocks={[]}>
                <AccountsPage  />
            </MockedProvider>
        );

        expect(component).toMatchSnapshot();
    });
});
