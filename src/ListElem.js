import React, { Component } from 'react';

import './App.css';


class ListElem extends Component {


  render() {

    let isActive = false
    if (this.props.locations.id === this.props.activeObj) {
      isActive = true
    }

    return (
          <div>
          {isActive ? (
            <li
              className="active-li"
              key={this.props.locations.id}
              id={this.props.locations.id}
              onClick={this.props.handleClick}
            >
              {this.props.locations.place}
            </li>
          ) : (
            <li
              className="inactive-li"
              key={this.props.locations.id}
              id={this.props.locations.id}
              onClick={this.props.handleClick}
            >
              {this.props.locations.place}
            </li>
          )}
          </div>
          )
}
}

export default ListElem;
