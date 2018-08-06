import React, { Component } from 'react';

import './App.css';


class Map extends Component {
  render() {
    return (
      <section className="map-container">
        <h2 className="hidden">Neighbourhood Map</h2>
        <div id="map" role="application" aria-label="map area"></div>
      </section>
    )
  }
}

export default Map
