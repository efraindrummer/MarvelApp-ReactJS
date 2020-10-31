import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboarRoutes } from './DashboarRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const {user} = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={LoginScreen} 
                        isAuthenticated={user.log}
                    />

                    <PrivateRoute 
                        path="/" 
                        component={DashboarRoutes}
                        isAuthenticated={user.log}
                    />
                </Switch>
            </div>
        </Router>
    )
}
