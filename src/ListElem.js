import React, { Component } from "react";

import "./App.css";

class ListElem extends Component {
  render() {

    //conditional rendering of the sidebar list items
    //the condition matches the rendered location object's id with the currently active object in the state of App.js
    let isActive = false;
    if (this.props.locations.id === this.props.activeObj) {
      isActive = true;
    }

    return (
      <ul
        className="menu">
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
      </ul>
    );
  }
}

export default ListElem;
