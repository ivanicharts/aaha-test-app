import React from 'react';
import styled from 'react-emotion';

const FormControl = styled('div')`
  padding: 10px;
  // border-bottom: 1px dotted #ccc;
`;

const Title = styled('div')`
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 15px;
`

const FormControlGroup = ({ title, children }) => (
  <FormControl>
    <Title>{ title }: </Title>
    { children }
  </FormControl>
);

export default FormControlGroup;