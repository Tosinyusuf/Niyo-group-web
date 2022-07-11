import { StyledContainer } from "../../styled/StyledComponents";
import { StyledImageContainer } from "../../styled/StyledComponents";

const CareersImages = () => {
  return (
    <>
      <StyledContainer height="100%" bc="#070909" flexDirection="row">
        <StyledImageContainer width="50%" height="100%">
          <div className="left-top-image-container">
            <div className="image-left-top career-image">image 1</div>
            <div className="image-left-top career-image">image 2</div>
          </div>
          <div className="left-bottom-image-container career-image">
            image 3
          </div>
        </StyledImageContainer>

        <StyledImageContainer width="50%" height="100%">
          <div className="right-image-container career-image">image 4</div>
        </StyledImageContainer>
      </StyledContainer>
    </>
  );
};

export default CareersImages;
