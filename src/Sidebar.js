import React, { Component } from 'react';

import './App.css';

class Sidebar extends Component {

  //this state is temporary
  state = {
    listColor: 'white'
  };

  //this method is temporary
  handleChange = event => {
    this.setState({listColor: 'red'})
  };


  render() {
    const { locations } = this.props;

    return (
      <aside className="sidebar">
        <ol>
          {/* render all list items based on the locations state
           index is also passed in, to give a unique key to each object*/}
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
