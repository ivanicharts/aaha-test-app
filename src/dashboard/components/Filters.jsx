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

        </form>
      </div>
    )
  }

}