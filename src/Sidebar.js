import React, { Component } from 'react';

import './App.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="location-sidebar">
        <ol>
          <li>Location1</li>
          <li>Location2</li>
          <li>Location3</li>
        </ol>
      </aside>
    );
  }
}

export default Sidebar;
