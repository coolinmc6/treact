import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Navigation from '../../components/Navigation';

const pages = [
  { name: 'Home', active: true, },
  { name: 'Random', active: false, },
  { name: 'SIC Fitness', active: false, },
  { name: 'Tailwind', active: false, },
  { name: 'Zustand', active: false, },
]

const mockCallBack = jest.fn();

describe('Navigation', () => {
  it('should render', () => {
    const { container } = render(<Navigation pages={pages} handleClick={mockCallBack} />);
    expect(container).toBeInTheDocument();
  })

  it('should call handleClick when clicked', () => {
    render(<Navigation pages={pages} handleClick={mockCallBack} />);
    const navLink = screen.getByText('Random');
    userEvent.click(navLink);
    expect(mockCallBack).toHaveBeenCalled();
  })
})