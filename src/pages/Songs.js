import React, { Component } from "react";
import { HeaderSong } from "../components/HeaderSong";
import axios from "axios";

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

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  render() {
    return (
      <div>
      <HeaderSong album_id={this.state.id}/>
      <div className="Content-album Songs">
        <div style={{ fontSize: "24px", fontWeight: "600" }}>Canciones</div>
        {this.state.songs.map(song => {
          return (
            <div key={ song.id }>
              <a
                target="blank"
                href={song.spotify_url}
                style={{ color: "white" }}
              >
                {song.name}
              </a>
              <hr />
              {/* <i onClick={this.playAudio} className="fa fa-play"></i>
              <audio className="audio-element">
                <source src={song.preview_url}></source>
                <script>console.log(song.preview_url);</script>
              </audio> */}
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}
