import React, { Component } from 'react';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MarkerImg from './images/map-marker-alt-solid.svg';
import MarkerImgActive from './images/map-marker-alt-solid-active.svg';


function MBMarker(props) {

    return (
      <Marker
        className="marker"
        coordinates={props.coordinates}
        anchor="bottom"
      >
        <img src={MarkerImg} />
      </Marker>
    );

}

export default MBMarker;
