import React, { PureComponent } from 'react';
import FilterSchema from '../filter-schema';


export default class Filters extends PureComponent {


  componentDidMount() {
    console.log(this.form)
  }

  render() {
    return (
      <div className="block">
        <h3>Query builder: </h3>

        <form ref={ (ref) => this.form = ref }>
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
        </form>
      </div>
    )
  }

}