import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react"
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import { IconContext } from "react-icons";
import { FaHome, FaMedal } from 'react-icons/fa';
import { IoIosStats } from 'react-icons/io';
import { SiApplemusic } from 'react-icons/si';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="col m3 s3">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  )

};

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="row">
      <IconContext.Provider value={{ className: "bottom-nav-icons" }}>
        <div className="col m3 s3">
          <RouterNavLink exact={true}  activeClassName="active" to="/"><FaHome /></RouterNavLink>
        </div>
        <div className="col m3 s3">
          <RouterNavLink activeClassName="active" to="/profile"><IoIosStats/></RouterNavLink>
        </div>
        <div className="col m3 s3">
          <RouterNavLink activeClassName="active" to="/external-api"><FaMedal/></RouterNavLink>
        </div>
        <div className="col m3 s3">
          <RouterNavLink activeClassName="active" to="/player"><SiApplemusic/></RouterNavLink>
        </div>
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default NavBar;
