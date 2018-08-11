import React, { Component } from 'react';

import ReactMapboxGl, { Marker} from 'react-mapbox-gl';

class MBMarker extends Component {

  render() {

    return(

    <Marker
      coordinates={this.props.coordinates}
      className="marker"
      anchor="bottom">
      <img src={"https://image.flaticon.com/icons/svg/33/33622.svg"}/>
    </Marker>

  );

  }
}



export default MBMarker
