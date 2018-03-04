import React from 'react';
import { FormControl } from '../../components'

const DateFilter = ({ label, min, max, name, defaultValue = 0, defaultSelect = 'm' }) => (
  <FormControl title={ label }>
    <div className="filter-group" key="name">
      <input 
        readOnly
        className="input-default" 
        type="number" 
        min={ min } 
        max={ max } 
        name={ name } 
        defaultValue={ defaultValue } />
      
    <select disabled className="input-default" name={ name } defaultValue={ defaultSelect }>
      <option value="m">minute</option>
      <option value="h">hour</option>
      <option value="d">day</option>
      <option value="w">week</option>
      <option value="mo">month</option>
      <option value="y">year</option>
    </select>
    </div>
  </FormControl>);

export default DateFilter;