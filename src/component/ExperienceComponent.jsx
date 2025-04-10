import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import './css/ExperienceComponent.css';

export default function ExperienceComponent() {
  const [experiences, setExperiences] = useState([]);
  const expUrl = import.meta.env.VITE_EXP_URL;
  const authKey = import.meta.env.VITE_APIKEY;

  useEffect(() => {
    fetch(expUrl, {
      headers: {
        'Authorization': authKey
      }
    })
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.log('Error fetching experiences:', err));
  }, []);

  return (
    <Container className="esperienze-container">
      <h2 className="section-title">Esperienza</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <Card key={exp._id} className="experience-item">
            <div className="experience-content">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1749686400&v=beta&t=hya8yRFhK7TYDJKpNy9gyph0MJmrmHUm8ZzRLweiVzc" 
                alt={exp.company} 
                className="company-logo" 
              />
              <div className="experience-details">
                <h3 className="experience-title">{exp.role}</h3>
                <p className="company-name">{exp.company}</p>
                <p className="experience-date">
                  {new Date(exp.startDate).getFullYear()} - {exp.endDate ? new Date(exp.endDate).getFullYear() : 'Presente'}
                </p>
                {exp.area && <p className="experience-location">{exp.area}</p>}
              </div>
            </div>                       
          </Card>
        ))}
      </div>
      <div className="show-all">
        <a href="#" className="show-all-link">Mostra tutte le esperienze →</a>
      </div>
    </Container>
  );
}