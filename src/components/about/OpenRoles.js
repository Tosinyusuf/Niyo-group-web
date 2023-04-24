import StyledOpenRoles from "../../styled/OpenRoles.styled";
import { Link } from "react-router-dom";

const OpenRoles = () => {
  return (
    <>
      <StyledOpenRoles>
        <p className="roles-description">Open Roles</p>
        <h1 className="roles-title">
          Join our Team <br></br>of executors!
        </h1>
        <p className="roles-text">
          We are a group of distinct brands focused on the economic empowerment
          of black women. We are on a mission to ensure every black woman on the
          planet is a producer, builder or creator of high impact ecosystems.
        </p>
        <Link to="/careers">
          <button className="roles-button">View Open Roles</button>
        </Link>
      </StyledOpenRoles>
    </>
  );
};

export default OpenRoles;
