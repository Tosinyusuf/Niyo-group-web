import {
  StyledButton,
  StyledContainer,
  StyledParagraph,
  StyledTitle,
} from "../../styled/StyledComponents";

import arrow from "../../assets/black-arrow.svg";
import { CareerHero } from "./style";
import { Link } from "react-scroll";

const CareersHome = () => {
  return (
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

        <Link to="job" spy={true} smooth={true}>
          <StyledButton borderRadius="20px" paddingTop="20px">
            See open roles <img src={arrow} className="arrow" alt="arrow" />
          </StyledButton>
        </Link>
      </StyledContainer>
    </CareerHero>
  );
};

export default CareersHome;
