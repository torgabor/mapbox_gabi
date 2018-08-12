import React, { Component } from 'react';

import ListElem from './ListElem'

import './App.css';



class Sidebar extends Component {

  render() {

    const { locations } = this.props;
    const { activeObj } = this.props

    const inactive = locations.filter(obj => obj.id !== activeObj)
    const active = locations.filter(obj => obj.id === activeObj)

  return (

    <aside className="sidebar">

      <select
        onChange={this.props.handleChange}
        value={'selector'}
        label='location-selector'

      >
        <option value=''>Select a location</option>
        {this.props.locations.map((location) => (

          <option
            value={location.id}
            key={location.id}
          >
            {location.place}
          </option>
       ))}
      </select>
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
