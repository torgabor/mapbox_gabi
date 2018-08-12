import React, { Component } from 'react';

import ListElem from './ListElem'

import './App.css';

function Sidebar (props) {

    return (
      <aside className="sidebar">
        <ol>
          {/* render all list items based on the locations state*/}
          {props.locations.map((location) => (
             <ListElem
               locations={location}
               handleChange={props.handleChange}
              />
          ))}
        </ol>
      </aside>
    );
  }


export default Sidebar;
