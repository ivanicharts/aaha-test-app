import React, { PureComponent } from 'react';

import Article from './Article';
import Metrics from '../../components/Metrics';
import Hosts from '../../components/Hosts';
import CircleGraph from '../../components/CircleGraph';

class DayPanel extends PureComponent {

  state = { visible: false };

  toggleVisibility = () => this.setState(({ visible: prevVisible }) => ({ visible: !prevVisible }))

  render() {
    const { index, details: articles = [], metrics, fields, ...props } = this.props;
    const { visible } = this.state;
    const referrer = fields['referrer.host'];

    return (
      <div className="block-day">
        <h4 className="cursor-pointer" onClick={ this.toggleVisibility }>
          Day { index + 1 } { visible ? '-' : '+' }
        </h4>
        
        <div className="metrics-group">
        
          <div>
            <p><strong className="text-underline">Metrics: </strong></p>
            <Metrics { ...metrics } />
            <p><strong className="text-underline">Referrer host:</strong></p>
            <Hosts data = { referrer } />
          </div>

          <div>
            <CircleGraph data={ referrer } /> 
          </div>

        </div>

        {
          visible && articles.map(article => (
            <Article { ...article } />
          ))
        }

        <div className="cursor-pointer text-center text-bold" onClick={ this.toggleVisibility }>
          { visible ? 'Hide' : 'Show' } articles
        </div>
      </div>
    )
  }
}

export default DayPanel;