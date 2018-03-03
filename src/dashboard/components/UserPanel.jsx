import React from 'react';
import { FormControl, Input } from '../../components';

import DayPanel from './DayPanel';

const UserPanel = ({ fields, metrics, details: days = [], users }) => {

  console.log('days', days)
  const { name, avatar } = users[fields.identifier];

  return (
    <div className="block block-colored">
      <div className="user-info-group">
        <div className="metrics">
          <strong>{ name }</strong>
          <div>Bounce Rate: { metrics['bounce-rate'] }</div>
          <div>Hits: { metrics.hits }</div>
          <div>Sessions: { metrics.sessions }</div>
        </div>
        <div className="user-avatar">
          <img src={ avatar } alt=""/>
        </div>
      </div>
      <div className="top-articles">
        {
          days.map((day, index) => (
            <DayPanel index={index} { ...day } />
          ))
        }
      </div>
    </div>
  )
};

export default UserPanel;