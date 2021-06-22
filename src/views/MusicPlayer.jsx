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

import React,{ useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
import Cookies from 'js-cookie'
import 'react-spotify-auth/dist/index.css'
import axios from 'axios';

var track_id = window.location.pathname.split('_')[2] 
console.log(track_id)


 

const App = () => {
  var track_id = window.location.pathname.split('_')[2]
  
  const token = Cookies.get('spotifyAuthToken')
 // const spotify = Credentials();
 const [playlists, setPlaylist] = useState([]);
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


var track_uris = playlists.map(playlist => (`spotify:track:${playlist.track.id}`))
var firstTrack = `spotify:track:${track_id}`
//var trackuri = [newfirst].concat(track_uris)
console.log(track_uris)

  return (
    <div className='spot'>
        <div>
          <div style={{ position: "fixed", left: "15px", right: "15px",  border: '10px solid #4A4A4A', borderRadius: "5px", borderBottom: "none"}}>
            <SpotifyPlayer
              token={token}
              autoPlay={true}
              uris={firstTrack}
              styles={{
                activeColor: '#fff',
                bgColor: '#4A4A4A',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#fdc623',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
              }}
            />
          </div>
        </div>
    </div>
  )
}
export default App