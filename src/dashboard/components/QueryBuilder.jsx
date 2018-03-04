import React, { PureComponent } from 'react';
import FilterSchema from '../filter-schema';

import { Button } from '../../components';
import { mapObjectToQueryString } from '../../shared/helpers'

export default class QueryBuilder extends PureComponent {

  onSubmtin = (e) => {
    e.preventDefault();

    const API_URL = 'https://example.com/stats/';

    const fields = Array.from(this.form)
      .reduce((acc, { name, value, dataset: { parent } }) => {
        if (parent) {
          parent in acc
            ? name in acc[parent] ? acc[parent][name] += value : acc[parent][name] = value
            : acc[parent] = { [name]: value };
        } else {
          name in acc 
            ? acc[name] += String(value).trim() 
            : acc[name] = String(value).trim();
        }
        return acc;
      }, {});

    const query = mapObjectToQueryString(fields, '&', '=');
    
    // conole.log for task
    console.log(fields, API_URL + query); 
  }

  render() {
    return (
      <div className="block">
        <h3>Query builder: </h3>

        <form className="form-group" ref={ (ref) => this.form = ref } onSubmit={ this.onSubmtin }>
          {
            FilterSchema.map(({ component, ...props }) => (
              <div key={ props.label }>
                { 
                  typeof component === 'function' 
                    ? component(props) 
                    : props.label
                }
              </div>
            ))
          }

          <div className="form-submit-group">
            <Button size={3}>Search</Button>
          </div>
        </form>
      </div>
    )
  }

}