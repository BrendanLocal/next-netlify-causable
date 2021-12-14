import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (

    <>
    
    <Container fluid className="px-0">
      <Head>
        <title>Causable</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="bg-dark-blue">

        <Container id="hero" fluid className="v-full z-999 py-5 px-md-5 px-4">
          <Row className="justify-content-center align-items-center d-flex mx-xl-5 mx-lg-3 py-lg-0 py-md-5 py-5 px-xl-5">

            <Col xl={6} lg={7} md={7} sm={12} className="px-xl-5 px-lg-5 pb-lg-5 mb-lg-5 pb-md-2 mb-md-2 px-3 mt-md-0 mt-2">
              <h1 className="text-white text-drop mb-3 mt-md-0 mt-5">Raise <br /> more with Causable</h1>
              <p className="lead text-grey text-tight-drop pe-xl-4 ms-2 mb-4">Increase your charitable fundraising revenue with our all-in-one platform.</p>
              <Row className="pb-md-5 pb-3 mb-xl-5 d-none d-sm-block">
                <Col>
                  <Link href="#">
                    <Button className="btn btn-blue tight-drop d-arrow m-1">
                      LEARN MORE
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button className="btn btn-outline tight-drop video m-1">
                      WATCH DEMO
                    </Button>
                  </Link>
                </Col>
              </Row>
              <Row className="pb-md-5 pb-3 mb-xl-5 d-block d-sm-none">
                <Col className="d-grid gap-2">
                  <Link href="#">
                    <Button className="btn btn-blue tight-drop d-arrow m-1">
                      LEARN MORE
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button className="btn btn-outline tight-drop video m-1">
                      WATCH DEMO
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col xl={6} lg={5} md={5} sm={12} className="p-xl-5 py-lg-5 px-lg-4 d-flex justify-content-center">
              <Image fluid className="hero-img mt-5" src="/landing-mock.svg" alt="Image of Causable app" loading="lazy" />
            </Col>

          </Row>
        </Container>


        <Container fluid id="why" className="v-full bg-dgnl c-drag px-xl-5 pb-5">
          <Row className="justify-content-center align-items-center d-flex px-md-5 px-4 pe-lg-0 pe-md-0 pb-5 mx-xl-5 mx-lg-4">

            <Col xl={5} lg={5} md={5} sm={12} className="px-xl-5 ps-lg-4 pt-md-5 mb-lg-5 mb-md-1 mb-0 pb-md-5 pb-2 ">
              <h2 className="text-white text-drop mb-3">Why Causable?</h2>
              <p className="text-grey mb-3 bold ms-1 text-tight-drop">Causable’s electronic raffle technology and marketing platform provides your charitable organizations with unparalleled fundraising capacity in a secure and interactive manner.</p>
              <object className="d-block d-sm-none" type="image/svg+xml" data="/Causable-Animation-ENG.svg" alt="Causable platform animation" />
              <p className="text-grey mb-4 ms-1 pe-xl-5 text-tight-drop">Our mobile playing app allows anyone in your area to play your electronic raffle via their mobile device or computer --  expanding your raffle’s reach and fundraising potential.</p>
              <div className="d-none d-sm-block">
                <Link href="#">
                  <Button className="btn btn-outline tight-drop d-arrow ms-1 mb-md-3 mb-0">
                    WHAT YOU GET
                  </Button>
                </Link>
              </div>
              <div className="d-grid gap-2 mb-5">
                <Link href="#">
                  <Button className="btn btn-outline tight-drop d-arrow ms-1 pb-5 mb-5 mb-0 d-block d-sm-none">
                    WHAT YOU GET
                  </Button>
                </Link>
              </div>
            </Col>

            <Col xl={7} lg={7} md={7} sm={12} className="mb-0 justify-content-center p-0">
              <object className="d-none d-sm-block" type="image/svg+xml" data="/Causable-Animation-ENG.svg" alt="Causable platform animation" />
            </Col>

          </Row>
        </Container>

        <Container fluid id="what" className="v-full z-0 bg-grad c-drag px-xl-5 pb-5">
          <Row className="justify-content-center align-items-center d-flex px-md-5 px-4 pe-lg-0 pe-md-0 pb-5 mx-xl-5 mx-lg-4">

            <Col xl={5} lg={5} md={5} sm={12} className="px-xl-5 ps-lg-4 pt-md-5 mb-lg-5 mb-md-1 mb-0 pb-md-5 pb-2">
              <h6 className="text-blue text-tight-drop mb-3 mt-5">WHAT YOU GET</h6>
              <h3 className="text-white text-drop mb-3">The Game</h3>
              <p className="text-grey text-tight-drop mb-3 bold">Causables electronic raffle technology and marketing platform provides your charitable organizations with unparalleled fundraising capacity in a secure and interactive manner.</p>
              <p className="text-grey text-tight-drop mb-3">Users can sign up, buy their numbers and play each week. The platform uses a random number generator to select a number for each draw and notifies the ticket holder. The platform is secure and eliminates financial errors, the need for cumbersome accounting, and the need for physical ticket sales and tracking.</p>
            </Col>

            <Col xl={7} lg={7} md={7} sm={12} className="p-0 offpage">
            <Image fluid className="dash-img" src="/goldrush-dash.svg" alt="50/50 results" loading="lazy" />
            </Col>
            
          </Row>
        </Container>

        </main>

    <Footer />
    </Container>
    
    </>
  )
}
