import React, { Component } from 'react';

import Sidebar from './Sidebar';
import MapBox from './ReactMapBox';
import './App.css';

class App extends Component {

  state = {
    locations:
    [
     {
       place: 'Déli Pályaudvar',
       address: 'Budapest',
       lngLat: [19.025, 47.499]
     },
     {
       place: 'Millenaris Park',
       address: 'Budapest',
       lngLat: [19.028, 47.511]
     },
     {
       place:'MOM Park',
       address: 'Budapest',
       lngLat: [19.026, 47.508]
     },
     {
       place:'Mammut Shopping Centre',
       address: 'Budapest',
       lngLat: [19.028, 47.515]
     },
     {
       place:'Moholy-Nagy University of Art and Design',
       address: 'Budapest',
       lngLat: [18.9898, 47.5171]
     }
   ]
  }


  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="app-title">Neighbourhood Map</h1>
        </header>
        <main className="main">
          <Sidebar locations={this.state.locations} />
          <MapBox locations={this.state.locations} />
        </main>
      </div>
    );
  }
}

export default App;
