import Mynav from './component/Mynav';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Col, Container, Row } from 'react-bootstrap'
import HeroComponent from './component/HeroComponent';
import InfoComponent from './component/InfoComponent';



function App() {

  return (
    <>
     
   <Mynav />
   <Container className='d-flex'>
      <Row className='flex-column'>
        <Col md={8}>
      <HeroComponent/>
      </Col >


      <Col md={8}>
      <InfoComponent/>
      </Col>
      </Row>
   </Container>
    </>
  )
}

export default App