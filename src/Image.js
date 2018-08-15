import React, { Component } from "react";

// Unsplash API
const API =
  "https://api.unsplash.com/photos/search?client_id=dddf912b3e4b9693384e1752b4aafb1311290a136c54a184eda7f717a5724b18&query=gourmet/400x300";


class Image extends Component {

  state = {
    images: [],
    randomIndex: ''
  };

  componentDidMount() {
    //get food images from Unsplash, and set the state
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ images: data }))
      .catch(error => console.log(error));

    const randomIndex = this.getRandomIntInclusive(1, 9)
    this.setState({randomIndex})
  }

  //funtcion that generates a random value
  getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }


  render() {

    const { images } = this.state
    const { randomIndex } = this.state
    //get a random food image from the state

    const randomImg = images.slice(randomIndex - 1, randomIndex)

    //error handling, in case there are no images to render
    let isErrorFree = false;
    if (randomImg.length > 0) {
      isErrorFree = true;
    }

    return (
      <article className="appetizer">
        <h2
          className="appetizer-title">
          Daily appetizer
        </h2>

        {isErrorFree ? (
          randomImg.map(image => (
            <figure
              className="appetizer-img">
              <figcaption
                className="appetizer-owner">
                  Photo by {image.user.name}
              </figcaption>
              <a href={image.urls.regular}>
                <img
                  key={image.id}
                  className="unpsplash-img"
                  src={image.urls.small}
                  alt={image.description}
                />
              </a>
            </figure>
          ))
        ) : (
          <p className="error">
            Sorry, we could not download this image for you.
          </p>
        )}

        <p
          className= "credentials">
          Powered by
          <a href="https://unsplash.com/">
             Unsplash
          </a>
        </p>

      </article>
    );
  }
}

export default Image;
