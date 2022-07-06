import styled from "styled-components";
import orangeRectangle from "../assets/orange-rectangle.svg";

// UNIVERSAL STYLES
export const StyledContainer = styled.div`
  width: 100%;
  background: ${({ bc }) => (bc ? bc : "#070909")};
  height: ${({ height }) => (height ? height : "auto")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "semibold")};
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "0px")};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "0px")};
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
`;

export const StyledTitle = styled.h1`
  margin: ${({ margin }) => (margin ? margin : "0%")};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "AtypDisplay-Bold"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "50px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "60px")};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? paddingBottom : "30px"};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "0%")};
  color: ${({ color }) => (color ? color : "#fff")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  span {
    color: #ffaf00;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ color }) => (color ? color : "#fbaf00")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "regular")};
`;

export const StyledParagraph = styled.p`
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "semibold")};
  color: ${({ color }) => (color ? color : "#fff")};
  width: ${({ width }) => (width ? width : "80%")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "17px")};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? paddingBottom : "5%"};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "4%")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "4%")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0px 0px 0px 4%")};
`;

// CUSTOM STYLES
export const StyledBenefitIcon = styled.img`
  width: ${({ width }) => (width ? width : "80px")};
  height: ${({ height }) => (height ? height : "80px")};
`;

export const StyledBenefitCardContainer = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};

  .benefit-card {
    width: 50%;
    display: flex;
    padding: 0 10% 8% 0;
    /* padding-bottom: 6%; */

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
  .dropdown-button {
    display: flex;
    align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "center"};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    background: ${({ background }) => (background ? background : "#141414")};
    width: ${({ width }) => (width ? width : "40%")};
    border: ${({ border }) => (border ? border : "1px #fff solid")};
    border-top: ${({ borderTop }) =>
      borderTop ? borderTop : "1px #fff solid"};
    border-radius: ${({ borderRadius }) =>
      borderRadius ? borderRadius : "5px"};
    width: ${({ width }) => (width ? width : "340px")};
    height: ${({ height }) => (height ? height : "50px")};
    color: ${({ color }) => (color ? color : "#fff")};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Light")};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "20px")};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : "0")};
    z-index: 10;

    option {
      height: 200px;
    }
  }
`;

export const StyledAccordion = styled.div`
  color: ${({ color }) => (color ? color : "#fff")};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "0px")};
  width: ${({ width }) => (width ? width : "90%")};

  .panel-header {
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "26px")};
    margin-bottom: ${({ marginBottom }) =>
      marginBottom ? marginBottom : "20px"};
  }

  .panel-header::before {
    display: block;
    content: "";
    /* background: url(orangeRectangle); */
    background-image: url("../assets/orange-rectangle.svg");
    /* background-image: url(../assets/orange-rectangle.svg); */
    background-size: 100px 100px;
    width: 60px;
    height: 60px;
  }

  .panel-text {
    border-top: ${({ borderTop }) =>
      borderTop ? borderTop : "1px #fff solid"};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "regular")};
    padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "10px")};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  }

  .ant-collapse-expand-icon {
    width: ${({ width }) => (width ? width : "10%")};
    float: ${({ float }) => (float ? float : "right")};
  }
`;
