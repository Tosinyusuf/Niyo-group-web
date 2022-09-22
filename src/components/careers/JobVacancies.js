import React from "react";
import { StyledContainer } from "../../styled/StyledComponents";
import { StyledParagraph } from "../../styled/StyledComponents";
import { StyledTitle } from "../../styled/StyledComponents";
import { StyledDropdown } from "../../styled/StyledComponents";
// import { StyledSpan } from "../../styled/StyledComponents";
import { StyledAccordion } from "../../styled/StyledComponents";

import { ourAvailableJobs } from "../../constants/data";

import { Collapse } from "antd";
import { JobVacant } from "./style";
import { Link } from "react-router-dom";
const { Panel } = Collapse;

const JobVacancies = () => {
  const jobTypes = [
    "All Departments",
    "Marketing",
    "People & Admin",
    "Operations",
    "Tech",
    "Partnerships",
    "Customer Happiness",
    "Legal"
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <JobVacant >
      <StyledContainer pad="50px 0">
        <StyledParagraph paddingBottom="1%" fontFamily="Light" color="#fbaf00">
          Open Roles
        </StyledParagraph>
        <StyledTitle className="career-section-title">
          Join our Team<br></br> of executors!
        </StyledTitle>
        <StyledDropdown>
          <select className="dropdown-button">
            {jobTypes.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </StyledDropdown>
        {/* <StyledParagraph className="no-jobs" fontFamily="Light">
          We’re currently not recruiting but if you think you’ve got <br></br>{" "}
          what it takes to work with the executors, Let’s us know <br></br> what
          you can do:{" "}
          <StyledSpan color="#fff" fontFamily="semibold">
            careers@niyo.co
          </StyledSpan>
        </StyledParagraph> */}

        <StyledAccordion>
          
          <Collapse defaultActiveKey={['1']} onChange={onChange}>
            {ourAvailableJobs.map((item, index) => {
              return (
                
                  <Panel
                    className="panel-header"
                    header={item.jobTitle}
                    key={item.id}
                  >
                    <p className="panel-text">{item.jobDescription} <Link to={item.url}>See More</Link></p>
                  </Panel>
                 
              );
            })}
          </Collapse>
        </StyledAccordion>
      </StyledContainer>
    </JobVacant>
  );
};

export default JobVacancies;
