import React from 'react';
import { FormControl, Input } from '../../components'

const EqualityFilter = ({ label, fields, name }) => {
  
  if (!Array.isArray(fields)) {
    fields = [{ label, name }];
  }
  
  return (<FormControl title={ label } >
    {
      fields.map(({ label, name, defaultValue = 'empty' }) => (
        (
          <div key="name">
           <strong>{ label }</strong>
           <select name={name}>
             <option value="==">is</option>
             <option value="!=">is not</option>
           </select>
           <input type="text" name={ name } defaultValue={ defaultValue } />
          </div>
        )
      ))
    }
  </FormControl>)
};

export default EqualityFilter;