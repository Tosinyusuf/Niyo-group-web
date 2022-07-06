import { StyledContainer } from "../../styled/StyledComponents";
import { StyledTitle } from "../../styled/StyledComponents";
import { StyledParagraph } from "../../styled/StyledComponents";
import { StyledButton } from "../../styled/StyledComponents";

import arrow from "../../assets/black-arrow.svg";

const CareersHome = () => {
  return (
    <>
      <StyledContainer height="100%;">
        <StyledTitle>
          Join the team of <span>executors</span>
          <br></br> and build with us
        </StyledTitle>

        <StyledParagraph>
          Join our team of exceptional people focused on the <br></br> economic
          empowerment of black women.
        </StyledParagraph>

        <StyledButton borderRadius="20px" paddingTop="20px">
          See open roles <img src={arrow} className="arrow" alt="arrow" />
        </StyledButton>
      </StyledContainer>
    </>
  );
};

export default CareersHome;
