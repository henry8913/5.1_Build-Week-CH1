import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Nav, Navbar, ListGroup, NavDropdown, Row } from 'react-bootstrap';
import { FaLinkedin, FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaTh } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


export default function Mynav() {
  const [profiles, setProfiles] = useState([])
  const [filteredProfiles, setFilteredProfiles] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [user, setUser] = useState([])
  const location = useLocation()

  const url = import.meta.env.VITE_APIURL
  const authKey = import.meta.env.VITE_APIKEY

  useEffect(() => {
    fetch(url, {
      headers: {
        'Authorization': authKey
      }
    })
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((err) => console.log('Errore nel fetch:', err))
  }, [])

  useEffect(() => {
    fetch(import.meta.env.VITE_BASEURL, {
      headers: {
        'Authorization': authKey
      }
    })
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.log('Errore nel fetch dei profili:', err))
  }, []);



  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowResults(value.length > 0);

    if (value.length > 0 && profiles.length > 0) {
      const filtered = profiles.filter((profile) =>
        profile.name?.toLowerCase().includes(value.toLowerCase()) ||
        profile.surname?.toLowerCase().includes(value.toLowerCase()) ||
        profile.title?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProfiles(filtered);
    } else {
      setFilteredProfiles([]);
    }
  };


  return (

    <Navbar expand="lg" className="fixed-top bg-white border-bottom py-1" collapseOnSelect>
      <Container className="d-flex align-items-center">
        <div className="d-flex align-items-center gap-2">
          <Link to="/">
            <FaLinkedin size={40} color="#0A66C2" />
          </Link>
          <Form className="mx-2 position-relative" style={{ width: 'auto' }}>
            <Form.Control
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}

            />
            {showResults && filteredProfiles.length > 0 && location.pathname === '/' && (
              <ListGroup
                className="position-absolute shadow"
                style={{
                  zIndex: 10,
                  width: '100%',
                  top: '100%',
                  maxHeight: '300px',
                  overflowY: 'auto'
                }}
              >
                {filteredProfiles.slice(0, 8).map((profile) => (
                  <Link
                    key={profile._id}
                    to={`/profile/${profile._id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={() => {
                      setShowResults(false)
                      setSearchTerm('')
                    }}
                  >
                    <ListGroup.Item className="d-flex align-items-center gap-2" style={{ cursor: 'pointer' }}>
                      <img
                        src={profile.image}
                        alt={`${profile.name} ${profile.surname}`}
                        width="32"
                        height="32"
                        className="rounded-circle"
                      />
                      <div>
                        <strong>{profile.name} {profile.surname}</strong>
                        <div style={{ fontSize: '12px' }}>{profile.title}</div>
                      </div>
                    </ListGroup.Item>
                  </Link>
                ))}
              </ListGroup>
            )}


          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex align-items-center gap-1">
            <Link to="/" className="nav-item text-center px-3 nav-link">
              <FaHome size={22} />
              <div className="nav-text">Home</div>
            </Link>

            <Nav.Link href="#" className="nav-item text-center px-3">
              <FaUserFriends size={22} />
              <div className="nav-text">My Network</div>
            </Nav.Link>
            <Nav.Link href="#" className="nav-item text-center px-3">
              <FaBriefcase size={22} />
              <div className="nav-text">Jobs</div>
            </Nav.Link>
            <Nav.Link href="#" className="nav-item text-center px-3">
              <FaCommentDots size={22} />
              <div className="nav-text">Messaging</div>
            </Nav.Link>
            <Nav.Link href="#" className="nav-item text-center px-3">
              <FaBell size={22} />
              <div className="nav-text">Notifications</div>
            </Nav.Link>
          </Nav>

          <Nav className="d-flex align-items-center gap-2">
            <Nav.Link href="#" className="nav-item text-center">
              <ListGroup.Item key={user._id}>
                <img
                  src={user.image}
                  width="24"
                  height="24"
                  className="rounded-circle"
                  alt="Foto profilo"
                />
              </ListGroup.Item>
              <div className="nav-text">Me</div>
            </Nav.Link>
            <div className="vertical-divider"></div>
            <Nav.Link href="#" className="nav-item text-center">
              <FaTh size={22} />
              <div className="nav-text">Work</div>
            </Nav.Link>
            <Nav.Link href="#" className="premium-link">Try Premium for €0</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

