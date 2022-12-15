// portfolio item with image, caption, description

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./PortfolioItem.css";


export default function PortfolioItem (props) {
    return (
        <Link className="portfolio-item-link" to={props.path ?? "/portfolio"}>
            <Card className="portfolio-card" style={{ "backgroundImage": `linear-gradient(180deg, hsla(0, 0%, 100%, 0.93) 7%, transparent 34%), url(/portfolio/${props.image})` }}>
                <Card.Body variant="bottom">
                    <Card.Title>{props.caption}</Card.Title>
                    <Card.Subtitle className="text-muted">
                        {props.description}
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </ Link>
    );
}