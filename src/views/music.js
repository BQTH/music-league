import React, { useState, useEffect } from "react";
import { Credentials } from './../components/spotify/Credentials';
import axios from 'axios';
import SpotifyPlayer from 'react-spotify-web-playback';

const League = () => {

  const spotify = Credentials();

  const [token, setToken] = useState('');

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
      });

  }, []);


  return (
  <div> 
    <SpotifyPlayer
  token = {token}
  uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
/>;
  </div>
  );
};

export default League;
