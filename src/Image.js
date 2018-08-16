import React, { Component } from 'react';

// Unsplash API
const API =
  'https://api.unsplash.com/photos/search?client_id=dddf912b3e4b9693384e1752b4aafb1311290a136c54a184eda7f717a5724b18&query=gourmet/400x300';

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
      .catch(error => {
        console.log(error);
      });

    const randomIndex = this.getRandomIntInclusive(0, 9);
    this.setState({ randomIndex });
  }

  //funtcion that generates a random value
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  render() {
    const { images } = this.state;
    const { randomIndex } = this.state;
    //get a random food image from the state

    //error handling, in case there are no images to render
    let isErrorFree = images.length != 0;

    const image = isErrorFree ? images[randomIndex] : null;

    return (
      <article className="appetizer">
        <h2 className="appetizer-title">Daily appetizer</h2>

        {isErrorFree ? (
          <figure className="appetizer-img">
            <a href={image.urls.regular}>
              <img
                key={image.id}
                className="unpsplash-img"
                src={image.urls.small}
                alt={image.description}
              />
            </a>

            <figcaption className="appetizer-text">
              <span>Photo by {image.user.name}</span>
              <span className="credentials">
                Powered by
                <a href="https://unsplash.com/">Unsplash</a>
              </span>
            </figcaption>
          </figure>
        ) : (
          <p className="error">
            Sorry, we could not download this image for you.
          </p>
        )}
      </article>
    );
  }
}

export default Image;
