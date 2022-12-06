import "./PortfolioGallery.css";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../assets/portfolio-data.json";

export default function PortfolioGallery (props) {
    return (
        <div className="portfolio-gallery">
        {portfolioData.map((item) => (
            <PortfolioItem
            image={item.image}
            caption={item.caption}
            description={item.description}
            />
        ))}
        </div>
    );
}
    