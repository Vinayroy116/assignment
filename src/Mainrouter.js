import React from 'react';
import { Route, Switch } from "react-router-dom"
import Profile from './components/profile';
import Home from './components/Home';
const Mainrouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />

        </Switch>
    </div>
)
export default Mainrouter;

