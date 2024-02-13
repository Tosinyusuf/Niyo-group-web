import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cancel from "../../assets/ cancel.svg";
import hamburger from "../../assets/hamburger.svg";
import niyoLogo from "../../assets/niyo-logo-white.svg";
import report from "../../assets/report.pdf"
import { StyledNavBar } from "../../styled/NavBar.styled";

const Bars = styled.img`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: -5px;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <StyledNavBar>
        <div className="nav active">
          <div className="nav-logo-container">
            <Link to="/">
              <img src={niyoLogo} className="nav-logo" alt="niyo logo" />
            </Link>
          </div>
          <div className="nav-link-container desktop">
            {/* <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>

            <a href="mailto:admin@niyo.co">
            <Brands /> */}
            
            <Link className="nav-link urgent" to="/careers">
              <div class="pulse"></div>
              <div class="marker"></div>
              Work With Us
            </Link>
            <a className="nav-link"  href="mailto:admin@niyo.co">
              Contact Us
            </a>
            {/* <Link className="nav-link" to="/contact-us">
              Partner With Us
            </Link> */}
            <a href={report} target="_black" rel="noreferrer">
            <button className="nav-button">
              Download Report
            </button> </a>
          </div>
          <Bars src={hamburger} onClick={showSidebar} />
          <div
            className={sidebar ? "nav-menu active" : "nav-menu"}
            onClick={showSidebar}
          >
            <img src={cancel} className="cancel" alt="" onClick={showSidebar} />
            {/* <Link className="nav-link" to="/">
              <img src={about} alt="" /> Home
            </Link> */}
            {/* <br />
            <Link className="nav-link" to="/about-us">
              <img src={about} alt="" /> About Us
            </Link>
            <br />
            <Link className="nav-link" to="/">
              <img src={planet} alt="" /> Niyo Planet
            </Link>
            <br /> */}

            <Link className="nav-link urgent" to="/careers">
              <div class="pulse"></div>
              <div class="marker"></div>
              Work With Us
            </Link>
            <a className="nav-link"  href="mailto:admin@niyo.co">
              Contact Us
            </a>
            <a href={report} target="_black" rel="noreferrer">
            <button className="nav-button">
              Download Report
            </button> </a>
            {/* <br />
            <Link className="nav-link" to="/contact-us">
              <img src={work} alt="" /> Partner With Us
            </Link> */}
            <br />
           
          </div>
        </div>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
