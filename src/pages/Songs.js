import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      id: ""
    };
  }

  _fetchSongs({ id }) {
    this.setState({ id });
    return axios
      .get(`https://www.exito.com/test/v1/albums/${id}/songs`)
      .then(res => {
        const songs = res.data[0].songs;
        this.setState({ songs });
        console.log(songs);
      });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this._fetchSongs({ id });
  }

  render() {
    return (
      <div className="Content-album Songs">
        <div style={{ fontSize: "24px", fontWeight: "600" }}>Canciones</div>
        {this.state.songs.map(song => {
          return (
            <div>
              <a href={ song.spotify_url } style={{ color: "white" }} to={song.spotify_url} key={song.id}>
                {song.name}
              </a>
              <a style={{ color: "white" }} href={song.preview_url}>
                <i className="fa fa-play"></i>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
