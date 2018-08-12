import React, { Component } from 'react';

import Sidebar from './Sidebar';
import MapBox from './ReactMapBox';
import './App.css';

class App extends Component {

  // locations: an array of location objects, that is passed down to the Sidebar and MapBox Components
  // activeObj: the currently active location object
  state = {
    filteredObj: [],
    locations: [
      {
        id: '0',
        place: 'Déli Pályaudvar',
        address: 'Budapest',
        lngLat: [19.025, 47.499]
      },
      {
        id: '1',
        place: 'Millenaris Park',
        address: 'Budapest',
        lngLat: [19.028, 47.511]
      },
      {
        id: '2',
        place: 'MOM Park',
        address: 'Budapest',
        lngLat: [19.026, 47.508]
      },
      {
        id: '3',
        place: 'Mammut Shopping Centre',
        address: '2-6 Lövőház Street, Budapest, 1024',
        lngLat: [19.028, 47.515]
      },
      {
        id: '4',
        place: 'Moholy-Nagy University of Art and Design',
        address: 'Budapest',
        lngLat: [18.9898, 47.5171]
      }
    ],

    activeObj: ''
  };

  handleClick = (e) => {
    const value =e.target.id
    this.setState({activeObj: value})
    this.setState({filteredObj: []})
  }

  handleChange= (e) => {
    const value = e.target.value
    this.setState({activeObj: value})
    const filteredObj = this.state.locations[value]
    this.setState({filteredObj: filteredObj})
  }

  removePopup = () => {
    this.setState({activeObj: ''})
    this.setState({filteredObj: []})
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="app-title">Neighbourhood Map</h1>
        </header>
        <main className="main">
          <Sidebar
            locations={this.state.locations}
            activeObj={this.state.activeObj}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />
          <MapBox
            locations={this.state.locations}
            activeObj={this.state.activeObj}
            handleClick={this.handleClick}
            removePopup={this.removePopup}
            />
        </main>
      </div>
    );
  }
}

export default App;
