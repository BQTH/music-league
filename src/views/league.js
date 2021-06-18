import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie'

const League = () => {

  // const spotify = Credentials();
  const [playlists, setPlaylist] = useState([]);
  const [userid, setuserid] = useState([]);

  const token = Cookies.get('spotifyAuthToken')


  axios('https://api.spotify.com/v1/me', {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(IdResponse => {
      setuserid(IdResponse.data.id);
      const Userid = IdResponse.data.id;
      const link = 'https://api.spotify.com/v1/users/' + Userid + '/playlists'
      axios(link, {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
      })
        .then(PlaylistResponse => {

          console.log(PlaylistResponse.data.items)
          setPlaylist(PlaylistResponse.data.items);
        })
    })

  return (

    <div className="container">
      <h3>Leagues</h3>
      {playlists.map(playlist =>
        <div className="PlaylistCard">
          <a href="/kickassmetal">
            <div className="row">
              <div className="col">
                <img className="PlaylistCover" src={playlist.images[0].url} alt="" />
              </div>
              <div className="col-9">
                <h6 style={{ opacity: "50%" }}>PLAYLIST</h6>
                <h6> {playlist.name} </h6>
              </div>
            </div>
          </a>
        </div>

      )}
    </div>
  );
};

export default League;
