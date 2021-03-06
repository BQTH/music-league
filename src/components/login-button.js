
import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import { FiLogIn } from 'react-icons/fi';

//Creates a login button using Auth0
const LoginButton = () => {
    const {loginWithRedirect} = useAuth0();
    return(
        <li className="nav-text" onClick = {() => loginWithRedirect()}
        ><FiLogIn/><span>Log in</span> </li>
    )
}

export default LoginButton;