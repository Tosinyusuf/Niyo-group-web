
import { StyledHeroSection } from "../../styled/HeroSection.styled";

import button2 from "../../assets/NBbutton.png"
import button3 from "../../assets/NHBbutton.png"

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="hero-text-container">
        <h1 className="hero-text">

        A group of disruptive technology brands

        
        </h1>
        {/* <p>We are a  group of consumer tech brands <br />that disrupt industries.</p> */}

    <div className="brands">

    
        <a href="https://www.niyohairandbeauty.com/" target="_blank" rel="noreferrer"> <img src={button3} alt="NHB button" /></a>
        <a href="https://bootcamps.niyo.co" target="_blank" rel="noreferrer"> <img src={button2} alt="Niyo bootcamps button" /></a>

        </div>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
