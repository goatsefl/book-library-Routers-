import { Navigate } from "react-router-dom";
import React from "react";

// This here is a small tool to check authentication, we can use this to encapsulate private logins, using this way.
// If the user is authenticated, user will be shown the component else, redirected to homepage

export const privateLog = (Component) => {
    let isAuthenticate = false;
    return isAuthenticate ? Component : <Navigate to={'/'}></Navigate>
}