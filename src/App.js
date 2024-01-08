import { useState, useEffect } from 'react'

import GlobalStyle from './styled/Global.styled'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

import Home from './pages/Home.js'
import CareersPage from './pages/CareersPage'
import 'antd/dist/antd.min.css'

import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import JobDescription from './pages/Careers/JobDescription'
// import GrowthMarketer from './pages/Careers/GrowthMarketer'
// import ContentMarketer from './pages/Careers/ContentMarketer'
// import ProgramManager from './pages/Careers/ProgramManager'
// import ExcutiveAsssitant from './pages/Careers/ExcutiveAsssitant'

// console.log(getCookieConsentValue())

function App() {
 
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
  

  return (
    <>
     
          <GlobalStyle />
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="careers" element={<CareersPage />}></Route>
              {ourAvailableJobs?.map((item, index) => {
                const url = item.title.replace(/\s+/g, '-').toLowerCase()
                return (
                   <Route
                   exact
                   path={`/careers/${url}`}
                   element={<JobDescription />}
                 ></Route>
                )
              })}
             
            </Routes>
            <Footer />
          </Router>
          {/* <CookieConsent debug={true}>This site uses cookies</CookieConsent> */}
        </>
   
  )
}

export default App
