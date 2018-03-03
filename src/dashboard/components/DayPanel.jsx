import React from 'react';
// import { FormControl, Input } from '../../components';

import Article from './Article';

const DayPanel = ({ index, details: articles = [], metrics, ...props }) => {

  // const { name, avatar } = users[fields.identifier];
  // console.log('props', props)

  return (
    <div className=" block-day">
      <h4>Day { index + 1 }</h4>

      {
        articles.map(article => (
          <Article { ...article } />
        ))
      }
    </div>
  )
};

export default DayPanel;