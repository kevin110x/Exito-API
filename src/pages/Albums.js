import React, { Component } from "react";
import { Header } from "../components/Header";
import axios from "axios";

export class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      id: ""
    };
  }

  _fetchArtist({ id }) {
    this.setState({ id });
    return axios
      .get(`https://www.exito.com/test/v1/artists/${id}/albums`)
      .then(res => {
        const albums = res.data[0].albums;
        this.setState({ albums });
      });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this._fetchArtist({ id });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#303030", color: "white" }}>
        <Header artist_id={this.state.id} />
        <div className="Content-album">
          <strong style={{ color: "white" }}>Álbumes</strong>
          <br />
          <br />
          {this.state.albums.map(album => {
            return (
              <div key={album.id}>
                <img
                  className="SizeimgAlbum"
                  src={album.image}
                  alt={album.name}
                ></img>
                <p style={{ display: "contents" }}>{album.name}</p>&nbsp;
                <small style={{ fontSize: "10px" }}>
                  Canciones: {album.total_tracks}
                </small>
                <hr style={{ height: 0.5 }} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
