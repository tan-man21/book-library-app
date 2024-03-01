import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../logo.svg';
import axios from 'axios';
import BookColumn from './BookColumn';

function NavBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const [books, setBooks] = useState([])

    const handleSearch = async () => {
      if(!searchTerm){
        return;
      }
  
      try{
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyC_6wmVPX88Nwmbxt2jboTLWQLcEbbUzq0`)
        setBooks(response.data.items)
        console.log(response.data.items)
      } catch(error){
        console.error(error);
      }
    }

    const expand = 'md'

    return (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" sticky='top'>
          <Container fluid>
            <Navbar.Brand href="#"><img src={Logo} style={{height: '50px'}} />{' '}LibLab</Navbar.Brand>
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
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About Me</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="searc"
                    placeholder="Your Next Adventure Awaits..."
                    className="me-2"
                    aria-label="Search"
                    style={{width: '400px'}}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button variant="outline-danger" type='submit' onClick={handleSearch}>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <BookColumn books={books} />
        </Navbar>
    )
}

export default NavBar;
