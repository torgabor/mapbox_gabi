import React, { Component } from 'react';

// React wrapper for mapbox-gl-js
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import { Marker } from "react-mapbox-gl";
import MBPopup from './Popup';
import MBMarker from './Marker';
import MBMarkerActive from './MarkerActive';

import './App.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZ2FicmllbGxhaHUiLCJhIjoiY2praXNlaWkwMDRtazNsa2ZzdmRyZTViayJ9.vk8q9Nba8t3wx0xP1rml0g'
});



class MapBox extends Component {


  render() {

    const { locations } = this.props;
    const { activeObj } = this.props

    const inactive = locations.filter(obj => obj.id !== activeObj)
    const active = locations.filter(obj => obj.id === activeObj)

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
          {active.map((location) => (
            <MBPopup
              key={location.id}
              locations={location} />
          ))}
          {inactive.map((location) => (
              <MBMarker
                key={location.id}
                coordinates={location.lngLat} />
          ))}
          {active.map((location) => (
              <MBMarkerActive
                key={location.id}
                coordinates={location.lngLat} />
          ))}


        </Map>
      </section>
    );
  }
}

export default MapBox;
