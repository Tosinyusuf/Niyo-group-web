import { StyledButton, StyledContainer } from "../styled/StyledComponents";
import { StyledTitle } from "../styled/StyledComponents";
import { StyledParagraph } from "../styled/StyledComponents";
import { Carousel } from "antd";

import orangeRectangle from "../assets/orange-rectangle.svg";

import { ourPress } from "../constants/data";

const Press = () => {
  return (
    <>
      <StyledContainer
        alignItems="flex-start"
        paddingLeft="150px"
        textAlign="left"
      >
        <StyledParagraph
          fontSize="20px"
          fontFamily="regular"
          color="#fbaf00"
          textAlign="left"
          padding="0 0 10px 0"
        >
          <img src={orangeRectangle} alt="rectangle" /> Niyo in the news
        </StyledParagraph>
        <StyledTitle>Press & News</StyledTitle>

        <StyledContainer>
          <div>
            <Carousel>
              {ourPress.map((item, index) => {
                return (
                  <>
                    <img src={item.brandLogo} alt="" />
                    <StyledTitle fontSize="36px">{item.headline}</StyledTitle>
                    <StyledParagraph padding="0%" textAlign="left">
                      {item.text}
                    </StyledParagraph>
                    <StyledButton>Read More ></StyledButton>
                  </>
                );
              })}
            </Carousel>
          </div>
        </StyledContainer>
      </StyledContainer>
    </>
  );
};

export default Press;

/* <StyledContainer
flexDirection="column"
alignItems="flex-start"
width="60%"
>
<img src={item.brandLogo} alt="" />
<StyledTitle  fontSize="36px">
  {item.headline}
</StyledTitle>
<StyledParagraph padding="0%" textAlign="left">
  {item.text}
</StyledParagraph>
<StyledButton>Read More ></StyledButton>
</StyledContainer> */
