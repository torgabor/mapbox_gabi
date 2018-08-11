import React, { Component } from 'react';

import './App.css';

class Sidebar extends Component {

  state = {
    listColor: 'white'
  };


  handleChange = event => {
    this.setState({listColor: 'red'})
  };


  render() {
    const { locations } = this.props;

    return (
      <aside className="sidebar">
        <ol>
          {locations.map((location, index) => (
            <li
              key={`option${index}`}
              id={`option${index}`}
              onChange={this.handleChange}
            >
              {`${location.place}`}
            </li>
          ))}
        </ol>
      </aside>
    );
  }
}

export default Sidebar;
