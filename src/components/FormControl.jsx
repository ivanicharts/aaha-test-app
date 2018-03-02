import React from 'react';
import styled from 'react-emotion';

const FormControl = styled('div')`
  padding: 10px;
  border: 1px solid #2d2d2d;
`;

const Title = styled('div')`
  font-size: 16px;
`

const FormControlGroup = ({ title, children }) => (
  <FormControl>
    <Title>{ title }: </Title>
    { children }
  </FormControl>
);

export default FormControlGroup;