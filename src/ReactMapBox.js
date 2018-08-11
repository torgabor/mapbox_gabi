import React, { Component } from 'react';

// import mapboxgl from 'mapbox-gl';

// React wrapper for mapbox-gl-js
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

import './App.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZ2FicmllbGxhaHUiLCJhIjoiY2praXNlaWkwMDRtazNsa2ZzdmRyZTViayJ9.vk8q9Nba8t3wx0xP1rml0g'
});

class MapBox extends Component {
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100%',
          width: '80%'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    );
  }
}

export default MapBox;
