import React from 'react';
import { FormControl } from '../../components'

const ListFilter = ({ label, name, defaultValue = 'empty' }) => (
  <FormControl title={ label }>
    <div>
      <textarea readOnly className="textarea-default" rows="5" cols="30" name={ name } defaultValue={ defaultValue }></textarea>
      <div className="muted text-13 text-italic">*Enter a comma separated values.</div>
    </div>
  </FormControl>
);

export default ListFilter;