import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../About/index';

afterEach(cleanup);

describe('About component', () => {
    it('renders', () => {
        render(<About />);
      });
      it('matches snapshot DOM node structure correctly', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();

          });

  })