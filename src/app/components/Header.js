import React from "react";
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#/">
                                Brand
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/Home">
                                <NavItem eventKey={1}>Home</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/Login">
                                <NavItem eventKey={2}>Login</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/SignUp">
                                <NavItem eventKey={3}>Sign Up</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}