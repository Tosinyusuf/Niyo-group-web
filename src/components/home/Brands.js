import StyledBrands from "../../styled/Brands.styled";
import orangeRectangle from "../../assets/orange-rectangle.svg";
import { ourWorks } from "../../constants/data";

const Brands = () => {
  return (
    <>
      <StyledBrands>
        <div className="brands-container">
          <p className="brands-description">
            <img src={orangeRectangle} alt="symbol" className="rectangle" />
            Our Brands
          </p>
          <h1 className="brands-title">What we do</h1>
        </div>

        <div className="brand-cards">
          {ourWorks.map((item, index) => {
            return (
              <div className="individual-card" key={index}>
                <div
                  className="card-images"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="logo-div">
                    <img
                      src={item.logo}
                      className="card-niyo-logo"
                      alt="niyo logo"
                    ></img>
                  </div>
                </div>
                <div className="brand-text-container">
                  <h1 className="card-title">{item.title}</h1>
                  <p className="card-text">{item.description}</p>
                  <a href={item.url} target="_blank" rel="noreferrer" >
                    <button className={`${item.id} card-button`}>
                      {item.button}
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </StyledBrands>
    </>
  );
};

export default Brands;
