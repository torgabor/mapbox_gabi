import React, { Component } from 'react';

import Map from './Map';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="App-title">Neighbourhood Map</h1>
        </header>
        <main className="main">
          <aside className="location-sidebar">
            <ol>
              <li>Location1</li>
              <li>Location2</li>
              <li>Location3</li>
            </ol>
          </aside>

          <Map />
        </main>
      </div>
    );
  }
}

export default App;
