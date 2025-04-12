
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './css/UserProfile.css';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [seguito, setSeguito] = useState(false);
  
  const url = `${import.meta.env.VITE_BASEURL}/${location.pathname.split('/').pop()}`;
  const authKey = import.meta.env.VITE_APIKEY;

  useEffect(() => {
    fetch(url, {
      headers: {
        'Authorization': authKey
      }
    })
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Errore nel fetch profilo:', err));
  }, []);

  const handleSeguiClick = () => {
    setSeguito(!seguito);
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <>
      <Container fluid className="px-0 px-sm-3">
        <Row className="mx-0">
          <Col xs={12} md={8}>
            <Card className="hero-card mb-2">
              <div className="cover-container">
                <Card.Img
                  variant="top"
                  src="https://media.licdn.com/dms/image/v2/D4D16AQHgPuQErUOj1g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1715028641452?e=1749686400&v=beta&t=5qsUhvIeNVHjcEgw8GmFZxskRZCWnRsDDMaun2mgZH4"
                  className="cover-image"
                />
                <img
                  src={profile.image}
                  className="profile-img"
                  alt={`${profile.name} ${profile.surname}`}
                />
              </div>

              <Card.Body>
                <div className="profile-info">
                  <div className="main-info">
                    <h2>{profile.name} {profile.surname}</h2>
                    <p className="role">{profile.title}</p>
                    <p className="location">{profile.area}, Italia · <a href="#" className="contact-link">Informazioni di contatto</a></p>
                    <p className="connections">500+ collegamenti</p>
                  </div>
                  <div className="company-logos">
                    <div className="company-logo-item">
                      <img
                        src="/img/EPICODE.jpeg"
                        alt="EPICODE"
                      />
                      <span>EPICODE</span>
                    </div>
                  </div>
                </div>

                <div className="action-buttons">
                  <Button variant="primary">Messaggio</Button>
                  <Button variant="outline-primary" onClick={handleSeguiClick}>
                    {seguito ? "Segui già" : "+ Segui"}
                  </Button>
                  <Button variant="outline-secondary">Altro</Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Informazioni</Card.Title>
                <Card.Text className="mt-3">
                  {profile.bio}
                </Card.Text>
              </Card.Body>
            </Card>
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
