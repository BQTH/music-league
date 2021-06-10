import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Loading, PrivateRoute } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import "./app.css";
import { useAuth0 } from "@auth0/auth0-react";

import SideNav from './components/sidenav/Navbar';

const App = () => {

  const {isLoading} = useAuth0();

  if(isLoading) {
    return <Loading/>
  }

  return (
    <div id="app">
      <NavBar />
      <SideNav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
    </div>
  );
};

export default App;
