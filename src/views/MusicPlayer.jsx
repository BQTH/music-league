import React,{ useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback';
import Cookies from 'js-cookie'
import 'react-spotify-auth/dist/index.css'
import axios from 'axios';

var track_id = window.location.pathname.split('_')[2] 
console.log(track_id)

const App = () => {
  // get track id from url
  var track_id = window.location.pathname.split('_')[2]

// Get spotify token from cookies
  const token = Cookies.get('spotifyAuthToken')

  const [playlists, setPlaylist] = useState([]);
  //Gets playlist tracks by playlist id
  useEffect(() => {

  //get spotify auth token
  const token = Cookies.get('spotifyAuthToken')

  // get playlist id from url 
  var playlist_id = window.location.pathname.split('_')[1] 
  console.log(playlist_id)

  //Get playist tracks by playlist id
  axios(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?market=nl`, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(PlaylistResponse => {
      console.log(PlaylistResponse.data.items)
      setPlaylist(PlaylistResponse.data.items);
    })
}, []);

//Other tracks from playlist
var track_uris = playlists.map(playlist => (`spotify:track:${playlist.track.id}`))

//Path to track the user clicked on.
var firstTrack = `spotify:track:${track_id}`

//var trackuri = [newfirst].concat(track_uris)
console.log(track_uris)

  return (
    <div className='spot'>
        <div>
          <div style={{ position: "fixed", left: "15px", right: "15px",  border: '10px solid #4A4A4A', borderRadius: "5px", borderBottom: "none"}}>
            {/*Spotify player from react-spotify-web-playback using the spotify auth token and track id's to play a song*/}
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