import { useState } from "react";
import { StyledNavBar } from "../styled/NavBar.styled";
import niyoLogo from "../assets/niyo-logo-white.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "../assets/hamburger.svg";
import cardLogo1 from "../assets/card-logo-1.svg";
import cardLogo2 from "../assets/card-logo-2.svg";
import cardLogo3 from "../assets/card-logo-3.svg";
import about from "../assets/about.svg";
import planet from "../assets/planet.svg";
import work from "../assets/work.svg";
import cancel from "../assets/ cancel.svg";

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
      <div>
        <StyledNavBar>
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
            <Link className="nav-link" to="/">
              Brands
            </Link>
            <Link className="nav-link" to="/contact-us">
              Work With Us
            </Link>
            <button className="nav-button">Join the Niyo Nation</button>
          </div>
          <Bars src={hamburger} onClick={showSidebar} />
          <div
            className={sidebar ? "nav-menu active" : "nav-menu"}
            onClick={showSidebar}
          >
            <img src={cancel} className="cancel" alt="" onClick={showSidebar}/>
            <Link className="nav-link" to="/">
              <img src={about} alt="" /> Home
            </Link>
            <Link className="nav-link" to="/">
              <img src={about} alt="" /> About Us
            </Link>
            <Link className="nav-link" to="/">
              <img src={planet} alt="" /> Niyo Planet
            </Link>

            <Link className="nav-link" to="/contact-us">
              <img src={work} alt="" /> Work With Us
            </Link>
            <Link className="nav-link" to="/">
              <img src={cardLogo1} alt="" /> <span>Niyo Network</span>
            </Link>
            <Link className="nav-link" to="/">
              <img src={cardLogo2} alt="" /> <span> Niyo Hair & Beauty</span>
            </Link>
            <Link className="nav-link" to="/">
              <img src={cardLogo3} alt="" /> <span>Niyo DApp</span>
            </Link>
            <button className="nav-button">Join the Niyo Nation</button>
          </div>
        </StyledNavBar>
      </div>
    </>
  );
};

export default NavBar;
