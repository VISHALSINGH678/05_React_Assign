import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './BlogNews.css'

export default function BlogNews() {
  return (
    <div className="BlogNewsDiv-main">
      <div className="BlogNewsDiv2">
        <br />
        <p>--OUR BLOGS & NEWS</p>
        <br />
        <h1>
          Get More Update <br />
          For News
        </h1>
        <br />
        <p>
          We are 100+ professional software enginerrs with <br />
          more then 10 years of experience in delivering <br />
          super products it because you've seen it.
        </p>
        <br />
      </div>
      <div className="BlogNewsDiv1">
        <Card style={{ width: "19rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>
              Agency Needs To Embrace Social <br />
              Media..
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "19rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "19rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "19rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
