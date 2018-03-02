import React from 'react';
import { FormControl, Input } from '../../components'

const EqualityFilter = ({ label, name, defaultValue = 'empty' }) => (
  <FormControl title={ label }>
    <div key="name">
      <strong>{ label }</strong>
      <input type="text" name={ name } defaultValue={ defaultValue } />
      <div className="muted text-13 text-italic">*Enter a space separated values.</div>
    </div>
  </FormControl>
);

export default EqualityFilter;