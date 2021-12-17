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
import Link from 'next/link'

export default function Footer() {
  return (

    <>

    <footer >

      <Container fluid className="v-footer justify-content-center align-items-center d-flex p-md-5 p-4">
        
        <Row className="justify-content-center align-items-center d-flex p-xl-5 m-xl-5 p-md-4 p-md-4 p-2 pb-0 mb-0">
          <Col lg={6}>
          <h2 className="h1 text-white d-none d-lg-block text-drop">Raise<br />more with Causable</h2>
          <h2 className="h1 text-white d-lg-none pe-5 text-drop">Raise more with Causable</h2>
          
          </Col>
          <Col lg={6}>
          <p className="text-grey lead mb-4 ms-1 text-tight-drop">We have created an innovative solution that will help change the way charities engage their donors. The elegance and ease of use will delight your users and drive revenues to your organization. </p>
          <div className="d-none d-sm-block">
                <Link href="#">
                  <Button className="btn btn-blue tight-drop arrow">
                    CONTACT US
                  </Button>
                </Link>
              </div>
              <div className="d-grid gap-2">
                <Link href="#">
                  <Button className="btn btn-blue tight-drop arrow d-block d-sm-none">
                    CONTACT US
                  </Button>
                </Link>
              </div>
          </Col>
        </Row>

      </Container>

      <Container fluid className="d-none d-md-block">
      <Row className="justify-content-between align-items-end d-flex mt-0 pt-0 p-4">
          <Col >
          <p className="text-white mb-0">©2021 - Causable</p>
          </Col>
          <Col className="d-flex justify-content-center" >
          <Link href="#" >
            <a className="text-white mx-2">
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
          <Col>
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
