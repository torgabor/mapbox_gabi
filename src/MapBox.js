import React, { Component } from 'react';

import mapboxgl from 'mapbox-gl';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

// import Marker from './Marker';
import './App.css';

class Map extends Component {
  state = {

   //  geojson: {
   //    type: 'FeatureCollection',
   //    features: [{
   //        type: 'Feature',
   //        geometry: {
   //          type: 'Point',
   //          coordinates: [18.9898, 47.5171]
   //        },
   //        properties: {
   //          title: 'Mapbox',
   //          description: 'Moholy-Nagy University of Art and Design'
   //        }
   //      },
   //      {
   //        type: 'Feature',
   //        geometry: {
   //          type: 'Point',
   //          coordinates: [19.026, 47.508]
   //        },
   //        properties: {
   //          title: 'Mapbox',
   //          description: 'Mammut Shopping Centre'
   //        }
   //      }]
   //    }
   //
   // }

    locations: [
      {
        place: 'Déli Pályaudvar',
        lng: 19.025,
        lat: 47.499
      },
      {
        place: 'Millenaris Park',
        lng: 19.028,
        lat: 47.511
      },
      {
        place: 'MOM Park',
        lng: 19.026,
        lat: 47.491
      },
      {
        place: 'Moholy-Nagy University of Art and Design',
        coordinates: [18.9898, 47.5171]
      },
      {
        place: 'Mammut Shopping Centre',
        coordinates: [19.026, 47.508]
      },
      {
        place: 'Déli Pályaudvar',
        coordinates: [19.025, 47.499]
      }
    ]
  };

  const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiZ2FicmllbGxhaHUiLCJhIjoiY2praXNlaWkwMDRtazNsa2ZzdmRyZTViayJ9.vk8q9Nba8t3wx0xP1rml0g'
});

    this.map.addControl(new mapboxgl.NavigationControl());


    // const marker0 = new mapboxgl.Marker()
    //   .setLngLat([lng0, lat0])
    //   .addTo(this.map);
    //
    // const marker1 = new mapboxgl.Marker()
    //   .setLngLat([lng1, lat1])
    //   .addTo(this.map);
    //
    // const marker2 = new mapboxgl.Marker()
    //   .setLngLat([lng2, lat2])
    //   .addTo(this.map);

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

    // const markerHeight = 50,
    //   markerRadius = 10,
    //   linearOffset = 25;
    //
    // const popupOffsets = {
    //   top: [0, 0],
    //   'top-left': [0, 0],
    //   'top-right': [0, 0],
    //   bottom: [0, -markerHeight],
    //   'bottom-left': [
    //     linearOffset,
    //     (markerHeight - markerRadius + linearOffset) * -1
    //   ],
    //   'bottom-right': [
    //     -linearOffset,
    //     (markerHeight - markerRadius + linearOffset) * -1
    //   ],
    //   left: [markerRadius, (markerHeight - markerRadius) * -1],
    //   right: [-markerRadius, (markerHeight - markerRadius) * -1]
    // };

    // const popup0 = new mapboxgl.Popup({
    //   offset: popupOffsets,
    //   className: 'my-class'
    // })
    //   .setLngLat([lng0, lat0])
    //   .setHTML('<h1>Hello World!</h1>')
    //   .addTo(this.map);

  // }
