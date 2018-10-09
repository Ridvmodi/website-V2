import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
export default class NavBar extends Component {
  render () {
    return (
    <Navbar fluid expand="md" scrolling>
        <Navbar.Header>
            <Navbar.Brand>
                <div className="navbarlogo"><a href="index.html">CODEUINO<span>.</span></a></div>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav pullRight>
        <NavItem eventKey={1} href="#">
        Home
        </NavItem>
        <NavItem eventKey={2} href="#">
        Projects
        </NavItem>
        <NavItem eventKey={2} href="#">
        Team
        </NavItem>
        <NavItem eventKey={2} href="#">
        Donate Us
        </NavItem>
        <NavItem eventKey={2} href="#">
        Wiki
        </NavItem>
        <NavItem eventKey={2} href="#">
        Get Involved
        </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}
