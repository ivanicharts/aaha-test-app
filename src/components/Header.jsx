import React from 'react';
import styled from 'react-emotion';

import { gray, alizarin, textGray } from '../shared/colors';

const Header = styled('header')`
  padding: 20px;
  border-bottom: 1px solid ${ gray };
  border-top: 4px solid ${ alizarin };
  text-transform: uppercase;
  color: ${ textGray };
`;

const HeaderComponent = () => (
  <Header className='text-13'>
    Easy <strong>dashboard</strong>
  </Header>
);

export default HeaderComponent;