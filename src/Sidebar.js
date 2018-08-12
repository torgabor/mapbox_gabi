import React, { Component } from 'react';

import './App.css';

function Sidebar (props) {

    return (
      <aside className="sidebar">
        <ol>
          {/* render all list items based on the locations state*/}
          {props.locations.map((location) => (
            <li
              key={location.id}
              id={location.id}
            >
              {location.place}
            </li>
          ))}
        </ol>
      </aside>
    );
  }


export default Sidebar;
