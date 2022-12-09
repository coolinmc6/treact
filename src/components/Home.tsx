/**
 * Basic components that I want to build:
 
 * - Input component with React ChangeEvent
 * - Use Copilot to create some components
 * 
 * 
 * * * COMPLETED ITEMS * * * *
 * - Accordian-like component to hide show content - COMPLETE
 * - Component with children - COMPLETE
 * - Each of the primitives: string, number, boolean - COMPLETE
 * - Two components with optional props - COMPLETE
 */

import React, { useState } from 'react';
import '../styles/home.css';

import Accordion from './Accordion';
import Button from './home/Button';
import Typography from './home/Typography';

const Home = () => {
  const [accordions, setAccordions] = useState([
    { name: 'Typography', open: true },
    { name: 'Button', open: true }, 
  ])

  const toggleAccordion = (name: string) => {
    const newAccordions = accordions.map(accordion => {
      if (accordion.name === name) {
        return { ...accordion, open: !accordion.open }
      }
      return accordion;
    })
    setAccordions(newAccordions);
  }

  const a = (accordion: string) => {
    return accordions.filter(acc => acc.name === accordion)[0]
  }
  return (
    <div>
      <h1>Home</h1>
      <p className="intro-text">This is component holds all my small components. The goal is to crank out like 50 of them and just
        throw them up on the screen. I want to practice playing with components and basic shit. Just write
        components like a madman!
      </p>
      <h2>Simple Components</h2>
      <Accordion open={a('Typography').open} header="Typography" toggle={() => toggleAccordion('Typography')}>
        <Typography size="small">This is small text</Typography>
        <Typography size="medium">This is medium text</Typography>
        <Typography size="large">This is large text</Typography>
      </Accordion>
      <Accordion open={a('Button').open} header="Buttons" toggle={() => toggleAccordion('Button')}>
        <h4>Standard Buttons</h4>
        <Button variant="primary" loading={false} loadingText="Loading primary...">Primary</Button>
        <Button variant="secondary" loading={false}  loadingText="Loading secondary...">Secondary</Button>
        <Button variant="danger" loading={false}  loadingText="Loading danger...">Danger</Button>
        <h4>Loading Buttons</h4>
        <Button variant="primary" loading={true} loadingText="Loading primary...">Primary</Button>
        <Button variant="secondary" loading={true} loadingText="Loading secondary...">Secondary</Button>
        <Button variant="danger" loading={true} loadingText="Loading danger...">Danger</Button>
        <Button variant="primary" loading={true} loadingText="Loading primary...">Primary</Button>
      </Accordion>
    </div>
  )
}

export default Home;