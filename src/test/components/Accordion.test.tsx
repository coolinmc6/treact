import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Accordion from '../../components/Accordion';

const testFn = jest.fn();

const WrapperComponent = () => {
  return (
    <Accordion header="Accordion" open={true} toggle={testFn} >
      <div>Test</div>
    </Accordion>
  )
}

describe('Accordion', () => {
  it('should render', () => {
    const { container } = render(<WrapperComponent />);
    expect(container).toBeInTheDocument();
  });

  it('should call toggle handler when clicked', () => {
    render(<WrapperComponent />);
    const accordion = screen.getByTestId('toggle-accordion')
    userEvent.click(accordion);
    expect(testFn).toHaveBeenCalled();
  })

})