import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function MyNavbar() {
    return (
        <Navbar expand="lg" style={{ backgroundColor: '#004b8d' }} variant="dark">
            <Container>
                <Navbar.Brand style={{ fontWeight: 'bold', fontSize: '24px' }}>McHacks 12</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{ gap: '20px' }}>
                        <NavLink
                            to="/"
                            className="nav-link"
                            style={({ isActive }) => ({
                                color: isActive ? '#ffcc00' : '#ffffff',
                                fontWeight: isActive ? 'bold' : 'normal',
                                fontSize: '18px',
                            })}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/mchacks12/games/"
                            className="nav-link"
                            style={({ isActive }) => ({
                                color: isActive ? '#ffcc00' : '#ffffff',
                                fontWeight: isActive ? 'bold' : 'normal',
                                fontSize: '18px',
                            })}
                        >
                            Games
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;