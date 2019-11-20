import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">0xff</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#cryptography">Encoder/Decoder</Nav.Link>
                            <NavDropdown title="More" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">menu</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">menu</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">menu</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link eventKey={2} href="#menu">Menu</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;