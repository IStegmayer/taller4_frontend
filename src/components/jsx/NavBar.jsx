import React, { Component } from 'react'
import { Link } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import '../css/navBar.css'


export default class NavBar extends Component {

    render() {
        return (
        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="/home" to="/home">Replay City</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem className="navItem" eventKey={1} componentClass={Link} href="/login" to="/login">
                        Log In
                    </NavItem>
                    <NavItem className="navItem" eventKey={2} componentClass={Link} href="/register" to="/register">
                        Register
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }

}