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

const AuthNav = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <div> 
               {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
    )
};

function Nav2() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <div className="Navbar">
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
                        <AuthNav/>
                </ul>
            </nav> 
            
            </IconContext.Provider>
        </>
    )
}

export default Nav2
