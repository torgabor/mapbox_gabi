import React, { Component } from 'react';

import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import markerImg from './images/map-marker-alt-solid.svg';
import markerImgActive from './images/map-marker-alt-solid-active.svg';


class MBMarker extends Component {

  //a temporary solution for managing the state of the active marker
  //the source of the marker image is changing based on this state
  state = {
    markerColor: markerImg
  };

  handleChange = event => {
    if (this.state.markerColor === markerImg) {
      this.setState({ markerColor: markerImgActive });
    } else {
      this.setState({ markerColor: markerImg });
    }
  };

  render() {
    return (
      <Marker
        className="marker"
        onClick={this.handleChange}
        coordinates={this.props.coordinates}
        anchor="bottom"
      >
        <img src={this.state.markerColor} />
      </Marker>
    );
  }
}

export default MBMarker;
