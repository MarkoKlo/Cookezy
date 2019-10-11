import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import styled from 'styled-components';
import NavLink from 'react-bootstrap/NavLink';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        &:hover {
            color:white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Recipe Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavItem><NavLink href="/">Home</NavLink></NavItem>
                    <NavItem><NavLink href="/About">About</NavLink></NavItem>
                    <NavItem><NavLink href="/Contact">Contact</NavLink></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

)