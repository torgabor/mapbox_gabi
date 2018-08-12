import React, { Component } from 'react';

import ReactMapboxGl, { Popup } from 'react-mapbox-gl';

function MBPopup (props) {

    return (
      <Popup
        coordinates={props.locations.lngLat}
        offset={{
          'bottom-left': [12, -38],
          'bottom': [0, -58],
          'bottom-right': [-12, -38]
        }}
      >
        <h1>{props.locations.place}</h1>
        <p>{props.locations.address}</p>
      </Popup>
    );

  }


export default MBPopup;
