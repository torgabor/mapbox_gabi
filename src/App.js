import React, { Component } from "react";

import Sidebar from "./Sidebar";
import MapBox from "./ReactMapBox";
import "./App.css";


class App extends Component {
  // locations: an array of location objects, that is passed down to the Sidebar and MapBox Components
  // activeObj: the currently active location object
  // filteredObj: the object defined by the dropdown menu filter
  state = {
    locations: [
      {
        id: "0",
        place: "Déli Pályaudvar",
        address: "Budapest",
        lngLat: [19.025, 47.499]
      },
      {
        id: "1",
        place: "Millenaris Park",
        address: "Budapest",
        lngLat: [19.028, 47.511]
      },
      {
        id: "2",
        place: "MOM Park",
        address: "Budapest",
        lngLat: [19.026, 47.508]
      },
      {
        id: "3",
        place: "Mammut Shopping Centre",
        address: "2-6 Lövőház Street, Budapest, 1024",
        lngLat: [19.028, 47.515]
      },
      {
        id: "4",
        place: "Moholy-Nagy University of Art and Design",
        address: "Budapest",
        lngLat: [18.9898, 47.5171]
      }
    ],

    activeObj: "",
    filteredObj: [],
  };s


  //function applied to markers that sets the id for the active location object
  //the markers can only be activated, when no filtering is applied
  handleClick = e => {
    const value = e.target.id;
    if (this.state.filteredObj.length === 0) {
      this.setState({ activeObj: value });
    }
  };

  //function that filters the locations based on the dropdown menu selection
  handleChange = e => {
    const value = e.target.value;
    const filteredObj = this.state.locations[value];
    this.setState({ activeObj: value });
    this.setState({ filteredObj: [filteredObj] });
  };

  //function that resets filtering, when the button is clicked
  resetFilter = e => {
    this.setState({ filteredObj: [] });
  };

  //function that removes the active popup, when it is clicked
  //the function works only when no filtering is applied
  //closing the popup resets the active location
  removePopup = () => {
    if (this.state.filteredObj.length === 0) {
      this.setState({ activeObj: "" });
    }
  };

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
            filteredObj={this.state.filteredObj}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            resetFilter={this.resetFilter}
            pictures={this.state.pictures}
          />
          <MapBox
            locations={this.state.locations}
            activeObj={this.state.activeObj}
            filteredObj={this.state.filteredObj}
            handleClick={this.handleClick}
            removePopup={this.removePopup}
          />
        </main>
      </div>
    );
  }
}

export default App;
