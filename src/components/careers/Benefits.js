import { StyledContainer } from "../../styled/StyledComponents";
import { StyledTitle } from "../../styled/StyledComponents";
import { StyledParagraph } from "../../styled/StyledComponents";
import { StyledBenefitCardContainer } from "../../styled/StyledComponents";
import { StyledBenefitIcon } from "../../styled/StyledComponents";

import { ourBenefits } from "../../constants/data";

import { CareerBenefits } from "./style";

const Benefits = () => {
  return (
    <CareerBenefits>
      <StyledContainer textAlign="left" className="contain">
        <StyledParagraph
          fontSize="20px"
          fontFamily="regular"
          color="#fbaf00"
          textAlign="left"
          padding="0 0 10px 0"
        >
          Benefits
        </StyledParagraph>
        <StyledTitle
          paddingBottom="60px"
          fontSize="40px"
          lineHeight="40px"
          textAlign="left"
        >
          While working with us,
          <br></br> You enjoy this!
        </StyledTitle>

        <StyledBenefitCardContainer className="benefits">
          {ourBenefits.map((item, index) => {
            return (
              
                <div className="benefit-card" key={index}>
                  <div>
                    <StyledBenefitIcon src={item.icon} />
                  </div>
                  <div>
                    <h4 className="benefit-icon-title">{item.title}</h4>
                    <p className="benefit-icon-text">{item.text}</p>
                  </div>
                </div>
            
            );
          })}
        </StyledBenefitCardContainer>

        <></>
      </StyledContainer>
    </CareerBenefits>
  );
};

export default Benefits;
