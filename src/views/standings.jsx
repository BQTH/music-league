import React, { useState, useEffect } from "react";
import axios from 'axios';
import Cookies from 'js-cookie'
import { Card, Accordion, useAccordionToggle } from 'react-bootstrap'
import { AiOutlineDown, AiFillCaretDown } from 'react-icons/ai';
import { FaShoePrints } from 'react-icons/fa';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <AiOutlineDown className="float-right"
      style={{ color: "white" }}
      onClick={decoratedOnClick} />
  );
}

var n = 1;

const League = () => {

  //Count the songs and playlists to display the index
  function index() {
    n++;
  }

  const [playlists, setPlaylist] = useState([]);

  // get playlist id from the url
  var playlist_id = window.location.pathname.split('_')[1]
  console.log(playlist_id)

  //Gets playlist tracks by playlist id
  useEffect(() => {

    //Get spotify token from cookies
    const token = Cookies.get('spotifyAuthToken')

    //get playlist id from the given id in the current url
    var playlist_id = window.location.pathname.split('_')[1]
    console.log(playlist_id)

    //get tracks by playlist id
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
      <div className="Playlistlist">
        {/* Generate a card for every playlist or track with corresponding details */}
        {playlists.map(playlist =>
          <div className="PlaylistCard"  key={playlist.track.id}>
            {/*<a href={`/player_${playlist_id}_${playlist.track.id}`}>*/}
            <Accordion>
              <Card style={{ background: "#323232" }}>
                <Card.Header>
                  <div className="row align-items-center">
                    <div className="col-2" style={{ padding: "0px" }}>
                      <span className="" style={{ marginLeft: "10px" }}>{n}</span>
                      <AiFillCaretDown style={{ marginLeft: "10px" }} />
                    </div>
                    <div className="col-7" style={{ padding: "0px" }}>
                      <a href={`/player_${playlist_id}_${playlist.track.id}`}>
                        <img className="PlaylistCover" src={playlist.track.album.images[0].url} alt="" />
                        <h6 style={{ opacity: "50%", marginLeft: "60px" }}>SONG</h6>
                        <h6 style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", marginLeft: "60px" }}> {playlist.track.name} </h6>
                      </a>
                    </div>
                    <div className="col-2">
                      <FaShoePrints style={{ transform: "rotate(270deg)", fontSize: "30px" }} />
                    </div>
                    <CustomToggle eventKey="0">Click me!</CustomToggle>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  {/* Track performance details go here */ }
                  <Card.Body>Music league track performance details</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            {index()}
          </div>
        )}
      </div>
    </div>
  );
};

export default League;
