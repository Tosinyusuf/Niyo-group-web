import NavBar from "./NavBar"

import {StyledHeroSection} from "../styled/HeroSection.styled";

const HeroSection = () => {
    return (
        <StyledHeroSection>
         <NavBar className="hero-nav" />
         <div className="hero-text-container">
            <p className="hero-text">
                Economically empowering black women in <span>technology</span> globally
            </p>
         </div>
        </StyledHeroSection>
    )    
}

export default HeroSection;


/* <StyledHeroSection>
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
</StyledHeroSection> */


/* <img src={heroImage} alt="classroom" className="hero-image" />
<div className="hero-text-container">
</div> 
<div className="-hero-badge-containter">
    <img src={niyoBadge} className="hero-badge"/>
</div>
    ) */