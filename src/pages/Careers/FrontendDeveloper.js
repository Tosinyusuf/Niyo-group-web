import React from "react";
import Join from "../../components/home/JoinHome";
import { DetailsContainer, JobContainer } from "./style";

const FrontendDeveloper = () => {
  return (
    <>
      <JobContainer>
        <div>
          <h1>Frontend Developer</h1>
          <p>
            Niyo Group is an award-winning group of technology and <br />{" "}
            innovation companies that exists to economically <br />
            empower black women globally.{" "}
          </p>
        </div>
      </JobContainer>

      <DetailsContainer>
        <h2>Role Purpose 🚀</h2>
        <p>
          We are looking for a Frontend Web Developer who is motivated to
          combine the art of design with the art of programming.
          Responsibilities will include translation of the UI/UX design
          wireframes to actual code that will produce visual elements of the
          application. You will work with the UI/UX designer and bridge the gap
          between graphical design and technical implementation, taking an
          active role on both sides and defining how the application looks as
          well as how it works.
        </p>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Job Overview</h2>
        <ul>
          <li>Contract type: Full-Time</li>
          <li>Starting: Immediately</li>
          <li>Location: Niyo HQ Birmingham (Partly remote)</li>
          <li>Job title: Front End Developer</li>
          <li>Reporting to: Tech Lead</li>
          <li>Deadline to apply: September 25th, 2022</li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Duties and Key Responsibilities</h2>
        <ul>
          <li>Develop new user-facing features</li>
          <li>Build reusable code and libraries for future use</li>
          <li>Ensure the technical feasibility of UI/UX designs</li>
          <li>Optimise application for maximum speed and scalability</li>
          <li>
            Assure that all user input is validated before submitting to the
            back-end
          </li>
          <li>Collaborate with other team members.</li>
          <li>Maintain and improve website</li>
          <li>Stay up-to-date on emerging technologies</li>
          <li>Reports directly with the tech lead.</li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Skills and Qualifications</h2>
        <ul>
          <li>Proven work experience as a Front-end developer</li>
          <li>
            Proficient understanding of web markup including JavaScript, HTML5,
            and CSS3
          </li>
          <li>Proficient understanding of styled-components</li>
          <li>
            Proficient understanding of React.js, and Redux and a notable
            understanding of next.js.
          </li>
          <li>
            Proficient understanding of cross-browser compatibility issues and
            ways to work around them
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git.
          </li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Nice to have</h2>
        <ul>
          <li>Basic Understanding of Micro Frontends.</li>
          <li>Familiarity with browser testing and debugging</li>
          <li>An ability to perform well in a fast-paced environment</li>
          <li>Excellent analytical and multitasking skills</li>
          <li>
            Good understanding of asynchronous request handling, APIs, and AJAX
          </li>
          <li>Knowledge of web3.js or ethers.js is a big plus..</li>
          <li>
            Good understanding of SEO principles and ensuring that application
            will adhere to them.
          </li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Application Process 💭💭</h2>
        <ul>
          <li>Online application</li>
          <li>Test (Case Study) and scenario-based challenge: </li>
          <li>Face to face Interview</li>
          <li>References</li>
          <li>Meet the team</li>
        </ul>
      </DetailsContainer>

      <DetailsContainer>
        <h2>Benefits & Compensation🤝</h2>
        <ul>
          <li>
            Work with a super friendly,close-knit,collaborative team and
            actually make a difference to people’s lives
          </li>
          <li>Generous bonus scheme</li>
          <li>28 days holiday + your birthday off</li>
          <li>
            Generous time and budget allocated to relevant professional learning
            and certifications
          </li>
          <li>3% Nest Pension Scheme</li>
          <li>Regular socials… in person and remote</li>
          <li>
            1-1 Coaching to support your wellbeing, personal and professional
            development
          </li>
          <li>
            The opportunity to be at the heart of an exciting and socially
            conscious organisation, and help it scale to truly change people’s
            lives
          </li>
          <li>
            Ability to grow and move up the company very fast depending on your
            commitment.
          </li>
          <li>
            Work in an environment where your voice is heard and see the
            feedback you give develop the organisation
          </li>
          <li>Weekly team wellbeing catch ups and engaging feedback culture</li>
          <li>
            Fantastic rewards for when you become our employee of the month
          </li>
          <li>Generous birthday presents</li>
          <li>Working remotely 2-3 days a week</li>
          <li>Office Snacks</li>
          <li>30% off all Niyo Enterprise products</li>
          <li>Free entry to company and partner events</li>
        </ul>

        <p style={{marginTop:"40px"}}>To apply, kindly click <a href="https://airtable.com/shrVXyhDTpMrOaSVd" target="_blank" rel="noreferrer">
            here
          </a></p>
      </DetailsContainer>

      <Join />
    </>
  );
};

export default FrontendDeveloper;
