import Carousel from 'react-bootstrap/Carousel';
import './Carousels2.css'

function Carousels2() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='1.jpg' className='Caro2-2' text="First slide" />
        <Carousel.Caption>
          <h3>Social Media Marketing</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='9.jpg' className='Caro2-2' text="Second slide" />
        <Carousel.Caption>
          <h3>Frontend Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='11.jpg' className='Caro2-2' text="Third slide" />
        <Carousel.Caption>
          <h3>Full Stack Development</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels2;