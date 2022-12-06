// portfolio item with image, caption, description

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./PortfolioItem.css";


export default function PortfolioItem (props) {
    return (
        //   <div className="portfolio-item">
        // originally 0.43
        <Link className="portfolio-item-link" to={props.link ?? "/about"}>
            <Card className="portfolio-card" style={{ "backgroundImage": `linear-gradient(180deg, hsla(0, 0%, 100%, 0.93) 7%, transparent 34%), url(${props.image})` }}>
                {/* <Card.Img variant="top" className="card-img-standard" src={props.image} alt={props.caption} /> */}
                <Card.Body variant="bottom">
                    <Card.Title>{props.caption}</Card.Title>
                    <Card.Subtitle className="text-muted">
                        {props.description}
                    </Card.Subtitle>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </ Link>
        // </div>
    );
}