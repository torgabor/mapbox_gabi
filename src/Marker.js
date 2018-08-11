import React, { Component } from 'react';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';

import './App.css';

class Marker extends Component {

  render() {
    return (

      <Marker
        key="marker-1"
        coordinates={[19.026, 47.508]}
        className="marker"
        anchor="bottom"
      >
        <img src="marker.png">
      </Marker>

    );
  }


}

export default Marker
