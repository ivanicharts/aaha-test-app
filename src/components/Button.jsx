import React from 'react';
import styled from 'react-emotion';

import { emerald, nephertis, white } from '../shared/colors';

const Button = styled('button')`
  border: 0;
  border-bottom: 2px solid ${ nephertis };
  background-color: ${ emerald };
  color: ${ white };
  border-radius: 3px;
  padding: ${ ({ size = 3 }) => ( 3 * size + 'px ' + 5 * size + 'px' ) };
  font-size: ${ ({ size = 3 }) => (4 * size + 1 + 'px')  };
`;

export default Button;