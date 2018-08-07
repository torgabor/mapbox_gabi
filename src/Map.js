import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl';

// import Marker from './Marker';
import './App.css';

class Map extends Component {
  state = {
    locations: [
      {
        place: 'Moholy-Nagy University of Art and Design',
        lng: 18.9898,
        lat: 47.5171
      },
      {
        place: 'Mammut Shopping Centre',
        lng: 19.026,
        lat: 47.508
      },
      {
        place: 'Déli Pályaudvar',
        lng: 19.025,
        lat: 47.499
      }
      // {
      //   place: 'Millenaris Park',
      //   lng: 19.028,
      //   lat: 47.511
      // },
      // {
      //   place: 'MOM Park',
      //   lng: 19.026,
      //   lat: 47.491
      // }
      // {
      //   place: 'Moholy-Nagy University of Art and Design',
      //   coordinates: [18.9898, 47.5171]
      // },
      // {
      //   place: 'Mammut Shopping Centre',
      //   coordinates: [19.026, 47.508]
      // },
      // {
      //   place: 'Déli Pályaudvar',
      //   coordinates: [19.025, 47.499]
      // }
    ]
  };

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer, //The HTML element in which Mapbox GL JS will render the map
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [19.013, 47.49], // starting position
      zoom: 13.5 // starting zoom,
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    const lng0 = this.state.locations[0].lng;
    const lat0 = this.state.locations[0].lat;
    const lng1 = this.state.locations[1].lng;
    const lat1 = this.state.locations[1].lat;
    const lng2 = this.state.locations[2].lng;
    const lat2 = this.state.locations[2].lat;
    // const lng3 = this.state.locations[3].lng;
    // const lat3 = this.state.locations[3].lat;
    // const lng4 = this.state.locations[4].lng;
    // const lat4 = this.state.locations[4].lat;
    // const { lng0, lat0 } = this.state.locations[0].coordinates;
    // const { lng1, lat1 } = this.state.locations[1].coordinates;
    // const { lng2, lat2 } = this.state.locations[2].coordinates

    const marker0 = new mapboxgl.Marker()
      .setLngLat([lng0, lat0])
      .addTo(this.map);

    const marker1 = new mapboxgl.Marker()
      .setLngLat([lng1, lat1])
      .addTo(this.map);

    const marker2 = new mapboxgl.Marker()
      .setLngLat([lng2, lat2])
      .addTo(this.map);

    // marker0.setPopup(popup0)
    //
    // const { locations } = this.state.locations.coordinates
    //
    // this.map.on('click', 'locations', function (e) {
    //   var coordinates = e.features[0].geometry.coordinates.slice();
    //   var description = e.features[0].properties.place;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    //     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    // }

    //     new mapboxgl.Popup()
    //         .setLngLat(coordinates)
    //         .setHTML(description)
    //         .addTo(this.map);
    // });

    const markerHeight = 50,
      markerRadius = 10,
      linearOffset = 25;

    const popupOffsets = {
      top: [0, 0],
      'top-left': [0, 0],
      'top-right': [0, 0],
      bottom: [0, -markerHeight],
      'bottom-left': [
        linearOffset,
        (markerHeight - markerRadius + linearOffset) * -1
      ],
      'bottom-right': [
        -linearOffset,
        (markerHeight - markerRadius + linearOffset) * -1
      ],
      left: [markerRadius, (markerHeight - markerRadius) * -1],
      right: [-markerRadius, (markerHeight - markerRadius) * -1]
    };

    const popup0 = new mapboxgl.Popup({
      offset: popupOffsets,
      className: 'my-class'
    })
      .setLngLat([lng0, lat0])
      .setHTML('<h1>Hello World!</h1>')
      .addTo(this.map);
  }

  render() {
    const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken =
      'pk.eyJ1IjoiZ2FicmllbGxhaHUiLCJhIjoiY2praXNlaWkwMDRtazNsa2ZzdmRyZTViayJ9.vk8q9Nba8t3wx0xP1rml0g';

    return (
      <section className="map-container">
        <div id="map" ref={el => (this.mapContainer = el)} />
      </section>
    );
  }
}

export default Map;
