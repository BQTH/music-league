import React from "react";
import { Switch } from "react-router-dom";
import { NavBar, Loading, PrivateRoute } from "./components";
import { Home, Profile, League } from "./views";
import "./app.css";
import { useAuth0 } from "@auth0/auth0-react";
import Standings from './views/standings'
import MusicPlayer from './views/MusicPlayer'
import SideNav from './components/sidenav/Navbar';
import StartSessionBtn from "./components/sessionbtn/StartSessionBtn";
import { Credentials } from './components/spotify/Credentials';
import Cookies from 'js-cookie'
import { SpotifyAuth } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const App = () => {
  
  const { isLoading } = useAuth0();

  //Contains spotify credentials defined in a .env file
  const spotify = Credentials();

  //Checks if the app is running on a local server to pass the right redirect url
  var redirect;
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
    console.log("It's a local server!");
    redirect = 'http://localhost:3000/'
  } else {
    console.log("This app is hosted!")
    redirect = 'https://music-league.vercel.app/'
  }

  //Checks if the page is loading. If so, it will display a loading screen.
  if (isLoading) {
    return <Loading />
  }

  //For communication with the Android shell
  function openBleActivity(){
    console.log("openBleActivity")
  }

  //Gets spotify token from the cookies
  const token = Cookies.get('spotifyAuthToken')

  return (
    <div onClick={openBleActivity()} id="app">

      <NavBar />
      <div style={{ zIndex: "2", marginTop: "70px" }} className="content">
        <SideNav />
        {/*Display the app only if there is a token for spotify */}
        {token ? (
          <div>
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/league" component={League} />
              <PrivateRoute path="/standings:id" component={Standings} />
              <PrivateRoute path="/player:id" component={MusicPlayer} />
            </Switch>
            <StartSessionBtn />
          </div>
        ) : (
          <div style={{ marginTop: "100px" }}>
       {/*else, Display the spotify login button*/}
            <SpotifyAuth
              redirectUri= {redirect}
              clientID={spotify.ClientId}
              scopes={['streaming', 'user-read-email', 'user-read-private', 'user-library-read', 'user-library-modify', 'user-read-playback-state', 'user-modify-playback-state']}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
