import { StyledContainer } from "../../styled/StyledComponents";
import { StyledTitle } from "../../styled/StyledComponents";
import { StyledParagraph } from "../../styled/StyledComponents";
import { CareerEmpower } from "./style";
const CareersEmpowered = () => {
  return (
    <CareerEmpower>
      <StyledContainer >
        <StyledTitle>
          You’re not only working with us, <br></br>
          we’ll help you
          <span>
            Feel Empowered, <br></br>
            Be Empowered.
          </span>
        </StyledTitle>

        <StyledParagraph fontFamily="regular">
          Work remotely from anywhere in the world, and stay connected to the
          team. <br></br>
          Whether you're full-time or work-from-home, you have a place at Niyo
          Group.
        </StyledParagraph>
      </StyledContainer>
    </CareerEmpower>
  );
};

export default CareersEmpowered;
