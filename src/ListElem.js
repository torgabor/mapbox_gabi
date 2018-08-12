import React, { Component } from 'react';

import './App.css';


function ListElem (props) {

    return (
            <li
              key={props.locations.id}
              id={props.locations.id}
              onChange={props.handleChange}
            >
              {props.locations.place}
            </li>
          )
}

export default ListElem;
