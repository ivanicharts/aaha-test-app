// export default {
//   equality: 'filter/equality',
//   list: 'filter/list',
//   input: 'filter/input',
//   number: 'filter/number',
//   date: 'filter/date'
// }

import React from 'react';

import Equality from './Equality';
import List from './List';

export default {
 
  equality: Equality,
  
  list: List,
  
  input: 'filter/input',
  
  number: 'filter/number',
 
  date: 'filter/date'
}