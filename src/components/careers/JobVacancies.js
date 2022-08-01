import { StyledContainer } from "../../styled/StyledComponents";
import { StyledParagraph } from "../../styled/StyledComponents";
import { StyledTitle } from "../../styled/StyledComponents";
import { StyledDropdown } from "../../styled/StyledComponents";
import { StyledSpan } from "../../styled/StyledComponents";
import { StyledAccordion } from "../../styled/StyledComponents";

import { ourAvailableJobs } from "../../constants/data";

import { Collapse } from "antd";
import { JobVacant } from "./style";
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
    <JobVacant id="job">
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
        <StyledParagraph className="no-jobs" fontFamily="Light">
          We’re currently not recruiting but if you think you’ve got <br></br>{" "}
          what it takes to work with the executors, Let’s us know <br></br> what
          you can do:{" "}
          <StyledSpan color="#fff" fontFamily="semibold">
            careers@niyo.co
          </StyledSpan>
        </StyledParagraph>

        <StyledAccordion>
          <StyledTitle textAlign="left" fontSize="40px">
            Growth
          </StyledTitle>
          <Collapse defaultActiveKey={["1"]}>
            {ourAvailableJobs.map((item, index) => {
              return (
                <>
                  <Panel
                    className="panel-header"
                    header={item.jobTitle}
                    key={index}
                  >
                    <p className="panel-text">{item.jobDescription}</p>
                  </Panel>
                </>
              );
            })}
          </Collapse>
        </StyledAccordion>
      </StyledContainer>
    </JobVacant>
  );
};

export default JobVacancies;
