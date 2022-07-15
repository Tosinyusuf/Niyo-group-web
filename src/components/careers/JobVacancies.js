import { StyledContainer } from "../../styled/StyledComponents";
import { StyledParagraph } from "../../styled/StyledComponents";
import { StyledTitle } from "../../styled/StyledComponents";
import { StyledDropdown } from "../../styled/StyledComponents";
import { StyledSpan } from "../../styled/StyledComponents";
import { StyledAccordion } from "../../styled/StyledComponents";

import orangeRectangle from "../../assets/orange-rectangle.svg";
import { ourAvailableJobs } from "../../constants/data";

import { Collapse } from "antd";
const { Panel } = Collapse;

const JobVacancies = () => {
  const jobTypes = [
    "All Departments",
    "Growth",
    "HR",
    "Design",
    "Engineering",
    "Legal",
    "Customer Excellence",
  ];

  return (
    <>
      <StyledContainer>
        <StyledParagraph paddingBottom="1%" fontFamily="Light" color="#fbaf00">
          <img src={orangeRectangle} alt="icon" />
          Open Roles
        </StyledParagraph>
        <StyledTitle className="career-section-title">
          Join our Team<br></br> of executors!
        </StyledTitle>
        <StyledDropdown marginBottom="10%">
          <select className="dropdown-button">
            {jobTypes.map((item) => (
              <option>{item}</option>
            ))}
          </select>
        </StyledDropdown>
        <StyledParagraph className="no-jobs" fontFamily="Light">
          We’re currently not recruiting but if you think you’ve got <br></br>{" "}
          what it takes to work with the executors, Let’s us know <br></br> what
          you can do:{" "}
          <StyledSpan color="#fff" fontFamily="semibold">
            careers@niyo.co
          </StyledSpan>
        </StyledParagraph>

        <StyledContainer
          className="yes-jobs"
          alignItems="flex-start"
          margin="0"
          paddingLeft="150px"
          backgroundColor="#070909"
        >
          <StyledTitle textAlign="left" fontSize="40px">
            Growth
          </StyledTitle>

          <StyledAccordion>
            <Collapse defaultActiveKey={["1"]}>
              {ourAvailableJobs.map((item, index) => {
                return (
                  <>
                    <Collapse>
                      <Panel
                        className="panel-header"
                        header={item.jobTitle}
                        key={item.index}
                      >
                        <p className="panel-text">{item.jobDescription}</p>
                      </Panel>
                    </Collapse>
                  </>
                );
              })}
            </Collapse>
          </StyledAccordion>
        </StyledContainer>
      </StyledContainer>
    </>
  );
};

export default JobVacancies;
