import React from 'react';
import {shallow} from 'enzyme';
import MovementsPage from '../MovementsPage';
import {MockedProvider} from "@apollo/client/testing";

describe('<MovementsPage />', () => {
    it('should match snapshot when no data is available', () => {
        const component = shallow(
            <MockedProvider mocks={[]}>
                <MovementsPage  />
            </MockedProvider>
        );

        expect(component).toMatchSnapshot();
    });
});
