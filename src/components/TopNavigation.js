import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, NavItem, MenuItem } from 'react-bootstrap';

import './TopNavigation.css';

import logo from '../logo.svg';

const navbarInstance = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/"><img src={logo} alt="EdenHome" /></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/tutorials/getting-started">Getting started</NavItem>
      <NavItem eventKey={2} href="/docs/reference">API reference</NavItem>
    </Nav>
  </Navbar>
);

export default navbarInstance;
