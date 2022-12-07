import "./PortfolioGallery.css";
import PortfolioItem from "./PortfolioItem";

export default function PortfolioGallery (props) {
    return (
        <div className="portfolio-gallery">
            {props.portfolioData.map((item) => (
                <PortfolioItem
                    image={item.image}
                    caption={item.caption}
                    description={item.description}
                    path={item.path}
                />
            ))}
        </div>
    );
}
