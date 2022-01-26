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
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import FormControl from 'react-bootstrap/FormControl';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function VideoForm () {

    const [state, handleSubmit] = useForm("xzbodnad");
    if (state.succeeded) {
        return (
            <>
                
         <ReactPlayer url='https://www.youtube.com/watch?v=4fezP875xOQ' className="w-full"/>

            </>        
        );    
    }

return (
    <>

    <h4 className="mb-4">
    Connect with us to watch our demo
    </h4>

    <Form onSubmit={handleSubmit} className="mb-0 pb-0 px-md-1" >
        <Form.Group className="mb-3" controlId="firstlastname">
            <Form.Label htmlFor="name" className="p small text-dark-blue">FIRST AND LAST NAME</Form.Label>
            <Form.Control name="name" type="text" nameplaceholder="" />
            <ValidationError 
              prefix="FirstLastName" 
              field="firstlastname"
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
        
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Stay up to date with Causable news and updates" />
        </Form.Group>

        <Button className="btn btn-blue w-full" type="submit" disabled={state.submitting}>
        WATCH THE DEMO
        </Button>
    </Form>

    </>
    )
}