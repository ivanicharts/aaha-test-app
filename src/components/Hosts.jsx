import React from 'react';


const ReferrerHost = ({ data = []}) => (
  <div className="text-13">
    {
      data.map(({ key, value }) => (
        <div key={ key }><strong>{ key }: </strong> { value} </div>
      ))
    }
  </div>
);

export default ReferrerHost;