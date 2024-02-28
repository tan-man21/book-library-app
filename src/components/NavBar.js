import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../logo.svg'

function NavBar() {

    const [searchTerm, setSearchTerm] = useState('')

    const API_URL = ''

    const handleSearch = (e, term) => {
        e.preventDefault()
        const fetchData = async () => {
        const response = await fetch(API_URL + term)
        const resData = await response.json()
        console.log(resData)
        }
        fetchData()
    }

    const expand = 'md'

    return (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" sticky='top'>
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo} style={{height: '50px'}} />{' '}Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" flex-grow-1 pe-3" variant='underline'>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About Me</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Your Next Adventure Awaits..."
                    className="me-2"
                    aria-label="Search"
                    style={{width: '400px'}}
                  />
                  <Button variant="outline-danger">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}

export default NavBar;
