import { useRef } from "react";
import CareersImages from "../components/careers/CareersImages";
import CareersEmpowered from "../components/careers/CareersEmpowered";
import Benefits from "../components/careers/Benefits";
import JobVacancies from "../components/careers/JobVacancies";
import Join from "../components/home/JoinHome";
import { CareerHero } from "../components/careers/style";
import arrow from "../assets/black-arrow.svg";
import {
  StyledButton,
  StyledContainer,
  StyledParagraph,
  StyledTitle,
} from "../styled/StyledComponents";
import { Link } from "react-scroll";

const CareersPage = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CareerHero>
        <StyledContainer style={{ textAlign: "center" }}>
          <StyledTitle>
            Join the team of<span>executors</span>
            <br></br> and build with us
          </StyledTitle>

          <StyledParagraph>
            Niyo, where the best get better. Join our team of exceptional people
            focused on the <br></br> economic empowerment of black women.
          </StyledParagraph>

          <StyledButton
            borderRadius="20px"
            paddingTop="20px"
            onClick={handleClick}
          >
            See open roles <img src={arrow} className="arrow" alt="arrow" />
          </StyledButton>
        </StyledContainer>
      </CareerHero>
      <CareersImages />
      <CareersEmpowered />
      <Benefits />
      <div ref={ref}>
        <JobVacancies />
      </div>
      <Join />
    </>
  );
};

export default CareersPage;
