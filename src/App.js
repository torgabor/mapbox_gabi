import React, { Component } from 'react';

import Sidebar from './Sidebar';
import MapBox from './ReactMapBox';
import './App.css';

class App extends Component {

  state = {
    locations:
    [
     [18.9898, 47.5171],
     [19.026, 47.508],
     [19.025, 47.499],
     [19.028, 47.511],
     [19.028, 47.515],
   ]

  }


  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="app-title">Neighbourhood Map</h1>
        </header>
        <main className="main">
          <Sidebar />
          <MapBox locations={this.state.locations} />
        </main>
      </div>
    );
  }
}

export default App;
