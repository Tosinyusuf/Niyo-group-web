import StyledPriorities from "../../styled/Priorities.styled";
import orangeRectangle from "../../assets/orange-rectangle.svg";
import { ourPriorities } from "../../constants/data";

const Priorities = () => {
  return (
    <>
      <StyledPriorities>
        <div className="priorities-top-container">
          <p className="priorities-description">
            <img src={orangeRectangle} className="rectangle" alt="rectangle" />
            Our Priorities
          </p>
          <h1 className="priorities-title">
            We value people and <br></br>community
          </h1>
        </div>

        <div className="priorities-bottom-container">
          {ourPriorities.map((item, index) => {
            return (
              <>
                <div className="priorities-block">
                  <img
                    src={item.image}
                    className="priorities-icon"
                    alt="icon"
                  />
                  <div className="priorities-text-container">
                    <h2 className="priorities-header">{item.title}</h2>
                    <p className="priorities-text">{item.text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </StyledPriorities>
    </>
  );
};

export default Priorities;
