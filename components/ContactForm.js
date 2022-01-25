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

export default function ContactForm () {



return (

    <>

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

          <Form.Group className="mb-4" controlId="formGridState">
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

          <Button className="btn btn-blue w-full bd-highlight" type="submit">
            SUBMIT
          </Button>
          </Form>

    </>

)
}