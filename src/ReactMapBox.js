import React, { Component } from 'react';

// React wrapper for mapbox-gl-js
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import { Marker } from "react-mapbox-gl";
import MBPopup from './Popup';
import MBMarker from './Marker';

import './App.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZ2FicmllbGxhaHUiLCJhIjoiY2praXNlaWkwMDRtazNsa2ZzdmRyZTViayJ9.vk8q9Nba8t3wx0xP1rml0g'
});

class MapBox extends Component {
  render() {
    const { locations } = this.props;

    return (
      <section className="map-container">
        <Map
          key="map"
          id="map"
          style="mapbox://styles/mapbox/streets-v10"
          containerStyle={{
            height: '100%',
            width: '100%'
          }}
          center={[19.013, 47.49]} /*starting position of the map*/
          zoom={[13.5]} /*starting zoom of the map*/
          fitBounds={
            [18.934, 47.513][(19.102, 47.469)]
          } /*the map will center on the given coordinates*/
        >
        // RENDER ALL MARKERS AND POPUPS
        // index is also passed in, to give a unique key to each object
          {locations.map((location, index) => (
            <div className="marker-wrapper" id={`${index}`}>
              <MBMarker key={`marker${index}`} coordinates={location.lngLat} />
              <MBPopup key={`popup${index}`} locations={location} />
            </div>
          ))}
        </Map>
      </section>
    );
  }
}

export default MapBox;
