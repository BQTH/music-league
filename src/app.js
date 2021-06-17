import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Loading, PrivateRoute } from "./components";
import { Home, Profile, League } from "./views";
import "./app.css";
import { useAuth0 } from "@auth0/auth0-react";
import Kickassmetal from './views/kickassmetal'
import SideNav from './components/sidenav/Navbar';
import StartSessionBtn from "./components/sessionbtn/StartSessionBtn";

const App = () => {

  const {isLoading} = useAuth0();

  if(isLoading) {
    return <Loading/>
  }

  return (
    <div id="app">
      <NavBar />
      <div className="content">
      <SideNav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/league" component={League} />
          <Route path="/kickassmetal" component={Kickassmetal} />
        </Switch>
        <StartSessionBtn />
        </div>
    </div>
  );
};

export default App;
