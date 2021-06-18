import React from "react";
import { Switch } from "react-router-dom";

import { NavBar, Loading, PrivateRoute } from "./components";
import { Home, Profile, League } from "./views";
import "./app.css";
import { useAuth0 } from "@auth0/auth0-react";
import Kickassmetal from './views/kickassmetal'
import MusicPlayer from './views/MusicPlayer'
import SideNav from './components/sidenav/Navbar';
import StartSessionBtn from "./components/sessionbtn/StartSessionBtn";
import { Credentials } from './components/spotify/Credentials';

import Cookies from 'js-cookie'

import { SpotifyAuth } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const App = () => {

  const { isLoading } = useAuth0();

  const spotify = Credentials();

  if (isLoading) {
    return <Loading />
  }

  const token = Cookies.get('spotifyAuthToken')

  return (
    <div id="app">

      <NavBar />
      <div style={{ zIndex: "2", marginTop: "70px" }} className="content">
        <SideNav />
        {token ? (
          <div>
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/league" component={League} />
              <PrivateRoute path="/kickassmetal" component={Kickassmetal} />
              <PrivateRoute path="/player" component={MusicPlayer} />
            </Switch>
            <StartSessionBtn />
          </div>
        ) : (
          <div style={{ marginTop: "100px" }}>
       {/* Display the login page*/}
            <SpotifyAuth
              redirectUri='http://localhost:3000/'
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
