import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (

    <Container className="bg-dark-blue">
      <Head>
        <title>Causable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>

        <div className="bg">
        
        <Container fluid className="d-flex flex-column px-5">

        
          <Row className="justify-content-center align-items-center px-5 mx-5">

            <Col className="px-5 pb-5 mx-3">
            <h1 className="text-white text-drop mb-3">Raise more with Causable</h1>
            <p className="lead text-grey text-tight-drop ms-2 mb-4">Increase your charitable fundraising revenue with our all-in-one platform.</p>
            <Row className="pb-5">
              <Col>
              <Link href="#" >
                <Button className="btn btn-blue tight-drop d-arrow ms-2 me-2">
                  LEARN MORE
                </Button>
              </Link>
              <Link href="#" >
                <Button className="btn btn-outline tight-drop video ms-2 me-2">
                  WATCH OUR VIDEO
                </Button>
              </Link>
              </Col>
            </Row>
            </Col>

            <Col>
            <img className="hero-img" src="/landing-mock.png" alt="Chat button"/>
            </Col>

          </Row>
          
        </Container>

        </div>

      </main>

      <Footer />
    </Container>


  )
}
