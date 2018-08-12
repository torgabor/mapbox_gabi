import React, { Component } from 'react';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MarkerImg from './images/map-marker-alt-solid.svg';


function MBMarkerActive (props) {

    return (
      <Marker
        key={props.location.id}
        onClick={props.handleClick}
        value={props.location.id}
        className="marker"
        coordinates={props.location.lngLat}
        anchor="bottom"
      >
        <img
         id={props.location.id}
         src={MarkerImg} />
      </Marker>
    );

}

export default MBMarkerActive;
