import React, { PureComponent } from 'react';

import DayPanel from './DayPanel';
import Metrics from '../../components/Metrics';
import Hosts from '../../components/Hosts';
import CircleGraph from '../../components/CircleGraph';

class UserPanel extends PureComponent {

  state = { visible: false };
  toggleVisibility = () => this.setState(({ visible: prevVisible }) => ({ visible: !prevVisible }));

  render() {
    const { fields, metrics, details: days = [], users } = this.props;
    const { name, avatar } = users[fields.identifier];
    const { visible } = this.state;
    const referrer = fields['referrer.host'];
    
    return (
      <div className="block block-colored">
        <div className="user-info-group">
          <div className="metrics">
            <h3>{ name }</h3>
            <p>Metrics:</p> 
            <Metrics { ...metrics } />
            <p>Referrer host:</p>
            <Hosts data={ referrer } />
          </div>
          <div className="user-avatar-group text-right">
            <div className="user-avatar">
              <img src={ avatar } alt=""/>
            </div>
            <CircleGraph data={ referrer } size={1.5} />
          </div>
        </div>
        <div className="top-articles">
          <h4 onClick={ this.toggleVisibility } className="text-center cursor-pointer text-underline">
            { visible ? 'Hide' : 'Show' } Daily Statistics
          </h4>
          {
            visible && days.map((day, index) => (
              <DayPanel index={index} { ...day } />
            ))
          }
        </div>
      </div>
    )
  }
}

export default UserPanel;