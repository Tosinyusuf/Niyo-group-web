import React, { useState, useEffect } from 'react'
import { StyledContainer, StyledSpan } from '../../styled/StyledComponents'
import { StyledParagraph } from '../../styled/StyledComponents'
import { StyledTitle } from '../../styled/StyledComponents'
import axios from 'axios'
import { StyledDropdown } from '../../styled/StyledComponents'
// import { StyledSpan } from "../../styled/StyledComponents";
import { StyledAccordion } from '../../styled/StyledComponents'

// import { ourAvailableJobs } from "../../constants/data";

import { Collapse } from 'antd'
import { JobVacant } from './style'
import { Link } from 'react-router-dom'
const { Panel } = Collapse

const JobVacancies = () => {
  const jobTypes = [
    'All Departments',
    'Marketing',
    'People & Admin',
    'Operations',
    'Tech',
    'Partnerships',
    'Customer Happiness',
    'Legal',
  ]

  const onChange = (key) => {
    console.log(key)
  }

  const [ourAvailableJobs, setOurAvailableJobs] = useState(null)
  useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://niyogroupapi-wtushxuzaa-lm.a.run.app/api/v1/job')
        .then((res) => {
          setOurAvailableJobs(res.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    fetchData()
  }, [])
  console.log(ourAvailableJobs?.length, 'ourAvailableJobs')
  return (
    <JobVacant>
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
        {ourAvailableJobs?.length === 0 && (
          <StyledParagraph className="no-jobs" fontFamily="Light">
            We’re currently not recruiting but if you think you’ve got <br></br>{' '}
            what it takes to work with the executors, Let’s us know <br></br>{' '}
            what you can do:{' '}
            <StyledSpan color="#fff" fontFamily="semibold">
              careers@niyo.co
            </StyledSpan>
          </StyledParagraph>
        )}
        {ourAvailableJobs?.length > 0 && (
          <StyledAccordion>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
              {ourAvailableJobs?.map((item, index) => {
                const url = item.title.replace(/\s+/g, '-').toLowerCase()
                const regex = /(<([^>]+)>)/gi
                const description = item?.description
                return (
                  <Panel
                    className="panel-header"
                    header={item.title}
                    key={item.id}
                  >
                    <p
                      className="panel-text"
                      dangerouslySetInnerHTML={{
                        __html: `${description
                          .replace(regex, '')
                          .substring(0, 200)}....`,
                      }}
                    />
                    <p className="panel-text">
                      <Link to={`/careers/${url}`}>See More</Link>
                    </p>
                  </Panel>
                )
              })}
            </Collapse>
          </StyledAccordion>
        )}
      </StyledContainer>
    </JobVacant>
  )
}

export default JobVacancies
