import { StyledContainer } from "../../styled/StyledComponents";
import { StyledImageContainer } from "../../styled/StyledComponents";
import careerBlock2 from "../../assets/careers/career-block-2.svg";
// import careerBlock3 from "../../assets/careers/career-block-2.svg";
// import careerBlock4 from "../../assets/careers/career-block-2.svg";

const CareersImages = () => {
  return (
    <>
      <StyledContainer height="100%" flexDirection="row">
        <StyledImageContainer width="50%" height="100%">
          <div className="left-top-image-container">
            <div className="image-left-top career-image">image 1</div>
            <div className="image-left-top career-image">image 2</div>
          </div>
          <div className="left-bottom-image-container career-image">
            image 3
          </div>
        </StyledImageContainer>

        <StyledImageContainer
          width="50%"
          height="100%"
          backgroundImage={careerBlock2}
        ></StyledImageContainer>
      </StyledContainer>
    </>
  );
};

export default CareersImages;
