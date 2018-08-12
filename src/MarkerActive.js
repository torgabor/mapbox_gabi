import React, { Component } from 'react';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import MarkerImgActive from './images/map-marker-alt-solid-active.svg';


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
         src={MarkerImgActive} />
      </Marker>
    );

}

export default MBMarkerActive;
