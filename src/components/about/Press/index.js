import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ourPress } from "../../../constants/data";
import {
  StyledContainer,
  StyledParagraph,
  StyledTitle,
} from "../../../styled/StyledComponents";
import { PressContainer } from "./style";

const Press = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <StyledContainer
        alignItems="flex-start"
        paddingLeft="150px"
        textAlign="left"
        style={{ paddingTop: "30px" }}
        pad="00px 0"
      >
        <StyledParagraph
          fontSize="24px"
          fontFamily="regular"
          color="#fbaf00"
          textAlign="left"
          paddingLeft="12%"
          marginBottom="1%"
        >
          Niyo in the news
        </StyledParagraph>
        <StyledTitle textAlign="left" padding="0px 0px 0px 12%">
          Press & News
        </StyledTitle>
      </StyledContainer>
      <PressContainer>
        <Carousel showDots={true} swipeable={true} responsive={responsive}>
          {ourPress.map((item, index) => {
            return (
              <div className="each-press" key={index}>
                <img src={item.brandLogo} alt="" />
                <h2 fontSize="36px">{item.headline}</h2>
                <p padding="0%" textAlign="left">
                  {item.text}
                </p>
                <a href={item.url} target="_blank" rel="noreferrer">
                  Read More{" "}
                </a>
              </div>
            );
          })}
        </Carousel>
      </PressContainer>
    </>
  );
};

export default Press;
