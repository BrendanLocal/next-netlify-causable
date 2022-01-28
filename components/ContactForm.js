import React, { useState, useEffect, MouseEvent, Component} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { render } from 'react-dom';
import Container from 'react-bootstrap/Container';
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import FormControl from 'react-bootstrap/FormControl';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function ContactForm () {

    const [state, handleSubmit] = useForm("xoqrjgll");
    if (state.succeeded) {
        return (
            <>
            <Row className="justify-content-center mt-5 mb-2">
                <Col xs={9}>
                <Image fluid src="/success.svg" alt="Success graphic"></Image>
                </Col>
            </Row>
            <Row className="justify-content-center my-4">
                <Col xs={3}>
                <hr />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12}>
                <h4 className="text-center mb-3">
                Thank you for connecting!
                </h4>
                <p className="text-dark text-center">
                We will be in touch soon. 
                </p>
                </Col>
            </Row>
            </>        
        );    
    }
        return (
            <>
         <h4 className="alt mb-auto bd-highlight">
        Interested in increasing your charitable fundraising revenue with Causable?
          </h4>              
        <Form name="contact" onSubmit={handleSubmit} className="bd-highlight">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label htmlFor="full-name" className="p small text-dark-blue">FIRST AND LAST NAME</Form.Label>
            <Form.Control name="name" type="text" nameplaceholder="" />
            <ValidationError 
              prefix="Full-name" 
              field="full-name"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="organization">
            <Form.Label htmlFor="organization" className="p small text-dark-blue">ORGANIZATION NAME</Form.Label>
            <Form.Control name="organization" type="text" placeholder="" />
            <ValidationError 
              prefix="Organization" 
              field="organization"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label htmlFor="email" className="p small text-dark-blue">EMAIL ADDRESS</Form.Label>
            <Form.Control name="email" type="text" placeholder="" />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lodaction">
            <Form.Label htmlFor="location" className="p small text-dark-blue">LOCATION</Form.Label>
            <Form.Control name="location" type="text" placeholder="" />
            <ValidationError 
              prefix="Location" 
              field="location"
              errors={state.errors}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="select">
            <Form.Label htmlFor="select" className="p small text-dark-blue">EXPECTED NUMBER OF PLAYERS</Form.Label>
            <Form.Select defaultValue="Please select...">
              <option>Please select...</option>
              <option>Less than 1000</option>
              <option>1000-5000</option>
              <option>5000-10,000</option>
              <option>10,000-20,000</option>
              <option>20,000 +</option>
            </Form.Select>
            <ValidationError 
              prefix="Select" 
              field="select"
              errors={state.errors}
            />
          </Form.Group>

          <Button className="btn btn-blue w-full bd-highlight" type="submit" disabled={state.submitting}>
            SUBMIT
          </Button>
          </Form>
          </>
        )
      }

