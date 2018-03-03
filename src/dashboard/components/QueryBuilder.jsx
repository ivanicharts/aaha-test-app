import React, { PureComponent } from 'react';
import FilterSchema from '../filter-schema';

import { Button } from '../../components';
import { removeSpaces, mapObjectToQueryString } from '../../shared/helpers'

export default class Filters extends PureComponent {

  onSubmtin = (e) => {
    e.preventDefault();

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
    
    console.log(fields, query); 
  }

  render() {
    return (
      <div className="block">
        <h3>Query builder: </h3>

        <form className="form-group" ref={ (ref) => this.form = ref } onSubmit={ this.onSubmtin }>
          {
            FilterSchema.map(({ component, ...props }) => (
              <div>
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