import StyledOpenRoles from "../../styled/OpenRoles.styled";
import orangeRectangle from "../../assets/orange-rectangle.svg";

const OpenRoles = () => {
  return (
    <>
      <StyledOpenRoles>
        <p className="roles-description">
          <img src={orangeRectangle} className="rectangle" alt="rectangle" />
          Open Roles
        </p>
        <h1 className="roles-title">
          Join our Team <br></br>of executors!
        </h1>
        <p className="roles-text">
          We are a group of distinct brands focused on the economic empowerment
          of black women. We are on a mission to ensure every black woman on the
          planet is a producer, builder or creator of high impact ecosystems.
        </p>
        <button className="roles-button">View Open Roles</button>
      </StyledOpenRoles>
    </>
  );
};

export default OpenRoles;
