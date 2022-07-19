import { StyledContainer } from "../../styled/StyledComponents";
import { StyledImageContainer } from "../../styled/StyledComponents";

import careerBlock2 from "../../assets/careers/career-block-2.svg";
import careerBlock1 from "../../assets/careers/career-block-1.svg";
import { CareerImg } from "./style";
import careerBlock3 from "../../assets/careers/career-block-3.svg";
import careerBlock4 from "../../assets/careers/career-block-4.svg";

const CareersImages = () => {
  return (
    <CareerImg>
      <div className="left">
        <div className="left-top-image-container">
          <div className="image-left-top career-image" style={{backgroundImage:`url(${careerBlock1})`}} />
          <div className="image-left-top career-image" style={{backgroundImage:`url(${careerBlock2})`}} />
        </div>
        <div className="left-bottom-image-container career-image" style={{backgroundImage:`url(${careerBlock3})`}} /> 
      </div>
      <div className="right career-image" style={{backgroundImage:`url(${careerBlock4})`}}>

      </div>
      {/* <StyledContainer height="100%" flexDirection="row">
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
      </StyledContainer> */}
    </CareerImg>
  );
};

export default CareersImages;
