import React from 'react';
import { FormControl, Input } from '../../components';

const UserPanel = ({ fields, metrics, details, users }) => {

  const { name, avatar } = users[fields.identifier]

  return (
    <div className="block block-colored">
      <h4>{ name }</h4>
      <div className="user-avatar">
        {/* <img src={ avatar } alt=""/> */}
      </div>
      <div className="metrics">
        <div>Bounce Rate: { metrics['bounce-rate'] }</div>
        <div>Hits: { metrics.hits }</div>
        <div>Sessions: { metrics.sessions }</div>
      </div>
      <div className="top-articles">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Article name</th>
              <th>BR</th>
              <th>Hits</th>
              <th>Sessions</th>
            </tr>
          </thead>
          <tbody>
            {
              details.map((detail, idx) => (
                <tr key={detail.key}>
                  <td>{ idx + 1 }</td>
                  { typeof JSON.stringify(detail.details[0]) }
                  {/* <td>{ detail.details[0].details[0].fields.title }</td> */}
                  {/* <td>{ detail.details[0].details[0].metrics['bounce-rate'] }</td>
                  <td>{ detail.details[0].details[0].metrics.hits }</td>
                  <td>{ detail.details[0].details[0].metrics.sessions }</td> */}
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default UserPanel;