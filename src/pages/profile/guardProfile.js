
import React from 'react';
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, setAuth, activePage, setActivePage }) => (

    
    <Route  render={(props) => (
        auth !== "logOut"
            ? <Component  auth={auth} setAuth={setAuth} activePage={activePage} setActivePage={setActivePage} />
            : <Redirect to='/' />
    )} />
)

export default GuardedRoute;