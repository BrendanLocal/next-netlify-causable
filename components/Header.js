
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

export default function Header() {
  return (

  <Container fluid className="fixed header">
      
      <Row>

          <Col>

            <Link href="/">
            <img className="logo" src="/CAUSABLElogo.svg" alt="Causablelogo"/>
            </Link>

          </Col>

        <Col>
          
         <div className="headerNav">
         
          <Link href="#" >
            <a className="text-white">
              Why Causable? 
            </a>
          </Link>
          <Link href="#" >
            <a className="text-white">
              What You Get
            </a>
          </Link>
          <Link href="#" >
            <a className="text-white">
            How To Work With Us
            </a>
          </Link><Link href="#" >
            <a className="text-white">
              Calculate Potential Revenue
            </a>
          </Link>
          <Link href="#" >
            <Button className="btn btn-outline tight-drop arrow">
              GET STARTED
            </Button>
          </Link>
          </div>

          </Col>

          <Col>

          <Link href="/">
            <img className="chat-btn" src="/chat-btn.svg" alt="Chat button"/>
            </Link>
            
          </Col>

      </Row>

  </Container>
  
  )
}
