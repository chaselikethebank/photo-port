import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../../Modal/index';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal currentPhoto={currentPhoto} />);
  });

  describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(
        <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
      );
      fireEvent.click(getByText('X'));

      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
  });
});
