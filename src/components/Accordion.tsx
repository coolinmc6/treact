import React from 'react';

type AccordionProps = {
  children: React.ReactNode;
  header: string;
  open: boolean;
  toggle: () => void;
}

const Accordion = ({ open, children, header, toggle }: AccordionProps) => {
  return (
    <div className={`accordion ${open ? 'open' : 'closed'}`}>
      <div className="accordion-header">
        <h3>{ header }</h3>
        <div className="accordion-header-icon" onClick={toggle}>
          {open ? 'x' : '+'}
        </div>
      </div>
      <div className="accordion-body">
        { children }
      </div>
    </div>
  );
}

export default Accordion;