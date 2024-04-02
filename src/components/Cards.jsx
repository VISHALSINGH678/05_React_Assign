import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'

export default function Cards() {
  return (
    <>
    <br />
    <p className='Cardp1'>--OUR BEST SERVICES</p>
    <h1>We Provide Best Services</h1>
    <br />
    <div className='Card1'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="9.jpg" />
      <Card.Body>
        <Card.Title>Strategy & Planning</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="9.jpg" />
      <Card.Body>
        <Card.Title>Planning & Strategy</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="9.jpg" />
      <Card.Body>
        <Card.Title>Content Marketing</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




    </div>
    <div className="Card1">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="9.jpg" />
      <Card.Body>
        <Card.Title>Seo Audits & Strategy</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="9.jpg" />
      <Card.Body>
        <Card.Title>Design & Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="9.jpg" />
      <Card.Body>
        <Card.Title>Seo Audits & Strategy</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>





    </div>
    </>
  );
}