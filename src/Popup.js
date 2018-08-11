import React, { Component } from 'react';

import ReactMapboxGl, { Popup } from 'react-mapbox-gl';

class MBPopup extends Component {

  render() {

    return(
      <Popup
        coordinates={this.props.locations.lngLat}
        offset={{
          "bottom-left": [12, -38],
          "bottom": [0, -38],
          "bottom-right": [-12, -38]
        }}
        >
        <h1>{this.props.locations.place}</h1>
      </Popup>
  );

  }
}


export default MBPopup
