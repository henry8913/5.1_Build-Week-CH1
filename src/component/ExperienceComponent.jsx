
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './css/ExperienceComponent.css';

export default function ExperienceComponent() {
  const experiences = [
    {
      logo: "data:image/jpeg;base64,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",
      title: "Co-Founder and CEO",
      company: "EPICODE & EPICODE Institute of Technology",
      date: "2020 - Presente · 5 anni 4 mesi",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEYh2VLbukH4Q/company-logo_100_100/company-logo_100_100/0/1646049190342/gruppo_digitouch_logo?e=1749686400&v=beta&t=HG4-cm-zsznKXc2sYrDViM9ktr1Bhte-0y5C8xSIGRM",
      title: "Non Executive Director",
      company: "Digitouch",
      date: "lug 2024 - Presente · 10 mesi",
      location: "Rome, Latium, Italy",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGpRhkpxp5A9A/company-logo_100_100/company-logo_100_100/0/1630570672166/ernstandyoung_logo?e=1749686400&v=beta&t=Y3LI2bLkfMdNnwyFN-l80ohBxhsjqQaOZCBcPfNN2jw",
      title: "Med Experience Design & Engineering lead",
      company: "EY",
      date: "2020 - set 2021 · 1 anno 9 mesi",
      location: "Milano, Lombardia, Italia",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGAuGi4BBacsA/company-logo_100_100/company-logo_100_100/0/1631311666478?e=1749686400&v=beta&t=K6dA-GU9OTGWZI1eYIK1aVh3XMSQ8ulq-Abr-t5rJCA",
      title: "SME - Media Agency BU Director",
      company: "Italiaonline",
      date: "2017 - 2020 · 3 anni",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/C560BAQFvj9KRYnhOXA/company-logo_100_100/company-logo_100_100/0/1631342846517?e=1749686400&v=beta&t=y7Fn22aTFKiyTk7THuZIosVXWR8dZUeDTp1bVQ-e8LQ",
      title: "Member of the Board",
      company: "Consodata",
      date: "2017 - 2020 · 3 anni",
      location: "Milano, Italia",
    },
  ];

  return (
    <Container className="esperienze-container">
      <h2 className="section-title">Esperienza</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <Card key={index} className="experience-item">
            <div className="experience-content">
              <img src={exp.logo} alt={exp.company} className="company-logo" />
              <div className="experience-details">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="company-name">{exp.company}</p>
                <p className="experience-date">{exp.date}</p>
                {exp.location && <p className="experience-location">{exp.location}</p>}
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="show-all">
        <a href="#" className="show-all-link">Mostra tutte le esperienze (16) →</a>
      </div>
    </Container>
  );
}
