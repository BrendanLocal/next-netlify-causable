import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
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
              <p className="lead text-grey text-tight-drop pe-4 ms-1 mb-4">Increase your charitable fundraising revenue with our all-in-one platform.</p>
              <Row className="pb-md-5 pb-3 mb-xl-5 d-none d-sm-block">
                <Col>
                  <Link href="#why">
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
                  <Link href="#why">
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
              <Image fluid className="hero-img mt-5 me-xl-5" src="/landing-mock.svg" alt="Image of Causable app" />
            </Col>

          </Row>
        </Container>


        <Container fluid className="v-full bg-dgnl c-drag align-items-center d-flex px-xl-5 pb-5 mb-5 ">
          <Row id="why" className="justify-content-center align-items-center d-flex px-md-5 px-4 pe-lg-0 pe-md-0 pb-5 mx-xl-5 mx-lg-4 pt-md-5">

            <Col xl={5} lg={5} md={5} sm={12} className="px-xl-5 ps-lg-4 pt-lg-0 pt-md-5 mb-lg-5 mb-md-1 mb-0 pb-md-5 pb-2 ">
              <h2 className="text-white text-drop mb-3">Why Causable?</h2>
              <p className="text-grey mb-3 bold ms-1 text-tight-drop">Causable’s electronic raffle technology and marketing platform provides your charitable organizations with unparalleled fundraising capacity in a secure and interactive manner.</p>
              <object className="d-block d-sm-none" type="image/svg+xml" data="/Causable-Animation-ENG.svg" alt="Causable platform animation" />
              <p className="text-grey mb-4 ms-1 text-tight-drop">Our mobile playing app allows anyone in your area to play your electronic raffle via their mobile device or computer --  expanding your raffle’s reach and fundraising potential.</p>
              <div className="d-none d-sm-block">
                <Link href="#what">
                  <Button className="btn btn-outline tight-drop d-arrow mb-md-3 mb-0">
                    WHAT YOU GET
                  </Button>
                </Link>
              </div>
              <div className="d-grid gap-2 mb-5">
                <Link href="#what">
                  <Button className="btn btn-outline tight-drop d-arrow pb-5 mb-5 mb-0 d-block d-sm-none">
                    WHAT YOU GET
                  </Button>
                </Link>
              </div>
            </Col>

            <Col xl={7} lg={7} md={7} sm={12} className="mb-0 justify-content-center p-0 pb-xl-5 pb-md-5">
              <object className="d-none d-sm-block" type="image/svg+xml" data="/Causable-Animation-ENG.svg" alt="Causable platform animation" />
            </Col>

          </Row>
        </Container>

        <Container fluid className="v-full z-0 bg-grad c-drag-3 ps-xl-5 pb-5 mb-5">

          <Row id="what" className="align-items-center d-flex ps-md-5 pt-5 ps-4 pe-lg-0 pe-md-0 pb-5 pb-lg-0 pb-xl-5  ms-xl-5 ms-lg-4">

            <Col xl={5} lg={5} md={8} sm={12} className="px-xl-5 ps-lg-4 pt-md-5 mb-lg-5 mb-md-1 mb-0 pb-md-5 pb-2 pe-5">
              <h6 className="text-blue text-tight-drop mb-3 mt-5">WHAT YOU GET</h6>
              <h3 className="text-white text-drop mb-3">The Game</h3>
              <p className="text-grey text-tight-drop mb-3 bold">Causables electronic raffle technology and marketing platform provides your charitable organizations with unparalleled fundraising capacity in a secure and interactive manner.</p>
              <p className="text-grey text-tight-drop mb-3">Users can sign up, buy their numbers and play each week. The platform uses a random number generator to select a number for each draw and notifies the ticket holder. The platform is secure and eliminates financial errors, the need for cumbersome accounting, and the need for physical ticket sales and tracking.</p>
            </Col>

            <Col md={12} sm={12} className="p-0 d-block d-lg-none">
            <Image fluid className="dash-img p-0" src="/goldrush-dash.svg" alt="50/50 results" />
            </Col>

            <Col lg={7} className="p-0 d-none d-lg-block">
            <Image fluid className="dash-img p-0" src="/goldrush-dash.svg" alt="50/50 results" />
            </Col>
            
          </Row>

          <Row id="what-2" className="align-items-center d-flex ps-md-5 ps-4 pe-lg-0 pe-md-0 pb-5 pb-lg-0 pb-xl-5 ms-xl-5 ms-lg-4">

            <Col xl={5} lg={5} md={8} sm={12} className="px-xl-5 ps-lg-4 pt-md-5 mb-lg-5 mb-md-1 mb-0 pb-md-5 pb-2 pe-5">
              <h6 className="text-blue text-tight-drop mb-3 mt-5">WHAT YOU GET</h6>
              <h3 className="text-white text-drop mb-3">Branded Mobile App for your Charity</h3>
              <p className="text-grey text-tight-drop mb-3 bold">Logo, colors, important communication, this is <span className="italic">your</span> charity app.</p>
              <p className="text-grey text-tight-drop mb-3">We incorporate your charity/team branding and feature your important content for communicating with your community. News, schedules, games, rosters, events, etc are all featured on your app and provide a place to communicate and engage with your members / fans / stakeholders.</p>
            </Col>

            <Col md={12} sm={12} className="p-0 d-block d-lg-none">
              <Row className="p-0 m-0">
                <Col className="p-0 m-0">
                <Image fluid className="app-img" src="/theapp1.svg" alt="Branded mobile app dashboard" />
                </Col>
                <Col className="px-3 m-0">
                <Image fluid className="app-img" src="/theapp2.svg" alt="Branded mobile app schedule" />
                </Col>
                <Col className="p-0 m-0">
                <Image fluid className="app-img-3" src="/theapp3.svg" alt="Branded mobile app loadscreen" />
                </Col>
              </Row>
            </Col>
             
            <Col lg={7} className="p-0 d-none d-lg-block">
            <Row className="p-0 m-0">
                <Col className="p-0 m-0">
                <Image fluid className="app-img" src="/theapp1.svg" alt="Branded mobile app dashboard" />
                </Col>
                <Col className="px-3 m-0">
                <Image fluid className="app-img" src="/theapp2.svg" alt="Branded mobile app schedule" />
                </Col>
                <Col className="p-0 m-0">
                <Image fluid className="app-img-3" src="/theapp3.svg" alt="Branded mobile app loadscreen" />
                </Col>
              </Row>
            </Col>
            
          </Row>

          <Row id="what-3" className="align-items-center d-flex pt-xl-3 pb-5 ps-md-5 ps-4 pe-lg-0 pe-md-0 ms-xl-5 ms-lg-4">
            <Col xl={5} lg={5} md={8} sm={12} className="px-xl-5 ps-lg-4 pt-md-5 mb-lg-5 mb-md-1 mb-0 pb-2 pe-lg-4 pe-5">
              <h6 className="text-blue text-tight-drop mb-3 mt-5">WHAT YOU GET</h6>
              <h3 className="text-white text-drop mb-3">Ongoing Support</h3>
              <ul className="text-grey text-tight-drop">
                <li className="mb-2">
                Technical Support
                </li>
                <li className="mb-2">
                Marketing &amp; Creative 
                </li>
                <li className="mb-2">
                Regulatory Compliance
                </li>
                <li className="mb-4">
                Financial Reporting eliminates the huge volunteer effort required for manual lotteries, and ensures accuracy in management of funds, banking and financial reporting
                </li>
              </ul>
              <div className="d-none d-sm-block">
                <Link href="#how">
                  <Button className="btn btn-outline tight-drop d-arrow ms-1 mb-0">
                    HOW TO WORK WITH US
                  </Button>
                </Link>
              </div>
              <div className="d-grid gap-2 mb-5">
                <Link href="#how">
                  <Button className="btn btn-outline tight-drop d-arrow ms-2 pb-5 mb-0 d-block d-sm-none">
                  HOW TO WORK WITH US
                  </Button>
                </Link>
              </div>
            </Col>

            <Col md={12} sm={12} className="p-0 m-0 d-block d-lg-none">
            <Image fluid className="support-img p-0" src="/ongoing-support.svg" alt="Ongoing support" />
            </Col>

            <Col lg={7} className="p-0 d-none d-lg-block">
            <Image fluid className="support-img p-0" src="/ongoing-support.svg" alt="Ongoing support" />
            </Col>            
          </Row>  
        </Container>

        <Container fluid className="v-150 bg-dgnl c-drag-2 align-items-center d-flex px-xl-5 pb-5 mb-5">
          <Row id="how" className="align-items-center d-flex px-md-5 px-4 pe-lg-0 pe-md-0 py-5 pb-xl-0 mb-xl-0 mx-xl-5 mx-lg-4">

            <Col lg={5} md={6} sm={12} className="ps-xl-5 ps-lg-4 pe-lg-0 pe-md-4 py-md-5 mb-md-0 mb-3">
              <h2 className="text-white text-drop mb-3">How To Work With Us</h2>
              <p className="text-grey mb-3 bold ms-1 text-tight-drop">We have created an innovative solution that will help change the way charities engage their donors. The elegance and ease of use will delight your users and drive revenues to your organization.</p>
              <p className="text-grey text-tight-drop mb-2">Along with our partnerships, our business model purposely has created an environment that ensures Causable has a vested interest in your success, a true partnership.</p>
              <p className="text-grey text-tight-drop mb-2">With this innovation comes technical and business complexity. To help us navigate the complexity and create this elegant experience we have partnered with best in class industry leaders for their respective fields - banking, security, identity management, and compliance.</p>
              <p className="text-grey text-tight-drop">For Causable, taking this route comes with inherent costs &amp; overhead, but it also gives stability, peace of mind and most importantly a clear path to success for your organization and for Causable.</p>
            </Col>

            <Col lg={{ span: 6, offset: 1 }} md={5} sm={12} className="well ms-lg-5 ">
              <h4 class="text-white text-drop">It's so easy to get started!</h4>
              <hr />
              <h6 class="text-blue text-tight-drop">STEP 1</h6>
              <p class="lead text-grey text-drop mb-3">Partner with Causable</p>
              <div className="d-none d-sm-block">
                <Link href="#">
                  <Button className="btn btn-blue tight-drop arrow">
                    GET STARTED
                  </Button>
                </Link>
              </div>
              <div className="d-grid gap-2 mb-5">
                <Link href="#">
                  <Button className="btn btn-blue tight-drop arrow d-block d-sm-none">
                    GET STARTED
                  </Button>
                </Link>
              </div>
              <hr />
              <h6 class="text-blue text-tight-drop">STEP 2</h6>
              <p class="lead text-grey text-drop mb-2">Get your lottery license</p>
              <p class="text-grey text-tight-drop mb-5"><span className="bold">Don’t worry!</span> We will help you with that.</p>
              <hr />
              <h6 class="text-blue text-tight-drop">STEP 3</h6>
              <p class="lead text-drop text-grey">Start promoting</p>
              
            </Col>

          </Row>
        </Container>

        <Container fluid className="v-150 z-0 c-drag-3 bg-grad px-xl-5 pb-xl-3">
          <Row id="partners" className="justify-content-center align-items-center d-flex px-md-5 px-4 pt-5 mt-3 mx-xl-5 mx-lg-4">
            <Col lg={9} sm={12} className="px-xl-5 px-lg-4">
              <h2 className="text-white text-center text-drop mb-5 d-none d-md-block">Our Partners</h2>
              <h2 className="text-white text-drop mb-5 d-md-none">Our Partners</h2>
              <div className="d-flex justify-content-between align-items-center">          
                <Image fluid className="col-3 pe-4" src="/upei-logo.svg" alt="UPEI logo" />    
                <Image fluid className="col-3" src="/mount-logo.svg" alt="Mount Academy logo" />  
                <Image fluid className="col-3 " src="/bgc-logo.svg" alt="Boys &amp; Girls Club Logo" />                 
              </div>
              <hr/>
              <Row className="text-grey text-tight-drop mt-4">
                <Col md={6} sm={12}>
                <h5 className="mb-1">Universities</h5>
                <p className="mb-4">UPEI Panthers</p>
                <h5 className="mb-1">Private Schools</h5>
                <p className="mb-4">The Mount Academy</p>
                <h5 className="mb-1">Boys and Girls Clubs</h5>
                <p className="mb-4">bgc Charlottetown</p>
                <h5 className="mb-1">Minor Sports</h5>
                <p className="mb-4">North River Minor Hockey</p>
                </Col>
                <Col md={6} sm={12}>
                <h5 className="mb-1">Home &amp; School</h5>
                <p>Charlottetown Rural Senior High School</p>
                <p>Colonel Gray Senior High School</p>
                <p>Birchwood Intermediate School</p>
                <p>Donagh Regional School</p>
                <p>Glen Stewart Primary School</p>
                <p>Gulf Shore Consolidated School</p>
                <p>L. M. Montgomery Elementary School</p>
                <p>Parkdale Elementary School</p>
                <p>Queen Charlotte Intermediate School</p>
                <p>Spring Park Elementary School</p>
                <p>Stonepark Intermediate School</p>
                <p>Stratford Elementary School</p>
                <p>West Kent Elementary School</p>
                <p>West Royalty Elementary School</p>
                </Col>
              </Row>

            </Col>
          </Row>
        
        </Container>

        <Container fluid className="v-135 bg-mix c-drag-4 px-xl-5 pb-5">
        <Row id="calculate" className="justify-content-center align-items-center d-flex px-md-5 px-4 mt-3 mx-xl-5 mx-lg-4 mb-5 py-md-5">
            <Col sm={12} className="px-xl-5 px-lg-4 pt-md-5">
              <h2 className="text-white text-center text-drop mb-3 d-none d-md-block">Calculate Potential Revenue</h2>
              <p className="text-grey text-center mb-4 text-tight-drop d-none d-md-block">Try our revenue calculator to get a sense of what your potential revenue could like with Causable.</p>
              <h2 className="text-white text-drop mb-3 d-md-none">Calculate Potential Revenue</h2>
              <p className="text-grey mb-4 text-tight-drop d-md-none">Try our revenue calculator to get a sense of what your potential revenue could like with Causable.</p>
              <Row className="well">
                <Col className="brdr-rght pe-lg-5 pe-md-4">
                  <h4 className="text-white">Enter Raffle Numbers</h4>
                  <ul className="text-grey">
                    <li className="small">
                    Numbers are pre-populated to a common scenario
                    </li>
                  </ul>
                 
                  <hr />
                  <Form className=" mb-md-0 mb-5" >
                    <Form.Group className="mb-3" controlId="formNumberPlayers">
                      <Form.Label className="text-grey p small">Number of weekly players</Form.Label>
                      <Form.Control className="input-alt" size="sm" type="email" placeholder="Enter number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTicketPrice">
                      <Form.Label className="text-grey p small">Ticket play price ($)</Form.Label>
                      <Form.Control className="input-alt" size="sm" type="email" placeholder="Enter price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPercentPot">
                      <Form.Label className="text-grey p small">Percentage of the pot your organization takes </Form.Label>
                      <Form.Control className="input-alt" size="sm" type="email" placeholder="Enter percentage" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTicketPrice">
                      <Form.Label className="text-grey p small">Number of text messages sent weekly per-player</Form.Label>
                      <Form.Control className="input-alt" size="sm" type="email" placeholder="Enter number" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formTicketPrice">
                      <Form.Label className="text-grey p small">Number of weeks you will run your game (yearly)</Form.Label>
                      <Form.Control className="input-alt" size="sm" type="email" placeholder="Enter number" />
                    </Form.Group>

                  <div className="d-grid gap-2">
                  <Button className="btn-blue" type="submit" size="lg">
                    CALCULATE REVENUE
                  </Button>
                  </div>
                </Form>
                </Col>
                <Col className="ps-lg-5 ps-md-4">
                  <h4 className="text-white mb-4">Potential Revenue</h4>
                  <hr />
                  <p className="h2 text-white">$9,237</p>
                  <p class="h6 text-blue mb-4">weekly</p>
                  <hr />
                  <p className="h2 text-white">$480,321</p>
                  <p class="h6 text-blue mb-4">yearly</p>
                  
                  <ul className="text-grey">
                    <li className="small">
                    Approximate total Revenue for your organization after winners split, Causable fees, and averaged taxes.
                    </li>
                  </ul>

                  <hr />
                  <p className="text-grey small">
                  This revenue is generated with very little effort on your part. Once the game is set up and running it continues to tick along automatically, resetting or continuing depending on if there was winner that particular week.
                  </p>
                </Col>
              </Row>
            </Col>
              
          </Row>
        </Container>

        </main>

    <Footer />
    </Container>
    
    </>
  )
}
