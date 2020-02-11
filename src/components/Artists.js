import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Artists extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    axios.get("https://www.exito.com/test/v1/artists").then(res => {
      const artists = res.data.data;
      this.setState({ artists });
      // console.log(artists);
    });
  }

  render() {
    return (
      <div className="ArtistsList">
        {this.state.artists.map(artist => {
          return (
            <Link
              to={`/Albums/${artist.id}`}
              className="Artist-Item"
              key={artist.id}
            >
              <figure className="image">
                <img
                  className="is-rounded Sizeimg"
                  src={artist.image}
                  alt={artist.name}
                ></img>
              </figure>
              <div className="Text-wrapper">
                <p>{artist.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
