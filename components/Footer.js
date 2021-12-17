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
import Link from 'next/link';
import FormControl from 'react-bootstrap/FormControl';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function Footer() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>

<Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

    <footer >

      <Container fluid className="v-footer justify-content-center align-items-center d-flex p-md-5 p-4">

        <Row className="justify-content-center align-items-center d-flex pt-xl-5 pt-lg-4">
          <Col lg="11" md="10">
          <Row className="justify-content-center align-items-center d-flex p-xl-5 m-xl-5 p-md-4 p-md-4 p-2 pb-0 mb-0 mt-5">
          <Col lg={6}>
          <h2 className="h1 text-white d-none d-lg-block text-drop">Raise<br />more with Causable</h2>
          <h2 className="h1 text-white d-lg-none pe-5 text-drop">Raise more with Causable</h2>
          
          </Col>
          <Col lg={6}>
          <p className="text-grey lead mb-4 ms-1 text-tight-drop">We have created an innovative solution that will help change the way charities engage their donors. The elegance and ease of use will delight your users and drive revenues to your organization. </p>
          <div className="d-none d-lg-block">
                
                  <Button className="btn btn-blue tight-drop arrow" onClick={handleShow}>
                    CONTACT US
                  </Button>
                
              </div>
              <div className="d-grid gap-2">
                
                  <Button className="btn btn-blue tight-drop arrow d-block d-lg-none" onClick={handleShow}>
                    CONTACT US
                  </Button>
                
              </div>
          </Col>
        </Row>
          </Col>
        </Row>

      </Container>

      <Container fluid className="d-none d-md-block mt-0 pt-0">
      <Row className="justify-content-between align-items-end d-flex mt-0 pt-0 p-4">
          <Col className="mt-0 pt-0">
          <p className="text-white mb-0">©2021 - Causable</p>
          </Col>
          <Col className="d-flex justify-content-center mt-0 pt-0" >
          <Link href="#" >
            <a className="text-white mx-2 mt-0 pt-0 ">
              Facebook
            </a>
          </Link>
          <Link href="#" >
            <a className="text-white mx-2 mt-0 pt-0">
              Instagram
            </a>
          </Link>
          <Link href="#" >
            <a className="text-white mx-2 mt-0 pt-0">
            Twitter
            </a>
          </Link>
          </Col>
          <Col className="mt-0 pt-0">
          </Col>
      </Row>
      </Container>

      <Container fluid className="d-md-none pb-2 mt-0 pt-0">
      <Row className="mt-0 pt-0 p-2 pb-4 ms-1">
          <Col sm={12} class>
          <p className="text-white mb-0">©2021 - Causable</p>
          </Col>
          <Col sm={12} className="" >
          <Link href="#" >
            <a className="text-white me-2">
              Facebook
            </a>
          </Link>
          <Link href="#" >
            <a className="text-white mx-2">
              Instagram
            </a>
          </Link>
          <Link href="#" >
            <a className="text-white mx-2">
            Twitter
            </a>
          </Link>
          </Col>
          <Col sm={12}>
          </Col>
      </Row>
      </Container>
   
    </footer>

    </>

  )
}
