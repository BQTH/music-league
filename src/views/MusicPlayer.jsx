// import React, { useState, useEffect } from "react";
// import { Credentials } from './../components/spotify/Credentials';
// import axios from 'axios';
// import SpotifyPlayer from 'react-spotify-web-playback';

// const League = () => {

//   const spotify = Credentials();

//   const [token, setToken] = useState('');

//   console.log('loading')

//   useEffect(() => {

//     axios('https://accounts.spotify.com/api/token', {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
//       },
//       data: 'grant_type=client_credentials',
//       method: 'POST'
//     })
//       .then(tokenResponse => {
//         console.log(tokenResponse.data.access_token)
//         setToken(tokenResponse.data.access_token)
//       });

//   }, []);
// const Token = "BQAbXdVOAymKxErMnsz949voSxmgDvvKwlk_0gmEjSkdjDK5MP5NnrMUafoIhATtrfjDWV6V0nqlt41ptC-bdHgDAMXLNtWIr9d-XHgrG599EhVv3LXB5WvMAKqE6npkBIRWW1qtUizb3MascFoI6VnFt0Q9UgOSlnL03EBId0da3ZbPtYlBiIMqeJMsQDY"

//   return (
//   <div style={{marginTop: "100px", position: "fixed", left: "50px", right: "50px"}}> 
//     <SpotifyPlayer
//   token = {Token}
//   uris={['spotify:track:57J1mTeZcaTsmvZclU1Bcc', 'spotify:track:4aKWfvddjsBwIrb3KKLb4x' ]}
//   styles={{
//     activeColor: '#fff',
//     bgColor: '#4A4A4A',
//     color: '#fff',
//     loaderColor: '#fff',
//     sliderColor: '#1cb954',
//     trackArtistColor: '#ccc',
//     trackNameColor: '#fff',
//   }}

// />
//   </div>
//   );
// };

// export default League;

import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const App = () => {
  const token = Cookies.get('spotifyAuthToken')
  return (
    <div className='spot'>
      {token ? (
        <div>
          <div style={{ position: "fixed", left: "15px", right: "15px" }}>
            <SpotifyPlayer
              token={token}
              uris={['spotify:track:57J1mTeZcaTsmvZclU1Bcc', 'spotify:track:4aKWfvddjsBwIrb3KKLb4x']}
              styles={{
                activeColor: '#fff',
                bgColor: '#4A4A4A',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#FEA628',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
              }}
            />
          </div>
        </div>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri='http://localhost:3000/player'
          clientID='34f5a54a82b14f7097236783e32f4ded'
          scopes={['streaming', 'user-read-email', 'user-read-private', 'user-library-read', 'user-library-modify', 'user-read-playback-state', 'user-modify-playback-state']} // either style will work
        />
      )}

    </div>
  )
}
export default App