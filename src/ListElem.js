import React, { Component } from 'react';

import './App.css';


function ListElem (props) {


    return (
            <li
              className="active-li"
              key={props.locations.id}
              id={props.locations.id}
              onClick={props.handleClick}
            >
              {props.locations.place}
            </li>
          )
}

export default ListElem;
