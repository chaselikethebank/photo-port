import React from 'react';
import { render, cleanup, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../../Contact/index';



describe('Contact Component', () => {
    it('renders', () => {
        render(<Contact />)
    });
})

describe('links are visible', () => {
    it('inserts text into links', () => {
        const { getByTestId } = render(< Contact />)
        expect(getByTestId('Contact')).toHaveTextContent('Contact me')
    });
})

afterEach(cleanup)
