import React from 'react';
import { FormControl, Input } from '../../components'

const NumberFilter = ({ label, name, defaultValue = 0 }) => (
  <FormControl title={ label }>
    <div key="name">
      {/* <strong>{ label }</strong> */}
      <input readOnly className="input-default" type="number" name={ name } defaultValue={ defaultValue } />
      {/* <div className="muted text-13 text-italic">*Enter a space separated values.</div> */}
    </div>
  </FormControl>
);

export default NumberFilter;