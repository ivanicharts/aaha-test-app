import React from 'react';
import { FormControl, Input } from '../../components'

const ListFilter = ({ label, name, defaultValue = 'empty' }) => (
  <FormControl title={ label }>
    <div key="name">
      {/* <strong>{ label }</strong> */}
      {/* <input className="input-default" type="text" name={ name } defaultValue={ defaultValue } /> */}
      <textarea readOnly className="textarea-default" rows="5" cols="30" name={ name } defaultValue={ defaultValue }></textarea>
      <div className="muted text-13 text-italic">*Enter a comma separated values.</div>
    </div>
  </FormControl>
);

export default ListFilter;