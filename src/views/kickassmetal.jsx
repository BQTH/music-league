import React, { useState} from "react";
import axios from 'axios';
import Cookies from 'js-cookie'

const League = () => {

  // const spotify = Credentials();
  const [playlists, setPlaylist] = useState([]);

  const token = Cookies.get('spotifyAuthToken')
  
  
  axios('https://api.spotify.com/v1/playlists/37i9dQZF1DWXIcbzpLauPS/tracks?market=nl', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(PlaylistResponse => {
      console.log(PlaylistResponse.data.items)
      setPlaylist(PlaylistResponse.data.items);
    })

  return (
    <div className="container">
      <h3>Songs</h3>
      {playlists.map(playlist =>
        <div className="PlaylistCard">
          <a href="/kickassmetal">
            <div className="row">
              <div className="col">
                <img className="PlaylistCover" src={playlist.track.album.images[0].url} alt="" />
              </div>
              <div className="col-9">
                <h6 style={{ opacity: "50%" }}>SONG</h6>
                <h6> {playlist.track.name} </h6>
                <h6>{playlist.id}</h6>
              </div>
            </div>
          </a>
        </div>

      )}
    </div>
  );
};

export default League;
