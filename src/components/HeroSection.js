import NavBar from "./NavBar"
import heroImage from "../assets/hero-image.svg";
import {StyledHeroSection} from "../styled/HeroSection.styled";
import niyoBadge from "../assets/niyo-badge-black.svg";

const HeroSection = () => {
    return (
    <>
    <StyledHeroSection>
        <NavBar className="hero-nav" />
        <img src={heroImage} alt="classroom" className="hero-image" />
        <div className="hero-text-container">
            <p className="hero-text">
                Economically empowering black women in <span>technology</span> globally
            </p>
        </div>
        <div className="-hero-badge-containter">
            <img src={niyoBadge} className="hero-badge"/>
        </div>
    </StyledHeroSection>
    </>
    )
}

export default HeroSection;