import React, { Component } from 'react';

import Sidebar from './Sidebar';
import MapBox from './ReactMapBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Neighbourhood Map</h1>
        </header>
        <main className="main">
          <Sidebar />
          <MapBox />
        </main>
      </div>
    );
  }
}

export default App;
