import HeroImage from "../../assets/images/hero-image.png";

export default function Hero(props) {
    return (
        <div className="hero position-relative">
            <img className="position-absolute" src={HeroImage} alt="Hero Image" />
            {props.children}
        </div>
    );
}