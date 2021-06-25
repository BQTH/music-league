import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie'

var n = 1

const League = () => {

   //Count the songs and playlists to display the index
  function index() {
    n++;
  }

  //Reset index when component is reloaded
  function resetIndex() {
    n = 1;
  }

  // const spotify = Credentials();
  const [playlists, setPlaylist] = useState([]);

  //Gets the users id and then his followed playlists
  useEffect(() => {
    //Get spotify API token
    const token = Cookies.get('spotifyAuthToken')

    //get user playlists
    axios('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(IdResponse => {
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
  }, []);

  return (

    <div className="container">
      {resetIndex()}
      <h3>Leagues</h3>
      <div className="Playlistlist" style={{padding:"10px", backgroundColor:"#424242"}}>
         {/* Generate a card for every playlist or track with corresponding details */}
      {playlists.map(playlist =>
        <div className="PlaylistCard" key={playlist.id} style={{marginBottom: "10px", backgroundColor:"#323232", paddingBottom:"10px"}}>
          <a href={`/standings_${playlist.id}`}>
            <div className="row">
              <div className="col">
                <span style={{marginRight: "20px"}}>{n}</span>
                <img className="PlaylistCover" src={playlist.images[0].url} alt="" />
              </div>
              <div className="col-9">
                <h6 style={{ opacity: "50%" }}>PLAYLIST</h6>
                <h6> {playlist.name} </h6>
              </div>
            </div>
          </a>
          {index()}
        </div>

      )}
      </div>
    </div>
  );
};

export default League;
