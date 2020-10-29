import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboarRoutes } from './DashboarRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Navbar /> */}

                
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashboarRoutes} />
                </Switch>
            </div>
        </Router>
    )
}
