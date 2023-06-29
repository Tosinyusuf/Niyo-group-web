import { Dropdown, Menu } from "antd";
import blackcoder from "../../assets/black.svg";
import cardLogo1 from "../../assets/card-logo-1.svg";
import cardLogo2 from "../../assets/card-logo-2.svg";
import { Contain } from "./style";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <>
            <Contain>
              <a
                className="nav-link"
                href="https://bootcamps.niyo.co"
                target="_blank"
                rel="noreferrer"
              >
                <div className="each">
                  <div className="icon">
                    <img src={cardLogo1} alt="" />
                  </div>
                  <div className="text">
                    <h2>Niyo Bootcamps</h2>
                    <p>
                      The training ground for the best black women in tech and
                      its intersections with other high impact industries.{" "}
                    </p>
                  </div>
                </div>
              </a>

              {/* <a
                className="nav-link"
                href="https://dapp.niyo.co"
                target="_blank"
                rel="noreferrer"
              >
                <div className="each">
                  <div className="icon">
                    <img src={cardLogo3} alt="" />
                  </div>
                  <div className="text">
                    <h2>Niyo DApp</h2>
                    <p>
                      Niyo Dapp is where creators, brands and users get rewarded
                      in crypto for creating killer content through turning
                      their content into NFTs and physical products.
                    </p>
                  </div>
                </div>
              </a> */}
              <a
                className="nav-link"
                href="https://niyohairandbeauty.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="each">
                  <div className="icon">
                    <img src={cardLogo2} alt="" />
                  </div>
                  <div className="text">
                    <h2>Niyo Hair & Beauty</h2>
                    <p>
                      Niyo Hair and beauty is the one stop shop for all healthy
                      afro hair and beauty needs.
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="https://blackcodher.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="each">
                  <div className="icon">
                    <img src={blackcoder} alt="" />
                  </div>
                  <div className="text">
                    <h2>Black CodHer</h2>
                    <p>Coding Bootcamp</p>
                  </div>
                </div>
              </a>
            </Contain>
          </>
        ),
      },
    ]}
  />
);

const Brands = () => (
  <>
    <Dropdown overlay={menu} placement="bottom" arrow>
      <p
        onClick={(e) => e.preventDefault()}
        style={{
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "0",
        }}
      >
        Brands
      </p>
    </Dropdown>
  </>
);

export default Brands;
