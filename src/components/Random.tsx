import React from 'react';
import { Controller } from './random/Controller';

// Functional component with an empty dev that is exported default
const Random = () => {
  return (
    <div>
      <h1>Random</h1>
      <Controller />
    </div>
  )
}

export default Random;