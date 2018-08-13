import React, { Component } from 'react';

import ListElem from './ListElem'

import './App.css';



class Sidebar extends Component {

  render() {

    const { locations } = this.props;
    const { activeObj } = this.props

  return (

    <aside className="sidebar">

      <label for="location-select">Filter locations</label>
      <select
        id="location-select"
        name="location-selector"
        onChange={this.props.handleChange}
        value={'selector'}
      >
        <option value="" selected>Select an option</option>
        {this.props.locations.map((location) => (

          <option
            value={location.id}
            key={location.id}
          >
            {location.place}
          </option>
       ))}
      </select>
      <button
         name="reset"
         value="reset"
         onClick={this.props.resetFilter}
      >
         Reset Filter
      </button>
      <ol>
        {/* render all list items based on the locations state*/}
        {this.props.locations.map((location) => (
           <ListElem
             key={location.id}
             handleClick={this.props.handleClick}
             activeObj={this.props.activeObj}
             locations={location}
          />
         ))}
      </ol>

    </aside>
  )
 }
}


export default Sidebar;
