import { StyledHeroSection } from "../styled/HeroSection.styled";

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div className="hero-text-container">
        <p className="hero-text">
          Economically empowering black women in <span>technology</span>{" "}
          globally
        </p>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
