import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from "./Login";
import {Home} from "./Home";
import {SignUp} from "./SignUp";
import {App} from "../index";

export class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/SignUp" component={SignUp} />
            </Switch>
        );
    }
}
