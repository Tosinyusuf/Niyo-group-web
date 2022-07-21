import styled from "styled-components";
// import orangeRectangle from "../assets/orange-rectangle.svg";
import breakpointSizes from "../constants/breakpointSizes";
import careerBlock1 from "../assets/careers/career-block-1.svg";

// UNIVERSAL STYLES
export const StyledContainer = styled.div`
  width: 100%;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? backgroundImage : `url(${careerBlock1})`};

  background: ${({ bc }) => (bc ? bc : "#070909")};
  height: ${({ height }) => (height ? height : "auto")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "semibold")};
  padding: ${({ pad }) => (pad ? pad : "100px 0")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "none")}
    0px;

  @media ${breakpointSizes.mobile} {
    margin: 0;
    padding-left: 0px;
    text-align: left;
  }

  @media ${breakpointSizes.desktop} {
    padding-left: 250px;
  }
`;

export const StyledButton = styled.button`
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "none")}
    20px;
  background: ${({ background }) => (background ? background : "#fff")};
  color: ${({ color }) => (color ? color : "#070909")};
  height: ${({ height }) => (height ? height : "50px")};
  width: ${({ width }) => (width ? width : "170px")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "semibold")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "4%")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "4%")};

  @media ${breakpointSizes.mobile} {
    margin: 0;
    align-self: flex-start;
    margin-left: 5%;
  }

  @media ${breakpointSizes.desktop} {
  }
`;

export const StyledTitle = styled.h1`
  margin: ${({ margin }) => (margin ? margin : "0%")};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "AtypDisplay-Bold"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "50px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "60px")};

  color: ${({ color }) => (color ? color : "#fff")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  span {
    color: #ffaf00;
    margin: 0 1.5%;
  }

  @media ${breakpointSizes.mobile} {
    margin: 0;
    line-height: 44px;
    text-align: center;
    font-size: 36px;

    br {
      display: none;
    }
  }
  @media ${breakpointSizes.desktop} {
  }
`;

export const StyledSpan = styled.span`
  color: ${({ color }) => (color ? color : "#fbaf00")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "regular")};
`;

export const StyledParagraph = styled.p`
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "semibold")};
  color: ${({ color }) => (color ? color : "#fff")};
  // width: ${({ width }) => (width ? width : "80%")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "17px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  @media ${breakpointSizes.mobile} {
    text-align: center;
    font-size: 14px;
    font-family: Light;

    br {
      display: none;
    }
  }
  @media ${breakpointSizes.desktop} {
  }
`;

// CUSTOM STYLES
export const StyledBenefitIcon = styled.img`
  width: ${({ width }) => (width ? width : "80px")};
  height: ${({ height }) => (height ? height : "80px")};

  @media ${breakpointSizes.mobile} {
    width: 40px;
    height: 40px;
  }

  @media ${breakpointSizes.desktop} {
  }
`;

export const StyledBenefitCardContainer = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};

  @media ${breakpointSizes.mobile} {
    flex-direction: column;
    padding-left: 5%;
  }

  @media ${breakpointSizes.desktop} {
  }

  .benefit-card {
    width: 50%;
    display: flex;
    padding: 0 10% 8% 0;
    /* padding-bottom: 6%; */

    @media ${breakpointSizes.mobile} {
      flex-direction: column;
      width: 100%;
    }

    @media ${breakpointSizes.desktop} {
    }

    .benefit-icon-title {
      margin: 0;
      padding-left: 10px;
    }

    .benefit-icon-text {
      font-family: Light;
      margin: 0;
      padding-left: 10px;
    }
  }
`;

export const StyledDropdown = styled.div`
  text-align: center;
  .dropdown-button {
    background: ${({ background }) => (background ? background : "#141414")};
    width: ${({ width }) => (width ? width : "30%")};
    border: ${({ border }) => (border ? border : "1px #fff solid")};
    border-top: ${({ borderTop }) =>
      borderTop ? borderTop : "1px #fff solid"};
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "5px"};
    height: ${({ height }) => (height ? height : "45px")};
    color: ${({ color }) => (color ? color : "#fff")};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Light")};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "20px")};
    z-index: 10;
    margin: 16px 0;

    @media ${breakpointSizes.mobile} {
      width: 250px;
    }

    @media ${breakpointSizes.desktop} {
    }

    option {
      height: 200px;
    }

    option:hover {
      background-color: "#070909";
    }

    .panel-header {
      @media ${breakpointSizes.mobile} {
        padding-left: 30px;
      }

      @media ${breakpointSizes.desktop} {
      }
    }

    .panel-text {
      @media ${breakpointSizes.mobile} {
        margin-left: 30px;
      }

      @media ${breakpointSizes.desktop} {
      }
    }
  }
`;

export const StyledAccordion = styled.div`
  color: ${({ color }) => (color ? color : "#fff")};
  padding: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "0px")};
  width: ${({ width }) => (width ? width : "100%")};
  padding: 0 150px;
  display: none;

  @media ${breakpointSizes.mobile} {
    align-self: center;
  }
  .ant-collapse.ant-collapse-icon-position-start {
    background-color: transparent !important ;
    border: none;
    .ant-collapse-item.panel-header {
      border-bottom: 1px solid #afafaf !important;
    }
  }
  .ant-collapse-content {
    background-color: transparent;
    color: #fff;
    font-family: Light;
  }
  .anticon.anticon-right.ant-collapse-arrow {
    svg {
      background-color: #fbaf00;
      border-radius: 50%;
      color: #000;
      height: 20px;
      width: 20px;
      padding: 5px;
    }
  }
  .ant-collapse-header {
    color: #fff !important;
  }

  @media ${breakpointSizes.mobile} {
    padding: 0 20px;
  }
`;

export const StyledImageInsert = styled.div`
  z-index: 10;
  background: ${({ bc }) => (bc ? bc : "#070909")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  .scrolldown-icon {
    display: none;
    margin: 0;

    @media ${breakpointSizes.mobile} {
      display: inline-block;
      height: 40px;
      width: 50px;
      z-index: 10;
    }

    @media ${breakpointSizes.desktop} {
    }
  }
`;

export const StyledImageContainer = styled.div`
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? backgroundImage : `url(${careerBlock1})`};
  width: ${({ width }) => (width ? width : "40%")};
  height: ${({ height }) => (height ? height : "50%")};
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  color: #070909;
  z-index: 1;

  @media ${breakpointSizes.mobile} {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 10;
  }

  @media ${breakpointSizes.desktop} {
  }

  .left-top-image-container {
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
    margin: 0 6% 2% 0;
    /* padding: 0 2% 2% 0; */

    @media ${breakpointSizes.mobile} {
      width: 100%;
      flex-direction: column;
      margin: 0;
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .image-left-top {
    height: 100%;
    width: 50%;

    @media ${breakpointSizes.mobile} {
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .image-left-top:first-child {
    margin-right: 4%;
  }

  .left-bottom-image-container {
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
    margin: 1% 5% 0 0;

    @media ${breakpointSizes.mobile} {
      display: none;
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .right-image-container {
    width: 100%;
    height: 100%;
    padding-left: 2%;

    @media ${breakpointSizes.mobile} {
      display: none;
    }

    @media ${breakpointSizes.desktop} {
    }
  }

  .career-image {
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "15px"};
    border: 1px solid #fff;
    background: ${({ bc }) => (bc ? bc : "#fff")};
    z-index: 5;

    @media ${breakpointSizes.mobile} {
      width: 300px;
      height: 600px;
      /* width: 400px;
      height: 400px; */
    }

    @media ${breakpointSizes.desktop} {
    }
  }
`;
