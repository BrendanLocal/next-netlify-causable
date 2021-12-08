import React, { useState, useEffect, MouseEvent, Component} from 'react';
import { render } from 'react-dom';
import Container from 'react-bootstrap/Container';
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link'

export default function Header() {
  return (
  
  <React.Fragment>
      <div className="container-fluid header logoHeader">
        <div className="row ">
          <div className="col">
            <Link href="/">
            <img className="logo" src="/CAUSABLElogo.svg" alt="Causablelogo"/>
            </Link>
          </div>
        </div>
        </div>

  </React.Fragment>

  )
}
