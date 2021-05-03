import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

beforeEach(() => {
  //ARRANGE
  render(<Counter />)
});

test('[UNIT]: render Counter items', () => {
  const counteHreader = screen.getByText(/this is 0/i);
  const counteButton = screen.getByText(/increase/i);
  // assert
  expect(counteHreader).toBeInTheDocument();
  expect(counteButton).toBeInTheDocument();
});

test('[UNIT]: increase header by click on button', () => {
  //Arrange
  const counterHeader = screen.getByText(/this is/i)
  //ACT
  fireEvent.click(screen.getByText(/increase/i));
  //ASSERT
  expect(counterHeader).toHaveTextContent(/this is 1/i)
})
