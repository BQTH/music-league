import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie'

const League = () => {

  // const spotify = Credentials();
  const [playlists, setPlaylist] = useState([]);

  var playlist_id = window.location.pathname.split('_')[1] 
  console.log(playlist_id)

  //Gets playlist tracks by playlist id
  useEffect(() => {
    const token = Cookies.get('spotifyAuthToken')

    var playlist_id = window.location.pathname.split('_')[1] 
    console.log(playlist_id)

    axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?market=nl`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(PlaylistResponse => {
        console.log(PlaylistResponse.data.items)
        setPlaylist(PlaylistResponse.data.items);
      })
  }, []);

  return (
    <div className="container">
      <h3>Songs</h3>
      {playlists.map(playlist =>
        <div className="PlaylistCard" key={playlist.track.id}>
          <a href={`/player_${playlist_id}_${playlist.track.id}`}>
            <div className="row">
              <div className="col">
                <img className="PlaylistCover" src={playlist.track.album.images[0].url} alt="" />
              </div>
              <div className="col-9">
                <h6 style={{ opacity: "50%" }}>SONG</h6>
                <h6> {playlist.track.name} </h6>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default League;
