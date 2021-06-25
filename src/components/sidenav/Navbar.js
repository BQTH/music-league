import React, {useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {Link}   from 'react-router-dom'
import { SidebarData } from './SidebarData' 
import './navbar.css'
import {IconContext} from 'react-icons' 
import LogoutButton from "../logout-button"
import LoginButton from "../login-button"
import Logo from './logo/musiclogo.png'

//This function desides which button is being displayed based on if the user is logged in or out.
const AuthNav = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <div> 
               {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
    )
};

function Nav2() {

    //start with nav bar closed
    const [sidebar, setSidebar] = useState(false);

    //Every time this function runs the sidebar state wil alter between true or false / open or closed.
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
         {/*With the context provider you can style mulitple icons easily*/}
        <IconContext.Provider value={{color: '#fff'}}>
          <div className="Navbar">
              <img style={{width: '30px', marginLeft: "20px"}} src={Logo} alt="" />
              <h4>Music league</h4>
            <Link to='#' className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link> 
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle' onClick={showSidebar}>
                        <Link to='#' className='menu-cross'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {/* For every item in sidebar data print the following template */}
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                    {/* Display the login or logout depending on auth status */}
                        <AuthNav/>
                </ul>
            </nav> 
            
            </IconContext.Provider>
        </>
    )
}

export default Nav2
