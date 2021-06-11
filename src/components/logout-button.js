
import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import { FiLogOut } from 'react-icons/fi';

const LogoutButton = () => {
    const {logout} = useAuth0();
    return(
        <li className="nav-text" onClick = {() => logout()}
        ><FiLogOut/><span>Log Out</span></li>
    )
}

export default LogoutButton;