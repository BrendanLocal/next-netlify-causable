import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <Container>
        <h1>G-day</h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
