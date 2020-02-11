import React, { Component } from "react";

import axios from "axios";

export class Header extends Component {

  state = {
    artist: {},
    art_id: ""
  };

  componentDidMount() {
    this.setState({ art_id: this.props.artist_id });
    axios.get("https://www.exito.com/test/v1/artists").then(res => {
      const artists = res.data.data;
      // eslint-disable-next-line
      const artist = artists.filter(art => art.id == this.props.artist_id)[0];
      this.setState({ artist });
    });
  }
  render() {
    return (
      <div className="HeaderAl">
        <figure className="image">
          <img
            className="is-rounded Sizeimg"
            src={this.state.artist.image}
            alt={this.state.artist.name}
          ></img>
          <br />
          <div style={{ fontSize: "26px", fontWeight: "400" }}>
            {this.state.artist.name}
            <small style={{ fontSize: "4px" }}>
              <i className="fa fa-star" style={{ color:"yellow" }}></i>
              {this.state.artist.popularity}
            </small>
          </div>
        </figure>
      </div>
    );
  }
}
