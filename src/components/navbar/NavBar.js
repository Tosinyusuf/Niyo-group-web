import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cancel from "../../assets/ cancel.svg";
import about from "../../assets/about.svg";
import cardLogo1 from "../../assets/card-logo-1.svg";
import cardLogo2 from "../../assets/card-logo-2.svg";
import cardLogo3 from "../../assets/card-logo-3.svg";
import hamburger from "../../assets/hamburger.svg";
import niyoLogo from "../../assets/niyo-logo-white.svg";
import planet from "../../assets/priorities/planet.svg";
import work from "../../assets/work.svg";
import { StyledNavBar } from "../../styled/NavBar.styled";
import Brands from "../dropdown";
import JoinFamily from "../modal/JoinFamily";

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
        <div className='nav active'>
          <div className="nav-logo-container">
            <Link to="/">
              <img src={niyoLogo} className="nav-logo" alt="niyo logo" />
            </Link>
          </div>
          <div className="nav-link-container desktop">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
            <Brands />
            <Link className="nav-link" to="/careers">
              Work With Us
            </Link>
            <Link className="nav-link" to="/contact-us">
              Partner With Us
            </Link>
            <button className="nav-button"><JoinFamily /></button>
          </div>
          <Bars src={hamburger} onClick={showSidebar} />
          <div
            className={sidebar ? "nav-menu active" : "nav-menu"}
            onClick={showSidebar}
          >
            <img src={cancel} className="cancel" alt="" onClick={showSidebar} />
            <Link className="nav-link" to="/">
              <img src={about} alt="" /> Home
            </Link>
            <Link className="nav-link" to="/about-us">
              <img src={about} alt="" /> About Us
            </Link>
            <Link className="nav-link" to="/">
              <img src={planet} alt="" /> Niyo Planet
            </Link>

            <Link className="nav-link" to="/careers">
              <img src={work} alt="" /> Work With Us
            </Link>
            <Link className="nav-link" to="/contact-us">
              <img src={work} alt="" /> Partner With Us
            </Link>
            <a className="nav-link" href="https://niyonetwork.com/" target="_blank" rel="noreferrer">
              <img src={cardLogo1} alt="" /> <span>Niyo Bootcamps</span>
            </a>
            <a className="nav-link" href="https://niyohairandbeauty.com/" target="_blank" rel="noreferrer">
              <img src={cardLogo2} alt="" /> <span> Niyo Hair & Beauty</span>
            </a>
            <a className="nav-link" href="https://dapp.niyo.co" target="_blank" rel="noreferrer">
              <img src={cardLogo3} alt="" /> <span>Niyo DApp</span>
            </a>
            <button className="nav-button"><JoinFamily /></button>
          </div>
        </div>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
