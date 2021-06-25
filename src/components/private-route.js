import React from "react";
import { Route } from "react-router-dom";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import {Loading } from "./index";

//pravte routes require the user to be logged in before being abble to use the route
const PrivateRoute = ({component, ...args}) => (
    <Route
    component = {withAuthenticationRequired (component, {
        onRedirecting:() => <Loading/>,  
    })}
    {...args}/>
) 
export default PrivateRoute

