import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'

import { DcScreen } from '../components/Dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'

export const DashboarRoutes = () => {
    return (
        <>
            <Navbar /> 

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />    
                    <Route exact path="/hero/:heroeId" component={HeroScreen} /> 
                    <Route exact path="/dc" component={DcScreen} /> 

                    <Redirect to="/marvel" />
                </Switch>    
            </div>  
        </>
    )
}
