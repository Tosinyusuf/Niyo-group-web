import StyledJoin from "../styled/Join.styled";

const Join = () => {
  return (
    <>
      <StyledJoin>
        <h1 className="join-title">
          Join Niyo <span>Nation</span>
        </h1>
        <h3 className="join-text">
          Be the first to know about all things at Niyo Group
        </h3>
        <form className="join-form">
          <label className="join-form-label">
            <input
              className="join-email join-button"
              type="text"
              value="Email Address"
            />
            <input
              className="join-submit join-button"
              type="submit"
              value="Sign Up"
            />
          </label>
        </form>
      </StyledJoin>
    </>
  );
};

export default Join;
