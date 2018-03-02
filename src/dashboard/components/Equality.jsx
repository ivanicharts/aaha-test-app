import React from 'react';
import { FormControl, Input } from '../../components'

const EqualityFilter = ({ label, fields, name }) => {
  
  if (!Array.isArray(fields)) {
    fields = [{ label, name }];
  }
  
  return (<FormControl title={ label } >
    {
      fields.map(({ label, name, defaultValue = 'empty', defaultSelect = '==' }) => (
        (
          <div className="filter-group" key="name">
           <strong>{ label }: </strong>
           <select disabled className="input-default" name={name} defaultValue={ defaultSelect }>
             <option value="==">is</option>
             <option value="!=">is not</option>
           </select>
           <input readOnly className="input-default" type="text" name={ name } defaultValue={ defaultValue } />
          </div>
        )
      ))
    }
  </FormControl>)
};

export default EqualityFilter;