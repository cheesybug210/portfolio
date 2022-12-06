// portfolio item with image, caption, description

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import "./PortfolioItem.css";


export default function PortfolioItem(props) {
  return (
    //   <div className="portfolio-item">
          <Card className="portfolio-card">
              <Card.Img variant="top" className="card-img-standard" src={props.image} alt={props.caption} />
              <Card.Body>
                  <Card.Title>{props.caption}</Card.Title>
                  <Card.Subtitle className="text-muted">
                      {props.description}
                  </Card.Subtitle>
                  {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
          </Card>
    // </div>
  );
}