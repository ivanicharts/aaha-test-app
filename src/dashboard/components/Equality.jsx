import React from 'react';
import { FormControl } from '../../components'

const EqualityFilter = ({ label, fields, name: parent }) => {
  
  if (!Array.isArray(fields)) {
    fields = [{ label, name: parent }];
  }
  
  return (<FormControl title={ label }>
    {
      fields.map(({ label, name, defaultValue = 'empty', defaultSelect = '==' }) => (
        (
          <div className="filter-group" key={ name }>
           <strong>{ label }: </strong>
           <select disabled className="input-default" name={name} data-parent={parent} defaultValue={ defaultSelect }>
             <option value="==">is</option>
             <option value="!=">is not</option>
           </select>
           <input readOnly className="input-default" type="text" data-parent={parent} name={ name } defaultValue={ defaultValue } />
          </div>
        )
      ))
    }
  </FormControl>)
};

export default EqualityFilter;