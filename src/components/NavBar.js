import { StyledNavBar } from "../styled/NavBar.styled";
import niyoLogo from "../assets/niyo-logo-white.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>
        <StyledNavBar>
          <div className="nav-logo-container">
            <img src={niyoLogo} className="nav-logo" alt="niyo logo" />
          </div>
          <div className="nav-link-container">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about-us">
              About Us
            </Link>
            <Link className="nav-link" to="/">
              Our Brands
            </Link>
            <Link className="nav-link" to="/contact-us">
              Work With Us
            </Link>
            <button className="nav-button">Join the Niyo Nation</button>
          </div>
        </StyledNavBar>
      </div>
    </>
  );
};

export default NavBar;
