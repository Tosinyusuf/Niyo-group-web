import { useState, useEffect } from 'react'

import GlobalStyle from './styled/Global.styled'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

import Home from './pages/Home.js'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import CareersPage from './pages/CareersPage'
import 'antd/dist/antd.min.css'

import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './pages/Loading'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import JobDescription from './pages/Careers/JobDescription'
// import GrowthMarketer from './pages/Careers/GrowthMarketer'
// import ContentMarketer from './pages/Careers/ContentMarketer'
// import ProgramManager from './pages/Careers/ProgramManager'
// import ExcutiveAsssitant from './pages/Careers/ExcutiveAsssitant'

console.log(getCookieConsentValue())

function App() {
  const [loading, setLoading] = useState(true)
  const [ourAvailableJobs, setOurAvailableJobs] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 7000)
  }, [])

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
      {loading ? (
        <Loading />
      ) : (
        <>
          <GlobalStyle />
          <Router>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/contact-us" element={<ContactUs />}></Route>
              <Route exact path="about-us" element={<AboutUs />}></Route>
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
              {/* <Route
                exact
                path="/careers/frontend-developer"
                element={<FrontendDeveloper />}
              ></Route>
              <Route
                exact
                path="/careers/growth-marketer"
                element={<GrowthMarketer />}
              ></Route>
              <Route
                exact
                path="/careers/content-marketer"
                element={<ContentMarketer />}
              ></Route>
              <Route
                exact
                path="/careers/program-manager"
                element={<ProgramManager />}
              ></Route>
              <Route
                exact
                path="/careers/executive-administrator"
                element={<ExcutiveAsssitant />}
              ></Route> */}
            </Routes>
            <Footer />
          </Router>
          <CookieConsent debug={true}>This site uses cookies</CookieConsent>
        </>
      )}
    </>
  )
}

export default App
