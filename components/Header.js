
import React, { useState, useEffect, MouseEvent, Component} from 'react';
import { render } from 'react-dom';
import Container from 'react-bootstrap/Container';
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Link from 'next/link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ContactForm from '@components/ContactForm';


export default function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <>

    <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <p className="h6 text-dark-blue">GET STARTED - CONTACT US</p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column bd-highlight">
    
          <ContactForm></ContactForm>   
        </Offcanvas.Body>
      </Offcanvas>

  <Container fluid className="fixed header">   
      <Row>
          <Col>
            <Link href="/">
            <img className="logo" src="/CAUSABLElogo.svg" alt="Causablelogo"/>
            </Link>
          </Col>
        <Col>          
         <div className="headerNav">
          <Link href="#why" >
            <a className="text-white">
              Why Causable? 
            </a>
          </Link>
          <Link href="#what" >
            <a className="text-white">
              What You Get
            </a>
          </Link>
          <Link href="#how" >
            <a className="text-white">
            How To Work With Us
            </a>
          </Link>
          <Link href="#calculate" >
            <a className="text-white">
              Calculate Potential Revenue
            </a>
          </Link>
          
            <Button className="btn btn-outline tight-drop arrow" onClick={handleShow}>
              GET STARTED
            </Button>
          
          </div>
          </Col>
          <Col>
          <Link href="#">
            <img className="chat-btn" src="/chat-btn.svg" alt="Chat button"/>
            </Link>        
          </Col>
      </Row>
  </Container>

  </>
  
  )
}
