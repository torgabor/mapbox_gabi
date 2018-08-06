import React, { Component } from 'react';

// import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import Marker from './Marker';
import './App.css';

class Map extends Component {
  state = {
    locations: [
      {
        place: 'Moholy-Nagy University of Art and Design',
        lng: 18.9898,
        lat: 47.5171
      }
    ]
  };

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [19.042592, 47.498138], // starting position
      zoom: 12 // starting zoom
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    const lng0 = this.state.locations[0].lng;
    const lat0 = this.state.locations[0].lat;

    const marker = new mapboxgl.Marker()
      .setLngLat([lng0, lat0])
      .addTo(this.map);

    const markerHeight = 50,
      markerRadius = 10,
      linearOffset = 25;
    const popupOffsets = {
      top: [0, 0],
      'top-left': [0, 0],
      'top-right': [0, 0],
      bottom: [0, -markerHeight],
      'bottom-left': [
        linearOffset,
        (markerHeight - markerRadius + linearOffset) * -1
      ],
      'bottom-right': [
        -linearOffset,
        (markerHeight - markerRadius + linearOffset) * -1
      ],
      left: [markerRadius, (markerHeight - markerRadius) * -1],
      right: [-markerRadius, (markerHeight - markerRadius) * -1]
    };

    const popup = new mapboxgl.Popup({
      offset: popupOffsets,
      className: 'my-class'
    })
      .setLngLat([19.042592, 47.498138])
      .setHTML('<h1>Hello World!</h1>')
      .addTo(this.map);
  }

  render() {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken =
      'pk.eyJ1IjoiZ2FicmllbGxhaHUiLCJhIjoiY2praXNlaWkwMDRtazNsa2ZzdmRyZTViayJ9.vk8q9Nba8t3wx0xP1rml0g';

    return (
      <section className="map-container">
        <Marker map={this.map} />
        <div id="map" ref={el => (this.mapContainer = el)} />
      </section>
    );
  }
}

export default Map;
