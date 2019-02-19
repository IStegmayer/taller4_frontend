import React, { Component } from 'react'
import { Link } from 'react'
import { withRouter} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import '../css/navBar.css'

class NavBar extends Component {

    logOut = () => {
        this.props.setLoggedOut();
        this.props.history.push('/home');
    }

    render() {
        let navChoices = null;
        console.log(typeof(this.props.loggedIn));
        if(this.props.loggedIn !== true && this.props.loggedIn !== 'true'){
            navChoices =
            <Nav pullRight>
            <NavItem className="navItem" eventKey={1} componentClass={Link} href="/login" to="/login">
                Log In
            </NavItem>
            <NavItem className="navItem" eventKey={2} componentClass={Link} href="/register" to="/register">
                Register
            </NavItem>
            </Nav>
        } else {
            navChoices = 
            <Nav pullRight>
            <NavItem className="navItem" eventKey={1} componentClass={Link} href="/profile" to="/profile">
                Profile
            </NavItem>
            <NavItem className="navItem" eventKey={2} componentClass={Link} href="/upload" to="/upload">
                Upload
            </NavItem>
            <NavItem className="navItem" eventKey={3} onClick={this.logOut}>
                Logout
            </NavItem>
            </Nav>
        }

        return (
        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="/home" to="/home">Replay City</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                {navChoices}
            </Navbar.Collapse>
        </Navbar>
        )
    }

}

export default withRouter(NavBar);