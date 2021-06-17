import React, { useState, useEffect } from "react";
import { Credentials } from './../components/spotify/Credentials';
import axios from 'axios';

const League = () => {

  const spotify = Credentials();

  const [token, setToken] = useState('');
  const [playlists, setPlaylist] = useState([]);

  console.log('loading')
    console.log(token)
  console.log()

  useEffect(() => {

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => {
        console.log(tokenResponse.data.access_token)
        setToken(tokenResponse.data.access_token)

        axios('https://api.spotify.com/v1/playlists/37i9dQZF1DWXIcbzpLauPS/tracks?market=nl', {
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
        })
          .then(PlaylistResponse => {

            console.log(PlaylistResponse.data.items)
            setPlaylist(PlaylistResponse.data.items);

          })


      });

  }, []);


  return (
   <div className="container">
      <h3>Leagues</h3>
      {playlists.map(playlist =>
        <div className="PlaylistCard">
          <a href="/kickassmetal">
          <div className="row">
            <div className="col">
              <img className="PlaylistCover" src={playlist.track.album.images[0].url}  alt="" />
            </div>
            <div className="col-9">
              <h6 style={{opacity: "50%"}}>SONG</h6>
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
