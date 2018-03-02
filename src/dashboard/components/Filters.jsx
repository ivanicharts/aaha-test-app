import React, { PureComponent } from 'react';
import FilterSchema from '../filter-schema';


export default class Filters extends PureComponent {


  componentDidMount() {
    console.log(this.form)
  }

  onSubmtin = (e) => {
    e.preventDefault();

    const fields = Array.from(this.form)
        .reduce((acc, { name, value }) => {
          
          name in acc 
            ? acc[name] += String(value).trim() 
            : acc[name] = String(value).trim();
          
          return acc;
        
        }, {});
    
    const query = Object.entries(fields)
        .map(e => e.join(''))
        .join('&');
    
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

          <button>Search</button>
        </form>
      </div>
    )
  }

}