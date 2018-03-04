import React from 'react';

import CircleGraph from '../../components/CircleGraph';
import Metrics from '../../components/Metrics';
import Hosts from '../../components/Hosts';

const ArticlePanel = ({ fields: article, metrics, ...props }) => {
  const referrers = article['referrer.host'];

  return (
    <div className="block-article">
      <div>
        <div>
          <strong className="text-underline">{ article.title }</strong> 
          <span className="muted text-italic text-13">
            ({ (new Date(article.published).toLocaleDateString('arab')) })
          </span>
        </div>
        <div className="text-13">
          <p><strong className="text-underline">Metrics: </strong></p>
          <Metrics { ...metrics } />
        </div>
        <div className="referrer-host">
          <p className="text-underline"><strong>Referrer host:</strong></p>
          <Hosts data = { referrers }/>
        </div>
      </div>
      <div>
        <CircleGraph data={ referrers } />
      </div>
    </div>
  );
};

export default ArticlePanel;