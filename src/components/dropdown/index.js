import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { Contain } from "./style";
import cardLogo1 from "../../assets/card-logo-1.svg";
import cardLogo2 from "../../assets/card-logo-2.svg";
import cardLogo3 from "../../assets/card-logo-3.svg";
import blackcoder from "../../assets/black.svg"
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <>
            <Contain>
              <div className="each">
                <div className="icon">
                    <img src={cardLogo1} alt="" />
                </div>
                <div className="text">
                  <h2>Niyo Network</h2>
                  <p>
                    The training ground for the best black women in tech and its
                    intersections with other high impact industries.{" "}
                  </p>
                </div>
              </div>
              <div className="each">
                <div className="icon">
                <img src={cardLogo3} alt="" />
                </div>
                <div className="text">
                  <h2>Niyo DApp</h2>
                  <p>
                    Niyo Dapp is where creators, brands and users get rewarded
                    in crypto for creating killer content through turning their
                    content into NFTs and physical products.
                  </p>
                </div>
              </div>
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
              <div className="each">
                <div className="icon">
                <img src={blackcoder} alt="" />
                </div>
                <div className="text">
                  <h2>Blackcodher</h2>
                  <p>Coding Bootcamp</p>
                </div>
              </div>
            </Contain>
          </>
        ),
      },
    ]}
  />
);

const Brands = () => (
  <>
    <Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()} style={{ color: "#fff", fontSize:"16px" }}>
        Brands
      </a>
    </Dropdown>
  </>
);

export default Brands;
