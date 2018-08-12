import React, { Component } from 'react';

import './App.css';


function Sidebar (props) {

  return (

    <aside className="sidebar">

      <select
        onChange={props.handleChange}
        value={'selector'}
      >
        {props.locations.map((location) => (
          <option
            value={location.id}
            key={location.id}
            id={location.id}
          >
            {location.place}
          </option>
       ))}
      </select>

    </aside>
  )

}


export default Sidebar;
