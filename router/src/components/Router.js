import React, { Component } from 'react';
import Inicio from './Inicio';
import {BrowserRouter, Route, Switch} from "react-router-dom";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/Inicio" component={Inicio}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
