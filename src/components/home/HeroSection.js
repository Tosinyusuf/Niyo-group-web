import { StyledHeroSection } from "../../styled/HeroSection.styled";
import TextAnimation from "react-text-animations";
import downArrow from "../../assets/download-icon.svg";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="hero-text-container">
        <p className="hero-text">
          <TextAnimation.Slide
            target="technology"
            text={["technology", "fashion", "Hair & Beauty"]}
            animation={{
              duration: 1000,
              delay: 1500,
              timingFunction: "ease-in-out",
            }}
          >
            Economically empowering black women in technology globally.
          </TextAnimation.Slide>
        </p>
      </div>
      <div className="hero-scroll">
        <img src={downArrow} alt="arrow" />
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
