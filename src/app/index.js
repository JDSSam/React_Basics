import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";

import { Routes } from "./components/Routes";

import { HashRouter as Router, Route, Layout } from 'react-router-dom';
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <Routes />
                    </div>
                </Router>
            </div>
        );
    }
}

render(<App />, document.getElementById("app"));