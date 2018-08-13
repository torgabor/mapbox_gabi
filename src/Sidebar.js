import React, { Component } from 'react';

import ListElem from './ListElem'

import './App.css';



class Sidebar extends Component {

  render() {

    const { locations } = this.props;
    const { activeObj } = this.props
    const { filteredObj } = this.props

    let isFiltered = false
    if (filteredObj.length > 0) {
      isFiltered = true
    }

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
        {isFiltered ? (
          filteredObj.map((location) => (
            <ListElem
              key={location.id}
              handleClick={this.props.handleClick}
              activeObj={this.props.activeObj}
              locations={location}
            />
          ))
        ) : (
         locations.map((location) => (
           <ListElem
             key={location.id}
             handleClick={this.props.handleClick}
             activeObj={this.props.activeObj}
             locations={location}
          />
        )))
       }
      </ol>
    </aside>

  )
 }
}


export default Sidebar;
