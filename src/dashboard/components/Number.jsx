import React from 'react';
import { FormControl } from '../../components'

const NumberFilter = ({ label, name, defaultValue = 0 }) => (
  <FormControl title={ label }>
    <div key="name">
      <input readOnly className="input-default" type="number" name={ name } defaultValue={ defaultValue } />
    </div>
  </FormControl>
);

export default NumberFilter;