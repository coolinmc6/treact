import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Home from '../../components/Home';

describe('Home', () => {
  it('should render', () => {
    const { container } = render(<Home />);

    expect(container).toBeTruthy();
  });

  it('should toggle accordions when clicked', () => {
    render(<Home />);
    const accordion = screen.getByTestId('accordion-typography');
    const toggle = screen.getByTestId('toggle-typography');
    userEvent.click(toggle);
    expect(accordion).toHaveClass('closed');
  })

})