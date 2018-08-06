import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import './App.css';

class Map extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [19.042592, 47.498138], // starting position
      zoom: 14 // starting zoom
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }

  render() {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken =
      'pk.eyJ1IjoiZ2FicmllbGxhaHUiLCJhIjoiY2praXNlaWkwMDRtazNsa2ZzdmRyZTViayJ9.vk8q9Nba8t3wx0xP1rml0g';

    return <div id="map" ref={el => (this.mapContainer = el)} />;
  }
}

export default Map;
