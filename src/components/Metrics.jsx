import React from 'react';
import styled from 'react-emotion';

const MetricGroup = styled('div')`
  display: ${ ({ inline }) => inline ? 'flex' : 'block' };
`;

const Metrics = ({ hits, sessions, inline = false, ...props }) => (
  <MetricGroup className="text-13" inline={ inline }>
    <div>Bounce Rate: { props['bounce-rate'] }</div>
    <div>Hits: { hits }</div>
    <div>Sessions: { sessions }</div>
  </MetricGroup>
);

export default Metrics;