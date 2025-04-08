import React from 'react'
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { FaLinkedin, FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaTh } from 'react-icons/fa';

export default function Mynav() {
  return (

<Navbar expand="lg" className="fixed-top bg-body-tertiary py-0">
<Container>
  <FaLinkedin size={40} color="#0A66C2" className='ms-5'/>
<Form>
    <Row>
      <Col xs="auto">
        <Form.Control
          type="text"
          placeholder="Search"
        />
      </Col>
    </Row>
  </Form>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="d-flex flex-row gap-4 align-items-center">
          <Nav.Link href="#"><FaHome size={20} /><div>Home</div></Nav.Link>
          <Nav.Link href="#"><FaUserFriends size={20} /><div>My Network</div></Nav.Link>
          <Nav.Link href="#"><FaBriefcase size={20} /><div>Jobs</div></Nav.Link>
          <Nav.Link href="#"><FaCommentDots size={20} /><div>Messaging</div></Nav.Link>
          <Nav.Link href="#"><FaBell size={20} /><div>Notifications</div></Nav.Link>
        </Nav>
        <Nav className="d-flex flex-row gap-3 align-items-center">
          <Nav.Link href="#"><img src="https://imageio.forbes.com/specials-images/imageserve/67531eb2b5f7c9e191f632d7/0x0.jpg?format=jpg&crop=711,713,x316,y125,safe&height=416&width=416&fit=bounds"  width="30"   height="30" className="rounded-circle" alt="me" /></Nav.Link>
          <Nav.Link href="#"><FaTh size={20} /></Nav.Link>
          <Nav.Link href="#" className="text-warning">Try Premium for €0</Nav.Link>
        </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

