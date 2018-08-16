import React, { Component } from 'react';

import './App.css';

class ListElem extends Component {
  render() {
    //conditional rendering of the sidebar list items
    //the condition matches the rendered location object's id with the currently active object in the state of App.js
    let isActive = false;
    if (this.props.locations.id === this.props.activeObj) {
      isActive = true;
    }
    const handleClickEvt = e => {
      this.props.handleClick(e, this.props.id);
    };
    return isActive ? (
      <li
        className="active-li"
        key={this.props.locations.id}
        onClick={handleClickEvt}
      >
        {this.props.locations.place}
      </li>
    ) : (
      <li
        className="inactive-li"
        key={this.props.locations.id}
        onClick={handleClickEvt}
      >
        {this.props.locations.place}
      </li>
    );
  }
}

export default ListElem;
