
import * as React from "react";

import { useEffect } from "react";
import { render } from 'react-dom';
import Container from 'react-bootstrap/Container';
import { GetStaticProps } from 'next'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


export default function Calc() {


  const [selectPlayers, setPlayers] = React.useState("");
  const [selectPrice, setPrice] = React.useState("");
  const [selectPercent, setPercent] = React.useState("");
  const [selectWeeks, setWeeks] = React.useState("");


  const playersCount = Number(selectPlayers);
  const priceNum = Number(selectPrice);
  const percentNum = Number(selectPercent);
  const weeksNum = Number(selectWeeks);

  const changePlayers = (event) => {
    setPlayers(event.target.value);
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const changePercent = (event) => {
    setPercent(event.target.value);
  };

  const changeWeeks = (event) => {
    setWeeks(event.target.value);
  };


const resultAnnual = (selectPlayers * selectPrice * (1/selectPercent) * selectWeeks).toFixed(2);
if (selectPercent > 0){

    const resultWeek = (selectPlayers * selectPrice * (selectPercent/100)).toFixed(2);
} else {

const resultWeek = (selectPlayers * selectPrice ).toFixed(2);
}

  return (

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
                  <div className=" mb-md-0 mb-5" >
                    <Form.Group className="mb-3" controlId="formNumberPlayers">
                      <Form.Label className="text-grey p small">Number of weekly players</Form.Label>
                      <input className="input-alt" size="sm" type="text" placeholder="Enter number" onChange={changePlayers} value={playersCount}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTicketPrice">
                      <Form.Label className="text-grey p small">Ticket play price ($)</Form.Label>
                      <input className="input-alt" size="sm" type="text" placeholder="Enter price"  onChange={changePrice} value={priceNum}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPercentPot">
                      <Form.Label className="text-grey p small">Percentage of the pot your organization takes </Form.Label>
                      <input className="input-alt" size="sm" type="text" placeholder="Enter percentage"  onChange={changePercent} value={percentNum}/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formTicketPrice">
                      <Form.Label className="text-grey p small">Number of weeks you will run your game (yearly)</Form.Label>
                      <input className="input-alt" size="sm" type="text" placeholder="Enter number"  onChange={changeWeeks} value={weeksNum}/>
                    </Form.Group>

                  
                </div>
                </Col>
                <Col className="ps-lg-5 ps-md-4">
                  <h4 className="text-white mb-4">Potential Revenue</h4>
                  <hr />
                  <p className="h2 text-white">{resultWeek > 0 ? "$" + resultWeek : "$0"}</p>
                  <p class="h6 text-blue mb-4">weekly</p>
                  <hr />
                  <p className="h2 text-white">{resultAnnual > 0 ? "$" + resultAnnual : "$0"}</p>
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
  
  )
}
