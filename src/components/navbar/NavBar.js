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
  const [navbar, setNavbar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const changePosition = () => {
    if(window.innerHeight == 91){
        setNavbar(true);
        alert("hello");
    } else {
      setNavbar(false);
    }
    
  };
  

  window.addEventListener('scroll', changePosition);


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
            <Link className="nav-link" to="/contact-us">
              Work With Us
            </Link>
            <Link to="/careers"><button className="nav-button">Join the Niyo Nation</button></Link>
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

            <Link className="nav-link" to="/contact-us">
              <img src={work} alt="" /> Work With Us
            </Link>
            <a className="nav-link" href="https://niyonetwork.com/" target="_blank">
              <img src={cardLogo1} alt="" /> <span>Niyo Bootcamps</span>
            </a>
            <a className="nav-link" href="https://niyohairandbeauty.com/" target="_blank">
              <img src={cardLogo2} alt="" /> <span> Niyo Hair & Beauty</span>
            </a>
            <a className="nav-link" href="https://dapp.niyo.co" target="_blank">
              <img src={cardLogo3} alt="" /> <span>Niyo DApp</span>
            </a>
            <Link to="/careers"><button className="nav-button">Join the Niyo Nation</button></Link>
          </div>
        </div>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
