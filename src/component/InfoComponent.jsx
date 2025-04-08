import React from 'react'
import { Card } from 'react-bootstrap';


export default function InfoComponent() {
  return (
    <div>
      <Card>

        <Card.Body>
          <Card.Title className='d-flex'>Informazioni</Card.Title>
          <Card.Text className='float-start'>
           
            I strongly believe in removing boundaries.
            In fact, I built my personal & professional life on trust,
            collaboration and authentic relationships.
            A successful career in media and multinational
            companies made me realize I could have a positive
            impact on young generations and society bridging education, communication and technology...
            
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  )
}
