import React from 'react';
// import { FormControl, Input } from '../../components';


const ArticlePanel = ({ fields: article, metrics, ...props }) => {

  // const { name, avatar } = users[fields.identifier];
  console.log('props', article, metrics)

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
          <div>Bounce Rate: { metrics['bounce-rate'] }</div>
          <div>Hits: { metrics.hits }</div>
          <div>Sessions: { metrics.sessions }</div>
        </div>
      </div>
      <div>
        chart
      </div>
    </div>
  )
};

export default ArticlePanel;