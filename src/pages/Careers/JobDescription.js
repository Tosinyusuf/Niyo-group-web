import React, { useState, useEffect } from 'react'
import Join from '../../components/home/JoinHome'
import axios from 'axios'
import { DetailsContainer, JobContainer } from './style'
import { useLocation } from 'react-router-dom'

const JobDescription = () => {
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

  const location = useLocation()
  const reel = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    reel()
  }, [location.pathname])

  
  const currentPath = location?.pathname
  return (
    <>
      {ourAvailableJobs?.map((item) => {
        const url = item.title.replace(/\s+/g, '-').toLowerCase()
        const uniqueAddress = `/careers/${url}`
        if (currentPath === uniqueAddress)
          return (
            <>
              <JobContainer>
                <div>
                  <h1>{item.title}</h1>
                  <p>
                    Niyo Group is an award-winning group of technology and{' '}
                    <br /> innovation companies that exists to economically{' '}
                    <br />
                    empower black women globally.{' '}
                  </p>
                </div>
              </JobContainer>
              <DetailsContainer
                dangerouslySetInnerHTML={{ __html: item.description }}
                style={{ color: 'white !important' }}
              />
            </>
          )
        return <div />;
      })}

      <Join />
    </>
  )
}

export default JobDescription
