
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
import Offcanvas from 'react-bootstrap/Offcanvas'


export default function Home() {

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
        <Offcanvas.Body className="d-flex flex-column bd-highlight mb-3">
        <h4 className="alt mb-auto bd-highlight">
        Interested in increasing your charitable fundraising revenue with Causable?
          </h4>
          
          <Form className="mb-3 bd-highlight">
          <Form.Group className="mb-3" controlId="firstLastName">
            <Form.Label className="p small text-dark-blue">FIRST AND LAST NAME</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="orgName">
            <Form.Label className="p small text-dark-blue">ORGANIZATION NAME</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className="p small text-dark-blue">EMAIL ADDRESS</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lodaction">
            <Form.Label className="p small text-dark-blue">LOCATION</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridState">
            <Form.Label className="p small text-dark-blue">EXPECTED NUMBER OF PLAYERS</Form.Label>
            <Form.Select defaultValue="Please select...">
              <option>Please select...</option>
              <option>Less than 1000</option>
              <option>1000-5000</option>
              <option>5000-10,000</option>
              <option>10,000-20,000</option>
              <option>20,000 +</option>
            </Form.Select>
          </Form.Group>
          </Form>
          
          <Button className="btn btn-blue w-full bd-highlight" onClick={handleClose}>
            SUBMIT
          </Button>
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
          <Link href="#" >
            <Button className="btn btn-outline tight-drop arrow" onClick={handleShow}>
              GET STARTED
            </Button>
          </Link>
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
