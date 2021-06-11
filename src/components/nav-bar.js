import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHome, FaMedal } from 'react-icons/fa';
import { IoIosStats } from 'react-icons/io';
import { SiApplemusic } from 'react-icons/si';

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
          <RouterNavLink activeClassName="active" to="/league"><FaMedal/></RouterNavLink>
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
