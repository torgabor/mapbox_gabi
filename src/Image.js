import React, { Component } from "react";


const API = 'https://api.unsplash.com/photos/?client_id=dddf912b3e4b9693384e1752b4aafb1311290a136c54a184eda7f717a5724b18';
const DEFAULT_QUERY = 'budapest';

class Image extends Component {

  state = {
    images: [],
  };


  componentDidMount() {

    fetch(API)
        .then(response => response.json())
        .then(data => this.setState({images: data}))
        .catch(error => console.log(error))
    }


  render(){

  const { images } = this.state

    return(

      <section>
      {images.map(images => (
        <figure>
          <img
            key={images.id}
            className="unpsplash-img"
            src={images.urls.small}
            alt="Unsplash picture of Budapest"
          />
          <figcaption>Budapest by {images.user.name}</figcaption>
        </figure>))}
      </section>
    )
  }
}

export default Image
