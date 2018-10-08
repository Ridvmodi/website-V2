import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
export default class NavBar extends Component {
  render () {
    return (
    <Navbar fixedTop dark expand="md" scrolling inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#home">CODEUINO</a>
            </Navbar.Brand>
        </Navbar.Header>
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
    </Navbar>
    )
  }
}
