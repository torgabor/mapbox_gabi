import React, { Component } from "react";

import ListElem from "./ListElem";
import Image from './Image'

import "./App.css";


class Sidebar extends Component {
  render() {
    const { locations } = this.props;
    const { activeObj } = this.props;
    const { filteredObj } = this.props;

    let isFiltered = false;
    if (filteredObj.length > 0) {
      isFiltered = true;
    }

    return (
      <aside className="sidebar">
        <Image pictures = {this.props.pictures} />
        <section
          className='location-selector'>
          <label for="location-select">Filter locations</label>
          <select
            id="location-select"
            name="location-selector"
            onChange={this.props.handleChange}
            value={"selector"}
          >
            <option value="" selected>
              Select an option
            </option>
            {this.props.locations.map(location => (
              <option value={location.id} key={location.id}>
                {location.place}
              </option>
            ))}
          </select>
        <button
           className="reset"
           type="reset"
           name="reset"
           value="reset"
           onClick={this.props.resetFilter}>
          Reset Filter
        </button>
        </section>
        <section
          className="locations">
          {isFiltered
            ? filteredObj.map(location => (
                <ListElem
                  key={location.handleSele}
                  handleClick={this.props.handleClick}
                  activeObj={this.props.activeObj}
                  locations={location}
                />
              ))
            : locations.map(location => (
                <ListElem
                  key={location.handleSele}
                  handleClick={this.props.handleClick}
                  activeObj={this.props.activeObj}
                  locations={location}
                />
              ))}
        </section>
      </aside>
    );
  }
}

export default Sidebar;
