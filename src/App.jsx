import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Mynav from './component/Mynav'
import HeroComponent from './component/HeroComponent'
import InfoComponent from './component/InfoComponent'
import ActivityComponent from './component/ActivityComponent'
import ExperienceComponent from './component/ExperienceComponent'
import EducationComponent from './component/EducationComponent'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'
import UserProfile from './component/UserProfile'

import { Col, Container, Row } from 'react-bootstrap'

function HomePage() {
  return (
    <>
      <Container fluid className="px-0 px-sm-3">
        <Row className="mx-0">
          <Col xs={12} md={8}>
            <div className="mb-3">
              <HeroComponent />
            </div>
            <div className="mb-3">
              <InfoComponent />
            </div>
            <div className="mb-3">
              <ActivityComponent />
            </div>
            <div className="mb-3">
              <ExperienceComponent />
            </div>
            <div className="mb-3">
              <EducationComponent />
            </div>
          </Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Mynav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
