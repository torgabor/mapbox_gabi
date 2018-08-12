import React, { Component } from 'react';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MarkerImgActive from './images/map-marker-alt-solid-active.svg';


function MBMarkerActive(props) {

    return (
      <Marker
        className="marker"
        coordinates={props.coordinates}
        anchor="bottom"
      >
        <img src={MarkerImgActive} />
      </Marker>
    );

}

export default MBMarkerActive;
