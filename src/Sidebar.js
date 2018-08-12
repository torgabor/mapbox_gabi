import React, { Component } from 'react';

import ListElem from './ListElem'

import './App.css';



function Sidebar (props) {

  return (

    <aside className="sidebar">

      <select
        onChange={props.handleChange}
        value={'selector'}
        label='location-selector'

      >
        <option value=''>Select a location</option>
        {props.locations.map((location) => (

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
        {props.locations.map((location) => (
           <ListElem
             locations={location}
          />
         ))}
      </ol>

    </aside>
  )

}


export default Sidebar;
