import TextAnimation from "react-text-animations";
import { StyledHeroSection } from "../../styled/HeroSection.styled";

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
            Economically empowering Black women in technology globally.
          </TextAnimation.Slide>
        </p>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
